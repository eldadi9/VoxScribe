from fastapi import APIRouter

from app.schemas.export import ExportPlaceholderResponse
from app.services.export_service import ExportService

router = APIRouter(tags=["export"])


@router.get("/export", response_model=ExportPlaceholderResponse)
def export_route() -> ExportPlaceholderResponse:
    return ExportPlaceholderResponse(**ExportService.placeholder())
