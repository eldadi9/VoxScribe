from pydantic import BaseModel


class ExportStatusResponse(BaseModel):
    """Placeholder for export status response."""

    status: str


class ExportPlaceholderResponse(BaseModel):
    """Placeholder response for export module."""

    status: str
    module: str
