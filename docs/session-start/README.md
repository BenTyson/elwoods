# Session Start Guide

> Quick orientation for agents working on the El Woods project.

**Read this first** to understand the project and current state.

---

## 30-Second Overview

- **What**: Business plan webapp for "El Woods" - an immersive sustainable retail + cafe in Denver
- **Stack**: Vanilla HTML/CSS/JS, JSON data file, Python HTTP server
- **Port**: 2277
- **Status**: V3 in progress - voice overhaul underway (Executive Summary done, 19 sections remaining)

## Quick Links

| Need to... | Go to... |
|------------|----------|
| Understand the business | [Project Overview](./project-overview.md) |
| See current progress | [Current State](./current-state.md) |
| Understand the code | [Technical Docs](../technical/README.md) |
| Review business plan sections | [Sections Reference](../business-plan/sections-reference.md) |

---

## V3 Status (January 2026)

The business plan has been through a professional audit, comprehensive revision, and is now undergoing a voice overhaul:

| Aspect | Status |
|--------|--------|
| Total Sections | 20 (Traction section added) |
| All sections drafted | Yes |
| Professional audit | Complete |
| Traction validated | Pop-up events, $50-75 avg transaction |
| Exit strategy | Added |
| Citations | Problem statement cites EPA, EU Parliament, WWF |
| **Voice overhaul** | **In progress** - Executive Summary complete |

### Voice Direction
Morgan's voice: edgy, creative, artsy, passionate, driven. Less corporate suit, more founder with conviction.

---

## Essential Files

### Primary Files to Know

| File | Purpose | When to Edit |
|------|---------|--------------|
| `data/business-plan.json` | All business plan content (20 sections) | Updating plan content |
| `app.js` | Webapp functionality | Adding features |
| `styles.css` | Visual styling | Design changes |
| `index.html` | Page structure | Layout changes |

### Running the Project

```bash
# From project root
./start.sh

# Or directly
python3 -m http.server 2277
```

Visit: `http://localhost:2277`

---

## Business Context

### The Concept
El Woods combines:
1. **Clothing** - Buy-sell-trade curated sustainable fashion (65% revenue)
2. **Cafe** - Locally sourced coffee, tea, baked goods (30% revenue)
3. **Collective** - Community events, art gallery, workshops (5% revenue)

### Validated Through Pop-ups
- 3-5 events at festivals/markets
- Average transaction: $50-$75
- Highly selective curation (20-30% acceptance)

### Target Market
- Age 25-35, household income $50K-$100K
- West Denver: Wheat Ridge, Golden, Lakewood, Arvada
- Eco-conscious, creative, community-oriented consumers

### Funding
- Seeking: $100K-$125K
- Startup costs: $85K-$120K
- Break-even target: Month 8-12

### Growth Vision
- Year 2+: El Woods Marketplace (Etsy-like platform for sustainable goods)

---

## Common Tasks

### Editing Business Plan Content

1. Open `data/business-plan.json`
2. Find the section by `id` (e.g., `"executive-summary"`)
3. Edit the `content` field (HTML string)
4. Update `status` if needed: `"draft"`, `"in-progress"`, `"complete"`

### Adding a New Section

In `business-plan.json`, add to the `sections` array:
```json
{
    "id": "new-section-id",
    "title": "Section Title",
    "status": "draft",
    "content": "<h3>Heading</h3><p>Content here...</p>"
}
```

### Styling Guidelines

- Forest/woodland theme: dark greens, earth tones, gold accents
- Primary colors defined in `styles.css` CSS variables
- Use `.data-grid` and `.data-card` for statistics displays

---

## What NOT to Do

- Don't use npm/node - this is a simple HTML project
- Don't create React/Vue components - keep it vanilla JS
- Don't add build tools - intentionally simple stack
- Don't change the port from 2277 without user approval

---

## Next Steps

1. Read [Project Overview](./project-overview.md) for business context
2. Check [Current State](./current-state.md) for what's been done
3. Review the [Sections Reference](../business-plan/sections-reference.md) for content details

---

[Back to Main Docs](../README.md)
