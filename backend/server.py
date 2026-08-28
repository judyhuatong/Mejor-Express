# Mejor express backend entry point.
# Strong mode (recommended): FastAPI + uvicorn — pip install -r backend/requirements.txt
# Fallback: stdlib server if FastAPI is not installed.
from __future__ import annotations

import os
import sys


def main() -> None:
    host = os.environ.get("HOST", "0.0.0.0")
    port = int(os.environ.get("PORT", "3000"))
    try:
        import uvicorn
        from app import app
    except ImportError:
        print("FastAPI not installed. Run: pip install -r backend/requirements.txt")
        print("Starting basic stdlib server instead...\n")
        from stdlib_server import main as stdlib_main
        stdlib_main()
        return
    print("Mejor express backend (FastAPI)")
    print("  site   http://%s:%s/" % (host if host != "0.0.0.0" else "127.0.0.1", port))
    print("  docs   http://%s:%s/api/docs" % (host if host != "0.0.0.0" else "127.0.0.1", port))
    print("  stats  http://%s:%s/api/v1/stats" % (host if host != "0.0.0.0" else "127.0.0.1", port))
    print("  Ctrl+C to stop")
    uvicorn.run(app, host=host, port=port, log_level="info")


if __name__ == "__main__":
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    main()
