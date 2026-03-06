from fastapi import APIRouter

router = APIRouter(tags=["root"])


@router.get("/")
def root() -> dict[str, str]:
    return {"message": "VoxScribe API"}
