# VoxScribe - Architecture

## Purpose
This document defines the high-level architecture of VoxScribe.

The goal is to create a modular SaaS platform for:
- recording conversations
- uploading audio and video files
- transcribing media
- generating AI summaries
- exporting results
- supporting future meeting platform integrations

## High-Level System Components

### 1. Frontend
The frontend will be the user-facing application.

Main responsibilities:
- user login and access
- dashboard
- file upload flow
- recording flow
- transcript viewer
- summary viewer
- export actions
- settings and account pages
- future integrations management

Suggested direction:
- Node.js
- TypeScript
- modern web app framework
- responsive UI for desktop and mobile

### 2. Backend API
The backend will manage all business logic and application orchestration.

Main responsibilities:
- authentication and authorization
- file upload handling
- job creation and tracking
- transcript storage
- summary generation requests
- export generation
- user history
- billing and usage tracking in later phases
- integrations orchestration in later phases

Suggested direction:
- FastAPI
- Python
- modular API routes
- service layer
- environment-based configuration

### 3. Worker Layer
Workers will handle background processing tasks that should not block the main API.

Main responsibilities:
- media conversion
- chunking large files
- noise reduction preprocessing
- transcription jobs
- summarization jobs
- export generation
- retry handling for failed jobs

Suggested direction:
- separate Python worker process
- queue-based processing
- scalable background task design

### 4. Database
The database will store structured application data.

Planned entities:
- users
- projects or workspaces in later phases
- uploaded files
- transcription jobs
- transcripts
- summaries
- exports
- usage records
- subscriptions in later phases

Suggested direction:
- PostgreSQL

### 5. File Storage
A separate storage layer will hold uploaded and generated files.

Files may include:
- original uploads
- converted media
- chunked media segments
- transcript export files
- summary export files
- subtitle files such as SRT

Storage direction:
- local development storage at first
- cloud object storage in later phases

### 6. Media Processing Layer
This layer is responsible for normalizing and preparing media before transcription.

Main responsibilities:
- format detection
- media conversion
- audio extraction from video
- chunking long files
- preparing standard audio format for transcription

Suggested tool:
- FFmpeg

### 7. Transcription Layer
This layer converts audio into text.

Main responsibilities:
- receive prepared audio
- detect language if enabled
- transcribe speech
- attach timestamps
- support speaker separation when available
- return structured transcript output

MVP direction:
- transcription engine/provider: OpenAI Audio API

Future evaluation options:
- Deepgram
- Google Cloud Speech-to-Text
- self-hosted or open-source transcription engine later if needed

Notes:
- the MVP should prioritize simplicity and fast delivery
- transcription quality depends on source audio quality
- speaker separation quality may vary depending on provider and recording conditions

### 8. Summary Layer
This layer converts transcripts into structured outputs.

Main responsibilities:
- concise summary
- detailed summary
- action items
- workflow summary
- next steps
- decision log
- open questions
- follow-up draft
- future gantt-style output

MVP direction:
- summary engine/provider: OpenAI API

Notes:
- this layer should be template-driven so different summary modes can be added later
- the same transcript may generate multiple summary types
- outputs should be reusable for exports, sharing, and future integrations

### 9. Export Layer
This layer generates files and outputs for user download or sharing.

Planned output formats:
- TXT
- PDF
- SRT
- DOCX in later phase
- structured JSON in later phase

### 10. Integrations Layer
This layer will support external tools in later phases.

Planned future integrations:
- Google Meet
- Zoom
- Microsoft Teams
- Gmail
- Outlook
- Slack
- Notion
- Monday
- CRM systems later

Important:
Integrations are planned but not part of the initial repository implementation.

## Initial System Flow

### Flow A - Upload to Transcript to Summary
1. user uploads media file from frontend
2. backend receives file and creates processing job
3. worker converts and prepares media
4. worker sends media to transcription layer
5. transcript is stored in database
6. summary is generated from transcript
7. outputs are made available in frontend
8. user exports or shares result

### Flow B - Record to Transcript to Summary
1. user starts recording from frontend
2. recording is captured and uploaded
3. backend creates processing job
4. worker prepares audio
5. transcript is generated
6. summary is generated
7. outputs are shown to the user

### Flow C - Future Meeting Assistant
1. user connects external meeting tool
2. backend receives event or meeting reference
3. integration layer starts supported meeting workflow
4. transcript or audio is collected
5. transcript and summary are created
6. results are stored and shared

## Architecture Principles
- modular design
- clean separation between frontend, backend, and workers
- no heavy processing inside request-response path when avoidable
- environment-driven configuration
- scalable file processing flow
- support phased delivery
- avoid fake integrations during early development
- keep MVP implementation simple before expanding provider options

## Development Phases

### Phase 0
Planning and repository setup

### Phase 1
Core repository structure and documentation

### Phase 2
Backend skeleton and frontend skeleton

### Phase 3
Upload and transcription MVP flow

### Phase 4
Summary generation and export flow

### Phase 5
History, status tracking, and basic user workflow

### Phase 6
Billing and account limits

### Phase 7
External integrations

## Not Decided Yet
The following decisions are still open:
- exact OpenAI transcription model selection for MVP
- queue implementation choice
- storage provider
- auth provider details
- billing provider setup details
- exact deployment architecture
- whether a secondary transcription provider will be added later

## Current Scope Boundary
At the current stage, the project is only defining the architecture and planning structure.

No production-ready services have been implemented yet.