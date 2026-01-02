# Webapp Guide

> How the El Woods business plan webapp works.

---

## Overview

The webapp is a single-page application that:
1. Loads business plan data from JSON
2. Renders navigation and content
3. Tracks section completion progress
4. Allows inline editing of content
5. Exports the plan for printing

---

## Application Flow

```
┌─────────────────────────────────────────────────────────┐
│                      Page Load                           │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│              loadBusinessPlan()                          │
│              Fetch data/business-plan.json              │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│              renderNavigation()                          │
│              Build sidebar links                         │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│              showSection(firstSection)                   │
│              Display initial content                     │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│              updateProgress()                            │
│              Calculate completion %                      │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                   Ready for User                         │
└─────────────────────────────────────────────────────────┘
```

---

## UI Components

### Sidebar Navigation

```
┌──────────────────────┐
│     El Woods         │  <- Logo
│  "Fuck normal..."    │  <- Tagline
├──────────────────────┤
│   Plan Progress      │
│   ████████░░░ 80%    │  <- Progress bar
│   15 of 19 complete  │
├──────────────────────┤
│ ○ Executive Summary  │  <- Nav items
│ ● Company Desc.      │     (● = active)
│ ○ Problem Statement  │
│ ...                  │
├──────────────────────┤
│   [Export Plan]      │  <- Export button
└──────────────────────┘
```

**Status Indicators**:
- Gray dot = Draft
- Yellow dot = In Progress
- Green checkmark = Complete

### Main Content Area

```
┌─────────────────────────────────────────────────────┐
│ ═══════════════════════════════════════             │
│            Section Title            [In Progress]   │
│ ═══════════════════════════════════════             │
├─────────────────────────────────────────────────────┤
│                                                      │
│   <Section HTML content rendered here>              │
│                                                      │
│   - Data cards                                       │
│   - Tables                                          │
│   - Lists                                           │
│                                                      │
├─────────────────────────────────────────────────────┤
│ [Previous]    Status: [Dropdown]    [Next]          │
└─────────────────────────────────────────────────────┘
                                              ┌───┐
                                              │ ✎ │ <- FAB Edit
                                              └───┘
```

### Edit Panel (Slides in from right)

```
                              ┌──────────────────────┐
                              │   Edit Section    [X]│
                              ├──────────────────────┤
                              │                      │
                              │   ┌──────────────┐   │
                              │   │              │   │
                              │   │  <textarea>  │   │
                              │   │              │   │
                              │   │              │   │
                              │   └──────────────┘   │
                              │                      │
                              ├──────────────────────┤
                              │ [Cancel] [Save]      │
                              └──────────────────────┘
```

---

## Key Interactions

### Navigation

| Action | Trigger | Function |
|--------|---------|----------|
| Click nav item | Sidebar link | `showSection(id)` |
| Previous button | Footer button | `previousSection()` |
| Next button | Footer button | `nextSection()` |
| Toggle sidebar | Hamburger (mobile) | `toggleSidebar()` |

### Editing

| Action | Trigger | Function |
|--------|---------|----------|
| Open editor | FAB button | `openEditPanel()` |
| Close editor | X button, overlay, ESC | `closeEditPanel()` |
| Save changes | Save button | `saveContent()` |
| Change status | Dropdown | `updateStatus()` |

### Export

| Action | Trigger | Function |
|--------|---------|----------|
| Export plan | Export button | `exportPlan()` |

---

## Data Flow

### Loading Content

```javascript
// 1. Fetch JSON
const response = await fetch('data/business-plan.json');
const data = await response.json();

// 2. Store in memory
businessPlan = data;

// 3. Check localStorage for edits
sections.forEach(section => {
    const saved = localStorage.getItem(`elwoods-section-${section.id}`);
    if (saved) section.content = saved;
});
```

### Saving Edits

```javascript
// 1. Get content from textarea
const content = document.getElementById('editContent').value;

// 2. Save to localStorage
localStorage.setItem(`elwoods-section-${currentSection}`, content);

// 3. Update in-memory data
businessPlan.sections[index].content = content;

// 4. Re-render
showSection(currentSection);
```

**Important**: localStorage saves are browser-specific and temporary. To permanently save changes, edit `business-plan.json` directly.

### Status Updates

```javascript
// 1. Get new status from dropdown
const status = document.getElementById('statusSelect').value;

// 2. Update in-memory
businessPlan.sections[index].status = status;

// 3. Update UI
updateProgress();
renderNavigation();
```

---

## Content Rendering

Section content is stored as HTML strings and rendered directly:

```javascript
// Raw content in JSON
"content": "<h3>Heading</h3><p>Paragraph</p>"

// Rendered to DOM
sectionContent.innerHTML = section.content;
```

### Supported HTML Elements

| Element | Use |
|---------|-----|
| `<h3>`, `<h4>` | Section headings |
| `<p>` | Paragraphs |
| `<ul>`, `<ol>`, `<li>` | Lists |
| `<table>`, `<tr>`, `<td>` | Data tables |
| `<blockquote>` | Quotes |
| `<strong>`, `<em>` | Emphasis |
| `.data-grid`, `.data-card` | Stat displays |

### Data Card Pattern

```html
<div class="data-grid">
    <div class="data-card">
        <h4>Label</h4>
        <div class="value">$100K</div>
        <div class="stat-label">Description</div>
    </div>
</div>
```

---

## Progress Calculation

```javascript
function updateProgress() {
    const total = businessPlan.sections.length;
    const complete = businessPlan.sections
        .filter(s => s.status === 'complete').length;

    const percent = (complete / total) * 100;

    progressFill.style.width = percent + '%';
    progressText.textContent = `${complete} of ${total} sections complete`;
}
```

---

## Export Functionality

The export function opens a new window with:
1. Clean, printable version of all sections
2. Print-optimized CSS
3. Auto-triggers print dialog

```javascript
function exportPlan() {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>El Woods Business Plan</title>
            <style>/* Print styles */</style>
        </head>
        <body>
            ${generateAllSectionsHTML()}
        </body>
        </html>
    `);
    printWindow.print();
}
```

---

## Responsive Design

### Breakpoints

| Width | Layout |
|-------|--------|
| > 768px | Sidebar visible, desktop layout |
| ≤ 768px | Sidebar hidden, hamburger menu |

### Mobile Behavior

- Sidebar slides in/out via toggle
- Edit panel takes full width
- Adjusted padding and font sizes

---

## Error Handling

```javascript
try {
    const response = await fetch('data/business-plan.json');
    if (!response.ok) throw new Error('Failed to load');
    businessPlan = await response.json();
} catch (error) {
    console.error('Error loading business plan:', error);
    // Show error message to user
}
```

---

## Browser Compatibility

Tested and works in:
- Chrome (recommended)
- Firefox
- Safari
- Edge

Required features:
- ES6+ (async/await, template literals)
- CSS Grid/Flexbox
- localStorage

---

[Back to Technical Docs](./README.md) | [Back to Main Docs](../README.md)
