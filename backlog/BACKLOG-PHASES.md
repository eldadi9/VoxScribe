# VoxScribe - Phase Backlog

## Purpose
This document breaks the project into delivery phases.

The goal is to keep development structured, controlled, and realistic from planning through MVP and later expansion.

## Phase 0 - Planning and Project Setup
Goal:
Create the project structure and planning foundation.

Tasks:
- create repository folder structure
- create base documentation files
- create README
- create PRD
- create STATUS
- create ARCHITECTURE
- create IMPLEMENTATION PLAN
- create PRODUCT DECISIONS
- create UX REFERENCE
- create MVP backlog
- create phase backlog
- create idea parking lot

Expected output:
- clean repository structure
- planning documents ready
- clear product direction

## Phase 1 - Planning Completion and Review
Goal:
Complete the remaining planning work and prepare for technical initialization.

Tasks:
- review all planning documents
- confirm MVP scope
- confirm OpenAI provider direction
- list open technical decisions
- list open product decisions
- prepare next implementation prompt for Cursor
- prepare planning audit prompt for Claude Code

Expected output:
- reviewed planning set
- approved next implementation order
- no major ambiguity before technical setup

## Phase 2 - Technical Initialization
Goal:
Initialize backend and frontend repositories without implementing product logic.

Tasks:
- run `uv init` in backend
- initialize frontend project with Node.js and TypeScript
- create base startup instructions
- prepare `.env.example`
- prepare `.gitignore`
- update README with startup steps

Expected output:
- backend initialized
- frontend initialized
- local project skeleton runnable

## Phase 3 - Backend Skeleton
Goal:
Create the backend structure for the MVP.

Tasks:
- create FastAPI entrypoint
- create config and settings module
- create API router structure
- create health endpoint
- create services folder
- create schemas folder
- create models folder
- create upload module skeleton
- create transcription module skeleton
- create summary module skeleton
- create export module skeleton
- create database connection skeleton

Expected output:
- backend app runs locally
- health route works
- clean modular backend structure exists

## Phase 4 - Frontend Skeleton
Goal:
Create the frontend shell.

Tasks:
- create app shell
- create dashboard shell
- create upload page shell
- create record page shell
- create transcript page shell
- create summary page shell
- create history page shell
- prepare responsive layout and navigation

Expected output:
- frontend runs locally
- core pages exist
- navigation works

## Phase 5 - Upload and Media Pipeline
Goal:
Implement the first real end-to-end file processing flow.

Tasks:
- build upload endpoint
- validate file types
- store files locally in development
- create processing jobs
- integrate FFmpeg conversion
- implement chunking strategy
- prepare worker pipeline
- expose job status updates

Expected output:
- user can upload a file
- system creates a processing job
- media is prepared for transcription

## Phase 6 - Transcription Flow
Goal:
Generate transcripts from uploaded or recorded media.

Tasks:
- connect OpenAI Audio API
- send prepared media for transcription
- store transcript result
- store timestamps when available
- support speaker separation if available
- expose transcript API to frontend
- handle transcription failures clearly

Expected output:
- transcript is generated and stored
- transcript is viewable in frontend

## Phase 7 - Summary Flow
Goal:
Generate structured summaries from transcripts.

Tasks:
- connect OpenAI API
- implement concise summary
- implement action items summary
- implement workflow summary
- store generated summaries
- expose summaries in frontend

Expected output:
- at least 3 summary modes work
- summaries are viewable in frontend

## Phase 8 - Export Flow
Goal:
Allow users to export the results.

Tasks:
- export transcript as TXT
- export summary as PDF
- export SRT when timestamps support it
- enable frontend download actions

Expected output:
- user can download core export types

## Phase 9 - History and User Flow
Goal:
Make the MVP usable across multiple jobs.

Tasks:
- store job history
- display job status
- display completed and failed jobs
- reopen previous transcripts and summaries
- improve basic user flow

Expected output:
- user can return to previous work
- MVP feels usable and persistent

## Phase 10 - Product Access and Limits
Goal:
Prepare the foundation for account logic and usage limits.

Tasks:
- define auth approach
- prepare user ownership model
- define trial approach
- prepare usage tracking
- define future billing structure

Expected output:
- system ready for monetization phase later

## Phase 11 - Post-MVP Expansion
Goal:
Plan the next product growth after MVP stability.

Possible tasks:
- browser-based recording improvements
- live transcription improvements
- Gmail integration
- shareable links
- meeting assistant research
- Google Meet research
- Zoom research
- Teams research
- Slack and Notion integration
- advanced export types
- DOCX export
- advanced summaries
- Gantt draft improvements

Expected output:
- clear roadmap beyond MVP

## Notes
Each phase should be completed and reviewed before moving to the next one.

The main rule is:
do not mix planning, initialization, MVP build, and advanced integrations all at once.