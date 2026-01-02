# El Woods Documentation

> Documentation for the El Woods business plan webapp project.

## Quick Navigation

| Document | Purpose |
|----------|---------|
| [Session Start Guide](./session-start/README.md) | **Start here** - Quick orientation for new agents |
| [Technical Docs](./technical/README.md) | Architecture, file structure, and webapp guide |
| [Business Plan Reference](./business-plan/README.md) | Business plan sections and content guide |

---

## Project Summary

**El Woods** is an immersive sustainable retail + cafe experience in West Denver, Colorado. This repository contains:

1. **Business Plan Webapp** - Interactive webapp displaying the business plan (port 2277)
2. **Business Plan Data** - JSON-based content for 19 business plan sections
3. **Supporting Materials** - Pitch deck and initial concept PDFs

## Key Files at a Glance

```
elwoods/
├── index.html              # Main webapp entry point
├── app.js                  # Application logic
├── styles.css              # Forest theme styling
├── data/
│   └── business-plan.json  # All business plan content (19 sections)
├── start.sh                # Launch server on port 2277
├── docs/                   # This documentation
├── ElWoods_deck.pdf        # Pitch deck
└── bizplan_init.pdf        # Initial concept document
```

## Running the Webapp

```bash
./start.sh
# or
python3 -m http.server 2277
```

Then visit: `http://localhost:2277`

---

## Documentation Index

### Session Start (For New Agents)
- [README](./session-start/README.md) - Quick start guide
- [Project Overview](./session-start/project-overview.md) - What is El Woods?
- [Current State](./session-start/current-state.md) - Where things stand now

### Technical Documentation
- [README](./technical/README.md) - Technical overview
- [File Structure](./technical/file-structure.md) - Detailed file breakdown
- [Webapp Guide](./technical/webapp-guide.md) - How the webapp works

### Business Plan Reference
- [README](./business-plan/README.md) - Business plan overview
- [Sections Reference](./business-plan/sections-reference.md) - All 19 sections detailed

---

## Contact

- **Morgan McIntosh** (Founder): 720.254.9067 | elwoods.revival@gmail.com
- **Benjamin Tyson** (Co-Founder): 720.839.5990 | ben@hgraphene.com
- **Instagram**: @elwoods.revival
