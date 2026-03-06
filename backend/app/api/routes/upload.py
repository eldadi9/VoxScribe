from fastapi import APIRouter, UploadFile

from app.schemas.upload import UploadPlaceholderResponse, UploadResponse
from app.services.upload_service import UploadService

router = APIRouter(tags=["upload"])


@router.get("/upload", response_model=UploadPlaceholderResponse)
def upload_status() -> UploadPlaceholderResponse:
    return UploadPlaceholderResponse(**UploadService.placeholder())


@router.post("/upload", response_model=UploadResponse)
async def upload_file(file: UploadFile) -> UploadResponse:
    content = await file.read()
    metadata = await UploadService.handle_upload(
        filename=file.filename or "unnamed",
        content_type=file.content_type,
        content=content,
    )
    return UploadResponse(**metadata)
