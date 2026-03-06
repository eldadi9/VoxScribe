from pydantic import BaseModel


class TranscriptionStatusResponse(BaseModel):
    """Placeholder for transcription status response."""

    status: str


class TranscriptionPlaceholderResponse(BaseModel):
    """Placeholder response for transcription module."""

    status: str
    module: str
