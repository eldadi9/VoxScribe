# VoxScribe - Product Decisions

## Purpose
This document tracks confirmed product decisions and open decisions for VoxScribe.

It should help keep product, technical, and implementation choices aligned during planning and development.

## Confirmed Decisions

### Product Identity
- Product name: VoxScribe
- Tagline: AI Transcription and Meeting Summaries

### Core Product Direction
- VoxScribe is a SaaS platform
- The product focuses on recording, transcription, summaries, and actionable outputs
- The platform should support both live recording and file upload flows
- Future meeting integrations are planned, but not part of the first implementation stage

### MVP Scope Direction
- MVP should focus on a simple and working core flow
- MVP should not attempt to build every future integration
- MVP should prioritize upload, transcription, summary, and export
- Advanced integrations should come only after a stable MVP exists

### MVP Provider Direction
- MVP transcription provider: OpenAI Audio API
- MVP summary provider: OpenAI API

### Planned Tech Direction
- Backend: FastAPI + Python
- Frontend: Node.js + TypeScript
- Database: PostgreSQL
- Media processing: FFmpeg
- Workers: separate background processing layer

### Documentation Direction
- The project must be built step by step
- Planning documents must be completed before major implementation begins
- Status files and backlog files should be updated as the project evolves

## Open Product Decisions

### Recording Scope
- Should the first MVP include only file upload and basic recording, or also partial live transcription?
- Should browser recording be included in the earliest usable MVP, or after upload flow is stable?

### Transcript and Summary Experience
- Should the summary language be allowed to differ from the transcript language in MVP?
- Should users be able to generate multiple summary types from one transcript in MVP?
- Should transcript cleaning be automatic, optional, or delayed to later phase?

### File Handling
- What exact file size limits should apply in MVP?
- Should the MVP expose chunking behavior to users or keep it fully behind the scenes?
- Which exact file formats should be officially supported on day one?

### Export Scope
- Should DOCX be included in MVP or deferred to later phase?
- Should email sending be included in MVP or only local export first?
- Should shareable links be deferred until after history and user accounts are stable?

### User Accounts and Product Access
- Should the first MVP require full user authentication from day one?
- Should there be anonymous local testing mode in development?
- Should trial logic be implemented early or after core upload-to-summary flow works?

### Billing and Limits
- Should monetization be based on subscription only, or usage later as well?
- Should the free trial be based on days, minutes, or number of jobs?
- When should Stripe be introduced into implementation?

### Integrations
- Which future integration should be researched first after MVP?
- Should Gmail or meeting platform integrations come first?
- Should WhatsApp sharing be native or deferred?

## Technical Open Decisions
- exact OpenAI transcription model selection
- queue system choice
- storage provider choice
- auth provider details
- deployment target
- local vs cloud file storage transition timing
- database migration setup timing

## Temporary Recommended Answers
These are working assumptions for early development unless changed later:
- start with upload flow first
- add basic recording after upload flow works
- use local development storage first
- defer advanced integrations
- defer complex billing
- keep MVP focused on one clean end-to-end flow

## Change Rule
If a major product or technical decision changes, this file should be updated before implementation continues.