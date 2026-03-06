from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.api.routes import export, health, root, summary, transcription, upload
from app.core.config import get_settings


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.settings = get_settings()
    yield


app = FastAPI(lifespan=lifespan)

app.include_router(root.router)
app.include_router(health.router)
app.include_router(upload.router)
app.include_router(transcription.router)
app.include_router(summary.router)
app.include_router(export.router)
