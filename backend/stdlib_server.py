# Fallback server — stdlib only, no pip. Same routes as before FastAPI upgrade.
from __future__ import annotations

import json
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

ROOT = Path(__file__).resolve().parent.parent
PORT = int(os.environ.get("PORT", "3000"))


def main() -> None:
    sys_path = os.path.dirname(os.path.abspath(__file__))
    if sys_path not in __import__("sys").path:
        __import__("sys").path.insert(0, sys_path)
    from catalog import Catalog

    catalog = Catalog(ROOT)

    class Handler(SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(ROOT), **kwargs)

        def do_GET(self):
            parsed = urlparse(self.path)
            path = parsed.path
            if "/.git" in path:
                self.send_error(404)
                return
            if path in ("/api", "/api/"):
                self._json(200, {"ok": True, "mode": "stdlib", "routes": ["/api/stats", "/api/majors", "/api/search", "/api/quiz/draw"]})
                return
            if path == "/api/health":
                self._json(200, {"ok": True, "product": "Mejor express", "mode": "stdlib"})
                return
            if path == "/api/stats":
                self._json(200, catalog.stats())
                return
            if path == "/api/majors":
                self._json(200, {"count": len(catalog.titles), "titles": catalog.titles})
                return
            if path == "/api/search":
                q = (parse_qs(parsed.query).get("q") or [""])[0]
                hits = catalog.search(q)
                self._json(200, {"q": q, "count": len(hits), "hits": hits})
                return
            if path == "/api/quiz/draw":
                raw = (parse_qs(parsed.query).get("n") or ["20"])[0]
                try:
                    n = int(raw)
                except ValueError:
                    n = 20
                self._json(200, catalog.quiz_draw(n))
                return
            if path.startswith("/api/"):
                self._json(404, {"ok": False, "error": "unknown route"})
                return
            super().do_GET()

        def _json(self, status, payload):
            body = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
            self.send_response(status)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

    httpd = ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
    print("Mejor express backend (stdlib fallback)")
    print("  site   http://127.0.0.1:%s/" % PORT)
    print("  stats  http://127.0.0.1:%s/api/stats" % PORT)
    httpd.serve_forever()


if __name__ == "__main__":
    main()
