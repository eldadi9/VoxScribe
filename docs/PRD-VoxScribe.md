# PRD - VoxScribe

## Product Name
VoxScribe

## Tagline
AI Transcription and Meeting Summaries

## Product Vision
VoxScribe is a SaaS platform that turns meetings, conversations, recordings, and media files into accurate transcripts, smart summaries, and actionable outputs.

The product is designed to help users move from raw audio to clear text, insights, tasks, and next steps.

## Product Goal
Build a modular AI platform that supports:
- live recording and transcription
- uploaded media transcription
- meeting summarization
- speaker separation
- timestamps
- action item extraction
- workflow-style summaries
- export and sharing
- future integrations with external tools

## Main Use Cases

### 1. Live recording and transcription
The user records a meeting or conversation directly in the app.

The system should:
- capture audio
- reduce background noise
- detect or accept selected language
- generate transcript
- separate speakers when possible
- attach timestamps
- generate summary by selected template
- allow export or sharing

### 2. Upload media files for transcription and summary
The user uploads an audio or video file.

The system should:
- detect file type
- convert format if needed
- split into chunks if file is large
- clean audio if possible
- transcribe content
- identify speakers when possible
- generate summary
- generate subtitle file if needed
- allow export and sharing

### 3. Connect to virtual meetings
In later phases, the product should support connections to platforms such as:
- Google Meet
- Zoom
- Microsoft Teams

The system should eventually support:
- joining meetings in a supported way
- capturing audio or transcript stream
- creating meeting summaries
- extracting tasks and decisions
- saving history for later search

## Core Features

### Recording
- start recording
- stop recording
- save recording
- optional live preview in later phase

### Upload
- upload audio
- upload video
- support common file types
- auto conversion
- chunking for large files
- progress indication

### Transcription
- multilingual support
- Hebrew support
- English support
- optional auto language detection
- timestamps
- speaker separation
- raw transcript
- cleaned transcript

### Summary Types
- concise summary
- detailed summary
- action items
- workflow summary
- next steps
- open questions
- decision log
- gantt draft
- follow-up email draft
- speaker-based recap

### Export and Sharing
- TXT
- PDF
- DOCX in later phase
- SRT
- copy to clipboard
- email sending
- shareable link in later phase
- structured output for integrations

## Target Users
- project managers
- business teams
- sales teams
- consultants
- content creators
- students and lecturers
- HR and recruiters
- small business owners

## Problems the Product Solves
Users often struggle to:
- remember what was said in meetings
- convert conversations into tasks
- transcribe long recordings manually
- summarize long discussions quickly
- identify who said what
- share key outcomes clearly

## MVP Scope

### Included in MVP
- basic project setup
- upload audio/video flow
- basic in-app recording
- transcription flow
- language selection
- basic speaker separation if supported
- concise summary
- action items summary
- workflow summary
- export to TXT, PDF, SRT
- project history screen
- email sharing later in MVP if feasible

### Not included in MVP phase 1
- full live meeting bot for Zoom
- full live meeting bot for Teams
- advanced CRM integrations
- advanced gantt engine
- advanced admin system
- full WhatsApp integration

## Product Direction References
The product can take inspiration from tools in this space for flow and feature direction, while remaining an original product:
- QuickScribe for simple upload to transcription flow
- Tactiq for meeting-focused flow ideas
- Otter for transcript and meeting memory direction
- Fireflies for action items and integrations
- Timeless for meeting assistant workflow direction
- CapCut for media-to-text and subtitle direction

## Planned Tech Direction
- Backend: FastAPI + Python
- Frontend: Node.js + TypeScript
- Database: PostgreSQL
- Media processing: FFmpeg
- Workers: background processing services
- Storage: to be decided
- Billing: planned for later phase

## Monetization Direction
Planned business model:
- free trial
- monthly subscription
- usage-based expansion later
- premium integrations in future phases

## Risks and Constraints
- transcription is never 100 percent accurate
- speaker separation depends on audio quality
- large files require async processing
- meeting platform integrations depend on permissions and platform limitations
- privacy and recording consent must be handled carefully
- no file size limit should be treated as a technical goal, not a guaranteed claim

## Current Phase
The project is currently in the planning and repository setup stage.

No production implementation exists yet.

## Next Planning Documents
After this PRD, the next documents to complete will be:
- STATUS
- ARCHITECTURE
- IMPLEMENTATION PLAN
- PRODUCT DECISIONS
- MVP BACKLOG