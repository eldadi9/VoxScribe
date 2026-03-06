from fastapi import APIRouter

from app.schemas.summary import SummaryPlaceholderResponse
from app.services.summary_service import SummaryService

router = APIRouter(tags=["summary"])


@router.get("/summary", response_model=SummaryPlaceholderResponse)
def summary() -> SummaryPlaceholderResponse:
    return SummaryPlaceholderResponse(**SummaryService.placeholder())
