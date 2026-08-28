# FastAPI backend for Mejor express — site + JSON API for independent hosting.
from __future__ import annotations

import os
import time
from pathlib import Path

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from catalog import API_VERSION, Catalog

ROOT = Path(__file__).resolve().parent.parent
STARTED = time.time()
catalog = Catalog(ROOT)

app = FastAPI(
    title="Mejor express API",
    description="Official major catalog for 15 universities. Not a ranking tool.",
    version=API_VERSION,
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json",
)

origins = os.environ.get("CORS_ORIGINS", "*").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in origins if o.strip()],
    allow_credentials=True,
    allow_methods=["GET", "HEAD", "OPTIONS"],
    allow_headers=["*"],
)


def _uptime() -> float:
    return round(time.time() - STARTED, 1)


@app.get("/api")
@app.get("/api/")
def api_index():
    return {
        "ok": True,
        "product": "Mejor express",
        "version": API_VERSION,
        "docs": "/api/docs",
        "routes": [
            "GET /api/v1/health",
            "GET /api/v1/stats",
            "GET /api/v1/lines",
            "GET /api/v1/universities",
            "GET /api/v1/universities/{id}",
            "GET /api/v1/majors",
            "GET /api/v1/majors/{slug}",
            "GET /api/v1/search?q=",
            "GET /api/v1/quiz/draw?n=20",
        ],
    }


@app.get("/api/v1/health")
def health_v1():
    return {
        "ok": True,
        "product": "Mejor express",
        "version": API_VERSION,
        "uptimeSec": _uptime(),
        "catalogLoaded": True,
    }


@app.get("/api/v1/stats")
def stats_v1():
    return catalog.stats()


@app.get("/api/v1/lines")
def lines_v1():
    return {"count": len(catalog.lines), "lines": catalog.lines}


@app.get("/api/v1/universities")
def universities_v1():
    return {
        "count": len(catalog.uni_ids),
        "ids": catalog.uni_ids,
    }


@app.get("/api/v1/universities/{uni_id}")
def university_v1(uni_id: str):
    facs = catalog.universities.get(uni_id)
    if facs is None:
        raise HTTPException(status_code=404, detail="University not in this set")
    return {"id": uni_id, "faculties": facs}


@app.get("/api/v1/majors")
def majors_v1():
    items = catalog.major_list()
    return {"count": len(items), "majors": items}


@app.get("/api/v1/majors/{slug}")
def major_v1(slug: str):
    card = catalog.major_detail(slug)
    if card is None:
        raise HTTPException(status_code=404, detail="Major not in catalog")
    return card


@app.get("/api/v1/search")
def search_v1(q: str = Query("", min_length=0), limit: int = Query(12, ge=1, le=50)):
    hits = catalog.search(q, limit=limit)
    return {"q": q, "count": len(hits), "hits": hits}


@app.get("/api/v1/quiz/draw")
def quiz_v1(n: int = Query(20, ge=4, le=40)):
    return catalog.quiz_draw(n)


# Legacy routes (same as before)
@app.get("/api/health")
def health_legacy():
    return health_v1()


@app.get("/api/stats")
def stats_legacy():
    return stats_v1()


@app.get("/api/majors")
def majors_legacy():
    return {"count": len(catalog.titles), "titles": catalog.titles}


@app.get("/api/search")
def search_legacy(q: str = Query("")):
    hits = catalog.search(q, limit=12)
    return {
        "q": q,
        "count": len(hits),
        "hits": [{"name": h["name"], "score": h["score"]} for h in hits],
    }


@app.get("/api/quiz/draw")
def quiz_legacy(n: int = Query(20, ge=4, le=40)):
    return catalog.quiz_draw(n)


app.mount("/", StaticFiles(directory=str(ROOT), html=True), name="site")
