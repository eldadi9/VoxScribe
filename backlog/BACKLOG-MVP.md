# VoxScribe - MVP Backlog

## Purpose
This document defines the initial MVP backlog for VoxScribe.

The goal is to keep the first implementation focused, realistic, and executable without trying to build the full future product at once.

## MVP Goal
Deliver a usable first version of VoxScribe that allows a user to:
- upload audio or video
- process the file
- generate a transcript
- generate selected summary outputs
- export results
- review previous jobs

## MVP Scope

### 1. Project Initialization
- initialize backend project
- initialize frontend project
- prepare environment file structure
- create base configuration
- prepare local development setup

### 2. Backend Foundation
- create FastAPI application entrypoint
- create modular app structure
- create health endpoint
- create config and settings module
- create API router structure
- prepare services, schemas, and models folders
- prepare database connection skeleton

### 3. Frontend Foundation
- initialize frontend app
- create layout shell
- create dashboard shell
- create upload page shell
- create transcript page shell
- create summary page shell
- prepare responsive layout base

### 4. Upload Flow
- create upload endpoint
- accept common audio formats
- accept common video formats
- validate file upload
- store uploaded file locally in development
- create job record for processing
- expose upload status

### 5. Media Processing
- detect media format
- extract audio from video when needed
- convert media to standard processing format
- split large files into chunks when needed
- prepare files for transcription
- handle failures clearly

### 6. Transcription Flow
- connect to OpenAI Audio API
- send prepared audio for transcription
- support selected language or auto detection if feasible
- store transcript result
- store timestamps if available
- support speaker separation if available in chosen flow
- expose transcript retrieval endpoint

### 7. Summary Flow
- connect to OpenAI API
- generate concise summary
- generate action items summary
- generate workflow summary
- store summaries
- expose summaries to frontend

### 8. Export Flow
- export transcript as TXT
- export summary as PDF
- export subtitles as SRT when available
- enable file download from frontend

### 9. History and Status
- store job history
- show current processing state
- show completed jobs
- show failed jobs
- allow reopening previous transcript and summary results

### 10. Basic Product Access
- decide whether MVP starts with simple auth or local-only mode
- prepare user ownership model for jobs
- prepare later transition to full account system

## MVP Summary Types
The first MVP should support these summary outputs:
- concise summary
- action items
- workflow summary

## MVP Export Types
The first MVP should support:
- TXT
- PDF
- SRT when available

## Out of Scope for MVP
The following items should not be part of the first build:
- full Google Meet integration
- full Zoom integration
- full Microsoft Teams integration
- WhatsApp native integration
- advanced CRM integrations
- advanced billing system
- advanced admin dashboard
- multi-user workspace logic
- complex analytics
- advanced Gantt engine

## Recommended MVP Build Order
1. initialize backend and frontend
2. create backend skeleton
3. create frontend skeleton
4. implement upload flow
5. implement media processing flow
6. implement transcription flow
7. implement summary flow
8. implement export flow
9. implement history flow
10. review MVP stability

## MVP Success Criteria
The MVP will be considered successful when:
- a user can upload a file
- the system processes the file successfully
- a transcript is generated and stored
- at least 3 summary types are generated
- export works for core formats
- previous jobs can be reopened
- the product works locally in development

## Notes
This backlog is intentionally limited.

The goal is to reach one clean end-to-end working flow before adding advanced integrations or product expansion.