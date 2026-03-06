# VoxScribe Backend

API backend for VoxScribe - voice-to-text transcription service.

## Setup

```bash
python -m uv sync
```

## Run

```bash
python -m uv run python main.py
```

Or with uvicorn directly:

```bash
python -m uv run uvicorn main:app --reload --host 127.0.0.1 --port 8000
```
