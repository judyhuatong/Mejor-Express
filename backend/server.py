# Mejor express backend — stdlib only (no pip).
# Reads official names from the same JS data files the pages use.
# Does not invent majors.
from __future__ import annotations

import json
import os
import random
import re
from difflib import SequenceMatcher
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parent.parent
PORT = int(os.environ.get("PORT", "3000"))

LINE_IDS = {"logic", "care", "world", "make"}


def _read(name: str) -> str:
    return (ROOT / name).read_text(encoding="utf-8")


def official_titles() -> list[str]:
    return re.findall(r'^\s+"([^"]+)": F\(', _read("search-facts.js"), re.M)


def title_aliases() -> list[tuple[str, list[str]]]:
    text = _read("search-facts.js")
    out = []
    for title, raw in re.findall(r'^\s+"([^"]+)": F\(\s*\[([^\]]*)\]', text, re.M):
        aliases = re.findall(r'"([^"]+)"', raw)
        out.append((title, aliases))
    return out


def university_ids() -> list[str]:
    block = _read("catalog.js").split("var F = {", 1)[1].split("};", 1)[0]
    return re.findall(r"^\s{4}([a-z0-9]+): \[", block, re.M)


def faculty_count() -> int:
    return len(re.findall(r'\{ name: "', _read("catalog.js")))


def quiz_size() -> int:
    return len(re.findall(r'\bq\("', _read("quiz-bank.js")))


def station_count() -> int:
    match = re.search(r"const LINES = \[([\s\S]*?)\];", _read("explorer.html"))
    if not match:
        return 0
    stops = re.findall(r'"([a-z]+)"', match.group(1))
    return len([s for s in stops if s not in LINE_IDS])


def stats() -> dict:
    titles = official_titles()
    unis = university_ids()
    return {
        "product": "Mejor express",
        "updated": "Aug 2026",
        "lines": 4,
        "stations": station_count(),
        "universities": len(unis),
        "universityIds": unis,
        "faculties": faculty_count(),
        "officialTitles": len(titles),
        "quizBank": quiz_size(),
        "quizPerVisit": 20,
        "note": "Counts come from catalog files, not from memory.",
    }


def search_majors(query: str, limit: int = 8) -> list[dict]:
    q = (query or "").strip().lower()
    if not q:
        return []
    scored = []
    for title, aliases in title_aliases():
        blob = " ".join([title] + aliases).lower()
        if q == title.lower() or q in (a.lower() for a in aliases):
            score = 1.0
        elif q in blob:
            score = 0.85
        else:
            score = SequenceMatcher(None, q, title.lower()).ratio()
            for a in aliases:
                score = max(score, SequenceMatcher(None, q, a.lower()).ratio())
        if score >= 0.42:
            scored.append({"name": title, "score": round(score, 3)})
    scored.sort(key=lambda x: (-x["score"], x["name"]))
    return scored[:limit]


def quiz_draw(n: int = 20) -> dict:
    n = max(4, min(n, 40))
    text = _read("quiz-bank.js")
    items = []
    for dim, prompt in re.findall(
        r'q\("(EI|SN|TF|JP)",\s*"((?:\\.|[^"\\])*)"',
        text,
    ):
        items.append({"dim": dim, "prompt": prompt.replace('\\"', '"')})
    by = {"EI": [], "SN": [], "TF": [], "JP": []}
    for item in items:
        by[item["dim"]].append(item)
    base, extra = divmod(n, 4)
    deck = []
    for i, dim in enumerate(["EI", "SN", "TF", "JP"]):
        take = base + (1 if i < extra else 0)
        pool = list(by[dim])
        random.shuffle(pool)
        deck.extend(pool[:take])
    random.shuffle(deck)
    return {"n": len(deck), "from": len(items), "items": deck}


def json_bytes(payload, status=200):
    body = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
    return status, body


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, fmt, *args):
        print("[%s] %s" % (self.log_date_time_string(), fmt % args))

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        if "/.git" in path:
            self.send_error(404)
            return
        if path in ("/api", "/api/"):
            self._send_json(200, {
                "ok": True,
                "routes": [
                    "GET /api/health",
                    "GET /api/stats",
                    "GET /api/majors",
                    "GET /api/search?q=psychology",
                    "GET /api/quiz/draw?n=20",
                ],
            })
            return
        if path == "/api/health":
            self._send_json(200, {"ok": True, "product": "Mejor express"})
            return
        if path == "/api/stats":
            self._send_json(200, stats())
            return
        if path == "/api/majors":
            self._send_json(200, {"count": len(official_titles()), "titles": official_titles()})
            return
        if path == "/api/search":
            q = (parse_qs(parsed.query).get("q") or [""])[0]
            hits = search_majors(q)
            self._send_json(200, {"q": q, "count": len(hits), "hits": hits})
            return
        if path == "/api/quiz/draw":
            raw = (parse_qs(parsed.query).get("n") or ["20"])[0]
            try:
                n = int(raw)
            except ValueError:
                n = 20
            self._send_json(200, quiz_draw(n))
            return
        if path.startswith("/api/"):
            self._send_json(404, {"ok": False, "error": "unknown route"})
            return
        super().do_GET()

    def _send_json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


def main():
    httpd = ThreadingHTTPServer(("127.0.0.1", PORT), Handler)
    print("Mejor express backend")
    print("  site   http://127.0.0.1:%s/" % PORT)
    print("  stats  http://127.0.0.1:%s/api/stats" % PORT)
    print("  Ctrl+C to stop")
    httpd.serve_forever()


if __name__ == "__main__":
    main()
