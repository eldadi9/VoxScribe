from pydantic import BaseModel


class SummaryStatusResponse(BaseModel):
    """Placeholder for summary status response."""

    status: str


class SummaryPlaceholderResponse(BaseModel):
    """Placeholder response for summary module."""

    status: str
    module: str
