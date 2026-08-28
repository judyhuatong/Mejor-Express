# Loads official catalog data from the same JS files as the frontend.
# Cached in memory at startup. Does not invent major names.
from __future__ import annotations

import random
import re
import time
from difflib import SequenceMatcher
from pathlib import Path

LINE_IDS = {"logic", "care", "world", "make"}
API_VERSION = "1.0.0"


def slugify(title: str) -> str:
    s = title.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


class Catalog:
    def __init__(self, root: Path) -> None:
        self.root = root
        self.loaded_at = time.time()
        self.titles: list[str] = []
        self.cards: dict[str, dict] = {}
        self.slugs: dict[str, str] = {}
        self.universities: dict[str, list[dict]] = {}
        self.uni_ids: list[str] = []
        self.quiz_bank: list[dict] = []
        self.lines: list[dict] = []
        self._load()

    def _read(self, name: str) -> str:
        return (self.root / name).read_text(encoding="utf-8")

    def _load(self) -> None:
        self._load_majors()
        self._load_universities()
        self._load_major_assignments()
        self._load_quiz()
        self._load_lines()

    def _load_majors(self) -> None:
        text = self._read("search-facts.js")
        pattern = re.compile(
            r'^\s+"([^"]+)": F\(\s*\[([^\]]*)\],\s*'
            r'"((?:\\.|[^"\\])*)",\s*'
            r'"((?:\\.|[^"\\])*)"',
            re.M,
        )
        for m in pattern.finditer(text):
            title, raw_aliases, precise, precise_zh = m.groups()
            aliases = re.findall(r'"([^"]+)"', raw_aliases)
            card = {
                "name": title,
                "slug": slugify(title),
                "aliases": aliases,
                "precise": precise.replace('\\"', '"'),
                "preciseZh": precise_zh.replace('\\"', '"'),
            }
            self.titles.append(title)
            self.cards[title] = card
            self.slugs[card["slug"]] = title
        self.titles.sort()

    def _load_universities(self) -> None:
        block = self._read("catalog.js").split("var F = {", 1)[1].split("};", 1)[0]
        chunks = re.split(r"\n    ([a-z0-9]+): \[", block)
        if chunks and not chunks[0].strip():
            chunks = chunks[1:]
        for i in range(0, len(chunks) - 1, 2):
            uni_id = chunks[i]
            body = chunks[i + 1]
            facs = []
            for name, subjects, kid, kid_zh in re.findall(
                r'\{ name: "((?:\\.|[^"\\])*)", subjects: \[([^\]]*)\], kid: "((?:\\.|[^"\\])*)", kidZh: "((?:\\.|[^"\\])*)" \}',
                body,
            ):
                subs = re.findall(r'"([a-z]+)"', subjects)
                facs.append({
                    "name": name.replace('\\"', '"'),
                    "subjects": subs,
                    "kid": kid.replace('\\"', '"'),
                    "kidZh": kid_zh.replace('\\"', '"'),
                })
            self.uni_ids.append(uni_id)
            self.universities[uni_id] = facs
        self.uni_ids.sort()

    def _load_major_assignments(self) -> None:
        text = self._read("catalog-majors.js")
        s_block = re.search(r"var S = \{([\s\S]*?)\};\s*\n\s*var ENG", text)
        if not s_block:
            return
        by_id: dict[str, dict] = {}
        for key, name, kid, kid_zh in re.findall(
            r"(\w+): m\(\"((?:\\.|[^\"\\])*)\", \"((?:\\.|[^\"\\])*)\", \"((?:\\.|[^\"\\])*)\"" ,
            s_block.group(1),
        ):
            by_id[key] = {
                "name": name.replace('\\"', '"'),
                "kid": kid.replace('\\"', '"'),
                "kidZh": kid_zh.replace('\\"', '"'),
            }
        maj_block = re.search(r"var MAJ = \{([\s\S]*?)\};\s*\n\s*var STATION", text)
        if not maj_block:
            return
        uni_chunks = re.split(r"\n    ([a-z0-9]+): \{", maj_block.group(1))
        if uni_chunks and not uni_chunks[0].strip():
            uni_chunks = uni_chunks[1:]
        for i in range(0, len(uni_chunks) - 1, 2):
            uni_id = uni_chunks[i]
            body = uni_chunks[i + 1]
            facs = self.universities.get(uni_id)
            if not facs:
                continue
            by_name = {f["name"]: f for f in facs}
            for fac_name, refs in re.findall(
                r'"((?:\\.|[^"\\])*)": \[([^\]]*)\]',
                body,
            ):
                fac = by_name.get(fac_name.replace('\\"', '"'))
                if not fac:
                    continue
                majors = []
                for ref in re.findall(r"S\.(\w+)", refs):
                    hit = by_id.get(ref)
                    if hit:
                        majors.append(hit)
                fac["majors"] = majors

    def _load_quiz(self) -> None:
        text = self._read("quiz-bank.js")
        for dim, prompt in re.findall(
            r'q\("(EI|SN|TF|JP)",\s*"((?:\\.|[^"\\])*)"',
            text,
        ):
            self.quiz_bank.append({
                "dim": dim,
                "prompt": prompt.replace('\\"', '"'),
            })

    def _load_lines(self) -> None:
        match = re.search(r"const LINES = \[([\s\S]*?)\];", self._read("explorer.html"))
        if not match:
            return
        for block in re.finditer(
            r'\{\s*id:\s*"([a-z]+)",\s*stops:\s*\[([^\]]*)\]\s*\}',
            match.group(1),
        ):
            line_id = block.group(1)
            stops = re.findall(r'"([a-z]+)"', block.group(2))
            self.lines.append({"id": line_id, "stops": stops})

    @property
    def station_count(self) -> int:
        return sum(len(line["stops"]) for line in self.lines)

    @property
    def faculty_count(self) -> int:
        return sum(len(v) for v in self.universities.values())

    def stats(self) -> dict:
        return {
            "product": "Mejor express",
            "apiVersion": API_VERSION,
            "updated": "Aug 2026",
            "lines": len(self.lines),
            "stations": self.station_count,
            "universities": len(self.uni_ids),
            "universityIds": self.uni_ids,
            "faculties": self.faculty_count,
            "officialTitles": len(self.titles),
            "quizBank": len(self.quiz_bank),
            "quizPerVisit": 20,
            "note": "Counts come from catalog files, not from memory.",
        }

    def major_list(self) -> list[dict]:
        return [
            {"name": t, "slug": self.cards[t]["slug"], "aliases": self.cards[t]["aliases"]}
            for t in self.titles
        ]

    def major_detail(self, slug: str) -> dict | None:
        title = self.slugs.get(slug)
        if not title:
            return None
        return self.cards[title]

    def search(self, query: str, limit: int = 12) -> list[dict]:
        q = (query or "").strip().lower()
        if not q:
            return []
        scored = []
        for title in self.titles:
            card = self.cards[title]
            aliases = card["aliases"]
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
                scored.append({
                    "name": title,
                    "slug": card["slug"],
                    "score": round(score, 3),
                })
        scored.sort(key=lambda x: (-x["score"], x["name"]))
        return scored[:limit]

    def quiz_draw(self, n: int = 20) -> dict:
        n = max(4, min(n, 40))
        by = {"EI": [], "SN": [], "TF": [], "JP": []}
        for item in self.quiz_bank:
            by[item["dim"]].append(item)
        base, extra = divmod(n, 4)
        deck = []
        for i, dim in enumerate(["EI", "SN", "TF", "JP"]):
            take = base + (1 if i < extra else 0)
            pool = list(by[dim])
            random.shuffle(pool)
            deck.extend(pool[:take])
        random.shuffle(deck)
        return {"n": len(deck), "from": len(self.quiz_bank), "items": deck}
