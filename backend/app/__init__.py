from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.api.routes import health, root
from app.core.config import get_settings


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.settings = get_settings()
    yield


app = FastAPI(lifespan=lifespan)

app.include_router(root.router)
app.include_router(health.router)
