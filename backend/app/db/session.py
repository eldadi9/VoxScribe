"""Minimal database session and engine structure."""

from collections.abc import Generator

from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker

from app.core.config import get_settings
from app.db.base import Base

_settings = get_settings()
_engine = create_engine(
    _settings.database_url,
    connect_args={"check_same_thread": False} if _settings.database_url.startswith("sqlite") else {},
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=_engine)


def get_db() -> Generator[Session, None, None]:
    """Dependency for FastAPI routes. Yields a database session."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
