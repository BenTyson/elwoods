# Technical Documentation

> Architecture and implementation details for the El Woods webapp.

---

## Quick Reference

| Aspect | Details |
|--------|---------|
| Stack | Vanilla HTML/CSS/JS |
| Data | JSON file |
| Server | Python http.server |
| Port | 2277 |
| Build tools | None |
| Dependencies | None (except Python for server) |

## Documentation

- [File Structure](./file-structure.md) - Complete file breakdown
- [Webapp Guide](./webapp-guide.md) - How the application works

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                      Browser                             │
├─────────────────────────────────────────────────────────┤
│  index.html                                              │
│  ├── styles.css (Forest theme)                          │
│  └── app.js (Application logic)                         │
│       └── fetch('data/business-plan.json')              │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│              Python HTTP Server (port 2277)              │
│              Serves static files                         │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                    File System                           │
│  /Users/bentyson/elwoods/                               │
│  ├── index.html                                         │
│  ├── app.js                                             │
│  ├── styles.css                                         │
│  └── data/business-plan.json                            │
└─────────────────────────────────────────────────────────┘
```

---

## Key Design Decisions

### Why No Framework?

1. **Simplicity** - No build step, no dependencies to manage
2. **Portability** - Works on any machine with Python
3. **Transparency** - Easy for anyone to understand and modify
4. **Speed** - Instant startup, no compilation

### Why JSON for Data?

1. **Editable** - Easy to modify in any text editor
2. **Readable** - Human-friendly format
3. **No Backend** - No database setup required
4. **Portable** - Single file contains all content

### Why Python Server?

1. **Universal** - Python installed on most systems
2. **Simple** - One command to start
3. **Reliable** - Built into Python standard library

---

## Running the Project

### Method 1: Start Script
```bash
./start.sh
```

### Method 2: Direct Python
```bash
cd /Users/bentyson/elwoods
python3 -m http.server 2277
```

### Method 3: Python 2 (fallback)
```bash
python -m SimpleHTTPServer 2277
```

### Stopping the Server
```bash
# Ctrl+C in terminal
# Or kill by port:
pkill -f "python.*2277"
```

---

## CSS Theme Variables

The forest theme is controlled by CSS custom properties in `styles.css`:

```css
:root {
    --bg-dark: #1a2e1a;
    --bg-medium: #2d4a2d;
    --bg-light: #3d6b4f;
    --text-primary: #e8e4d9;
    --text-secondary: #b8c4a8;
    --accent-gold: #c9a959;
    --accent-green: #4a7c59;
    /* ... more variables */
}
```

To change the theme, modify these variables.

---

## Data Schema

### business-plan.json Structure

```json
{
    "meta": {
        "title": "El Woods Business Plan",
        "subtitle": "An immersive sustainable retail experience",
        "location": "Denver, Colorado",
        "lastUpdated": "2025-12-29T00:00:00.000Z"
    },
    "sections": [
        {
            "id": "section-id",
            "title": "Section Title",
            "status": "draft|in-progress|complete",
            "content": "<h3>HTML content</h3><p>...</p>"
        }
    ]
}
```

### Section Status Values
- `draft` - Initial content, needs work
- `in-progress` - Being developed
- `complete` - Finalized

---

## Key Functions (app.js)

| Function | Purpose |
|----------|---------|
| `loadBusinessPlan()` | Fetches and parses JSON data |
| `renderNavigation()` | Builds sidebar nav links |
| `showSection(id)` | Displays selected section content |
| `updateProgress()` | Calculates and shows progress bar |
| `openEditPanel()` | Opens content editor |
| `saveContent()` | Saves edits to localStorage |
| `exportPlan()` | Generates printable version |
| `toggleSidebar()` | Mobile sidebar toggle |

---

## localStorage Usage

Edits are persisted to browser localStorage:

```javascript
// Key format
`elwoods-section-${sectionId}`

// Retrieve
localStorage.getItem('elwoods-section-executive-summary')

// Save
localStorage.setItem('elwoods-section-executive-summary', content)
```

**Note**: localStorage is browser-specific. To permanently save changes, edit `business-plan.json` directly.

---

## Common Modifications

### Add a New Section

1. Edit `data/business-plan.json`
2. Add to `sections` array:
```json
{
    "id": "new-section",
    "title": "New Section Title",
    "status": "draft",
    "content": "<h3>Heading</h3><p>Content...</p>"
}
```

### Change Theme Colors

1. Edit `styles.css`
2. Modify `:root` CSS variables
3. Refresh browser

### Add a Feature

1. Edit `app.js` for logic
2. Edit `styles.css` for styling
3. Edit `index.html` if new elements needed

---

[Back to Main Docs](../README.md)
