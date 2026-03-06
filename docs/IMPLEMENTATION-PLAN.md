# VoxScribe - Implementation Plan

## Purpose
This document defines the step-by-step implementation plan for VoxScribe.

The goal is to move in controlled phases from planning to a working MVP, without skipping structure, documentation, or review.

## Working Principles
- do not jump directly into full product development
- complete one phase before starting the next
- keep backend, frontend, and workers modular
- prefer simple MVP implementation before advanced integrations
- update status and backlog documents as progress changes
- avoid fake integrations or placeholder claims presented as finished features

## Phase 0 - Planning and Repository Setup
Goal:
Create the project foundation and planning documents.

Tasks:
- create root project folder
- create main folder structure
- create base documentation files
- create README
- create PRD
- create STATUS
- create ARCHITECTURE
- create IMPLEMENTATION PLAN
- prepare remaining planning documents

Exit criteria:
- repository structure exists
- planning files exist
- core product direction is documented

## Phase 1 - Planning Completion
Goal:
Finish the main planning documents before any serious implementation begins.

Tasks:
- complete PRODUCT-DECISIONS.md
- complete UX-REFERENCE.md
- complete BACKLOG-MVP.md
- complete BACKLOG-PHASES.md
- complete IDEAS-PARKINGLOT.md
- review and align PRD, STATUS, and ARCHITECTURE
- identify open technical and product decisions

Exit criteria:
- all main planning files are filled with meaningful content
- MVP scope is clear
- open decisions are listed explicitly
- next technical phase is approved

## Phase 2 - Backend and Frontend Initialization
Goal:
Initialize the technical project skeleton without building product logic yet.

Tasks:
- initialize backend with `uv init`
- prepare Python project structure
- initialize frontend with Node.js and TypeScript
- prepare frontend project structure
- create `.env.example`
- create base config files
- prepare basic git ignore and startup instructions
- update README with real startup steps

Exit criteria:
- backend project initializes successfully
- frontend project initializes successfully
- repository has runnable skeletons
- no production business logic exists yet

## Phase 3 - Backend Skeleton
Goal:
Create a clean backend skeleton for the MVP.

Tasks:
- create FastAPI entrypoint
- create app folder structure
- create config and settings module
- create health endpoint
- create API router structure
- create models folder
- create schemas folder
- create services folder
- create upload module skeleton
- create transcription job module skeleton
- create summary module skeleton
- create export module skeleton
- prepare database connection skeleton

Exit criteria:
- backend app runs locally
- health endpoint works
- folder structure is modular and clean
- status file updated

## Phase 4 - Frontend Skeleton
Goal:
Create the frontend shell for the product.

Tasks:
- create landing or entry page
- create dashboard layout
- create upload page shell
- create record page shell
- create transcript viewer shell
- create summary viewer shell
- create navigation and base UI layout
- prepare responsive design foundation

Exit criteria:
- frontend runs locally
- base pages exist
- navigation works
- no final business logic required yet

## Phase 5 - Upload and Processing MVP Flow
Goal:
Implement the first real product flow: upload media and process it.

Tasks:
- create upload endpoint
- accept audio and video files
- store uploaded files locally for development
- create processing job record
- connect worker pipeline
- convert media with FFmpeg when needed
- chunk large files when needed
- send prepared media to transcription provider
- store transcript result
- expose transcript retrieval API

Exit criteria:
- user can upload a file
- file is processed
- transcript is stored and viewable
- errors are tracked clearly

## Phase 6 - Summary MVP Flow
Goal:
Generate summaries from transcripts using OpenAI.

Tasks:
- create summary request flow
- support summary type selection
- implement concise summary
- implement action items summary
- implement workflow summary
- store generated summaries
- expose summaries to frontend
- allow regenerate action later if needed

Exit criteria:
- transcript can generate at least 3 summary types
- summary is stored and retrievable
- frontend can display output

## Phase 7 - Export MVP Flow
Goal:
Allow users to export and save outputs.

Tasks:
- export transcript as TXT
- export transcript or summary as PDF
- export subtitles as SRT when available
- add download actions in frontend
- prepare export service structure for future formats

Exit criteria:
- user can download at least TXT, PDF, and SRT
- exported files are valid and accessible

## Phase 8 - History and Basic User Workflow
Goal:
Create a usable user journey around previous jobs and results.

Tasks:
- create job history endpoint
- create transcript history view
- create summary history view
- show processing status
- show failed vs completed jobs
- allow reopening previous results

Exit criteria:
- user can see previous jobs
- user can open old transcript and summary results
- product feels like a usable MVP

## Phase 9 - Account Limits and Monetization Foundation
Goal:
Prepare the system for future paid usage.

Tasks:
- define trial logic
- define usage tracking model
- define subscription placeholders
- prepare billing integration plan
- add usage data structure in backend

Exit criteria:
- usage model is defined
- system is ready for later billing implementation
- no full billing flow required yet

## Phase 10 - Future Integrations
Goal:
Prepare later expansion after MVP is stable.

Possible future tasks:
- Google Meet integration research
- Zoom integration research
- Microsoft Teams integration research
- Gmail send/share integration
- Slack and Notion export integration
- advanced automation flows
- meeting assistant mode

Exit criteria:
- not part of initial MVP
- only starts after MVP is stable

## Recommended Immediate Execution Order
1. finish remaining planning docs
2. initialize backend with uv
3. initialize frontend with Node.js and TypeScript
4. build backend skeleton
5. build frontend skeleton
6. implement upload flow
7. implement transcription flow
8. implement summary flow
9. implement export flow
10. add history and status
11. review MVP
12. only then plan integrations

## Current Position
The project is currently between:
- Phase 0 completion
- Phase 1 planning completion

## Immediate Next Documents
The next planning files to complete are:
- PRODUCT-DECISIONS.md
- UX-REFERENCE.md
- BACKLOG-MVP.md
- BACKLOG-PHASES.md

## Approval Rule
Do not move into backend or frontend initialization until the remaining planning documents are completed and reviewed.