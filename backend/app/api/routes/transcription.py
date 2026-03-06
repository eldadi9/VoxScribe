from fastapi import APIRouter

from app.schemas.transcription import TranscriptionPlaceholderResponse
from app.services.transcription_service import TranscriptionService

router = APIRouter(tags=["transcription"])


@router.get("/transcription", response_model=TranscriptionPlaceholderResponse)
def transcription() -> TranscriptionPlaceholderResponse:
    return TranscriptionPlaceholderResponse(**TranscriptionService.placeholder())
