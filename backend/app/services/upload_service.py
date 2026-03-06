"""Placeholder for file intake and job creation."""

import uuid
from pathlib import Path

from app.core.config import get_settings


class UploadService:
    """Placeholder service for upload flow."""

    @staticmethod
    def placeholder() -> dict[str, str]:
        return {"status": "not_implemented", "module": "upload"}

    @staticmethod
    async def handle_upload(
        filename: str,
        content_type: str | None,
        content: bytes,
    ) -> dict:
        """Save file locally and return metadata with job_id."""
        settings = get_settings()
        uploads_path = Path(settings.uploads_dir)
        uploads_path.mkdir(parents=True, exist_ok=True)

        job_id = uuid.uuid4().hex
        size = len(content)
        safe_filename = f"{job_id}_{filename}" if filename else f"{job_id}_unnamed"
        file_path = uploads_path / safe_filename

        file_path.write_bytes(content)

        return {
            "job_id": job_id,
            "filename": filename or "unnamed",
            "content_type": content_type or "application/octet-stream",
            "size": size,
            "status": "saved",
        }
