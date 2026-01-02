# File Structure

> Complete breakdown of all project files.

---

## Directory Tree

```
elwoods/
├── index.html              # Main webapp HTML
├── app.js                  # Application JavaScript
├── styles.css              # CSS styling (forest theme)
├── start.sh                # Server launch script
├── data/
│   └── business-plan.json  # Business plan content (19 sections)
├── docs/                   # Documentation (this folder)
│   ├── README.md
│   ├── session-start/
│   │   ├── README.md
│   │   ├── project-overview.md
│   │   └── current-state.md
│   ├── technical/
│   │   ├── README.md
│   │   ├── file-structure.md
│   │   └── webapp-guide.md
│   └── business-plan/
│       ├── README.md
│       └── sections-reference.md
├── ElWoods_deck.pdf        # Pitch deck (reference)
└── bizplan_init.pdf        # Initial concept (reference)
```

---

## Core Application Files

### index.html
**Purpose**: Main HTML structure

**Key Elements**:
- `.app-container` - Main wrapper
- `.sidebar` - Navigation sidebar with section links
- `.main-content` - Section display area
- `.edit-panel` - Slide-in content editor
- `.edit-overlay` - Click-to-close overlay
- `.fab-edit` - Floating edit button

**Size**: ~100 lines

---

### app.js
**Purpose**: Application logic and interactivity

**Key Components**:

```javascript
// State
let businessPlan = {};      // Loaded plan data
let currentSection = null;  // Active section ID

// Core Functions
loadBusinessPlan()          // Fetch JSON data
renderNavigation()          // Build sidebar
showSection(id)             // Display section
updateProgress()            // Progress calculation
updateStatus()              // Change section status

// Edit Panel
openEditPanel()             // Open editor
closeEditPanel()            // Close editor
saveContent()               // Save changes

// Navigation
nextSection()               // Go to next
previousSection()           // Go to previous
toggleSidebar()             // Mobile toggle

// Export
exportPlan()                // Generate printable
```

**Size**: ~250 lines

---

### styles.css
**Purpose**: Visual styling with forest/woodland theme

**Key Sections**:

```css
/* CSS Variables */
:root { ... }

/* Base Styles */
*, body { ... }

/* Layout */
.app-container { ... }
.sidebar { ... }
.main-content { ... }

/* Components */
.nav-list { ... }
.progress-bar { ... }
.status-badge { ... }
.data-grid { ... }
.data-card { ... }

/* Edit Panel */
.edit-panel { ... }
.edit-overlay { ... }

/* Buttons */
.btn { ... }
.fab-edit { ... }

/* Responsive */
@media (max-width: 768px) { ... }
```

**Size**: ~600 lines

**Theme Colors**:
| Variable | Value | Use |
|----------|-------|-----|
| `--bg-dark` | #1a2e1a | Dark backgrounds |
| `--bg-medium` | #2d4a2d | Medium backgrounds |
| `--bg-light` | #3d6b4f | Light backgrounds |
| `--text-primary` | #e8e4d9 | Main text |
| `--text-secondary` | #b8c4a8 | Secondary text |
| `--accent-gold` | #c9a959 | Highlights, buttons |
| `--accent-green` | #4a7c59 | Links, accents |

---

### start.sh
**Purpose**: Launch development server

**Contents**:
```bash
#!/bin/bash
PORT=2277
# Tries Python 3, falls back to Python 2
python3 -m http.server $PORT
```

**Usage**:
```bash
./start.sh
```

---

## Data Files

### data/business-plan.json
**Purpose**: All business plan content (V2)

**Structure**:
```json
{
    "meta": {
        "title": "El Woods Business Plan",
        "subtitle": "...",
        "location": "Denver, Colorado",
        "lastUpdated": "2026-01-01T00:00:00.000Z"
    },
    "sections": [
        {
            "id": "executive-summary",
            "title": "Executive Summary",
            "status": "in-progress",
            "content": "<h3>...</h3><p>...</p>"
        },
        // ... 19 more sections
    ]
}
```

**Sections** (20 total):
1. executive-summary
2. traction (V2 - new)
3. company-description
4. problem
5. solution
6. market-overview
7. target-market
8. competition
9. usp
10. products-services
11. revenue-model
12. operations
13. marketing
14. management
15. financials
16. funding
17. milestones
18. mission
19. risks
20. appendix

**Size**: ~1,600 lines

---

## Reference Files

### ElWoods_deck.pdf
- Original pitch deck
- Visual concept and branding
- Source for initial content

### bizplan_init.pdf
- Initial business plan outline
- Competitor research
- Market data

---

## Documentation Files

### docs/README.md
- Main documentation index
- Links to all other docs

### docs/session-start/
- **README.md** - Quick start for agents
- **project-overview.md** - Business context
- **current-state.md** - Progress and decisions

### docs/technical/
- **README.md** - Technical overview
- **file-structure.md** - This file
- **webapp-guide.md** - How the app works

### docs/business-plan/
- **README.md** - Plan overview
- **sections-reference.md** - All 19 sections detailed

---

## File Sizes (Approximate)

| File | Lines | Purpose |
|------|-------|---------|
| index.html | 100 | Structure |
| app.js | 250 | Logic |
| styles.css | 600 | Styling |
| business-plan.json | 1,500 | Content |
| start.sh | 30 | Server |
| docs/*.md | 1,000+ | Documentation |

---

[Back to Technical Docs](./README.md) | [Back to Main Docs](../README.md)
