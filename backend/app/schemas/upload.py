from pydantic import BaseModel


class UploadStatusResponse(BaseModel):
    """Placeholder for upload status response."""

    status: str


class UploadPlaceholderResponse(BaseModel):
    """Placeholder response for upload module."""

    status: str
    module: str


class UploadResponse(BaseModel):
    """Response for successful file upload (metadata only)."""

    job_id: str
    filename: str
    content_type: str
    size: int
    status: str
