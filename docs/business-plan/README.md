# Business Plan Reference

> Guide to the El Woods business plan content and sections (V2).

---

## Quick Reference

| Aspect | Details |
|--------|---------|
| Total Sections | 20 |
| Data File | `data/business-plan.json` |
| Content Format | HTML strings |
| Status Options | draft, in-progress, complete |
| Version | V2 (January 2026) |

## Documentation

- [Sections Reference](./sections-reference.md) - Detailed breakdown of all 20 sections

---

## Business Plan Structure

The El Woods business plan follows a standard structure with 20 sections:

### Foundation (Sections 1-5)
1. **Executive Summary** - Overview and key highlights
2. **Traction & Validation** - Market validation evidence (V2)
3. **Company Description** - What El Woods is
4. **Problem Statement** - The problem we solve
5. **Our Solution** - How we solve it

### Market (Sections 6-9)
6. **Market Overview** - Denver market data
7. **Target Market** - Customer profiles
8. **Competition Analysis** - Competitor landscape
9. **Unique Selling Proposition** - What makes us different

### Operations (Sections 10-13)
10. **Products & Services** - What we offer
11. **Revenue Model** - How we make money
12. **Operations Plan** - How we run the business
13. **Marketing Strategy** - How we acquire customers

### Team & Financials (Sections 14-17)
14. **Management Team** - Who's running this
15. **Financial Projections** - The numbers
16. **Funding Request** - What we need (includes exit strategy)
17. **Milestones & Timeline** - Our roadmap

### Mission & Risk (Sections 18-20)
18. **Social & Environmental Mission** - Our impact
19. **Risk Analysis** - What could go wrong
20. **Appendix** - Supporting materials

---

## V2 Changes Summary

| Change | Description |
|--------|-------------|
| New Section | Traction & Validation added after Executive Summary |
| Executive Summary | Added proven demand, marketplace vision |
| Problem Statement | Statistics now cited (EPA, EU Parliament, WWF) |
| Management Team | Restaurant experience documented |
| Financial Projections | Pop-up validated pricing ($55-60 avg) |
| Funding Request | Exit strategy and Marketplace vision added |
| Social Mission | Revised to 5-10% in Year 2+ (sustainable approach) |

---

## Key Numbers

### Financial Summary

| Metric | Value |
|--------|-------|
| Startup Costs | $85,000 - $120,000 |
| Funding Request | $100,000 - $125,000 |
| Monthly Operating | $12,000 - $18,000 |
| Year 1 Revenue | $150,000 - $180,000 |
| Year 2 Revenue | $220,000 - $280,000 |
| Break-even | Month 8-12 |

### Validated Metrics (Pop-ups)

| Metric | Value |
|--------|-------|
| Events Completed | 3-5 |
| Average Transaction | $50-$75 |
| Curation Rate | 20-30% accepted |

### Revenue Mix

| Stream | % of Revenue |
|--------|-------------|
| Clothing Sales | 65% |
| Cafe Sales | 30% |
| Consignment | 2-3% |
| Events | 1-2% |
| Art Sales | 1% |

### Target Market

| Attribute | Value |
|-----------|-------|
| Age Range | 25-35 |
| Income | $50K-$100K |
| Location | West Denver |
| Areas | Wheat Ridge, Golden, Lakewood, Arvada |

---

## Content Guidelines

### Writing Style

- **Tone**: Professional but approachable
- **Voice**: Active, confident
- **Data**: Support claims with numbers and citations
- **Structure**: Use headers, lists, tables for scannability

### HTML Formatting

Use these patterns in content:

**Headers**:
```html
<h3>Main Section Header</h3>
<h4>Subsection Header</h4>
```

**Data Cards** (for statistics):
```html
<div class="data-grid">
    <div class="data-card">
        <h4>Label</h4>
        <div class="value">$100K</div>
        <div class="stat-label">Description</div>
    </div>
</div>
```

**Tables**:
```html
<table style='width:100%; border-collapse: collapse; margin: 1rem 0;'>
    <tr style='border-bottom: 1px solid #3d6b4f;'>
        <td style='padding: 0.5rem;'><strong>Header</strong></td>
        <td style='padding: 0.5rem;'>Value</td>
    </tr>
</table>
```

**Blockquotes**:
```html
<blockquote>"Fuck normal, I want magic."</blockquote>
```

---

## Editing Content

### Via Webapp

1. Navigate to section
2. Click edit button (pencil icon)
3. Modify HTML in textarea
4. Click "Save Changes"

**Note**: Webapp saves to localStorage (browser-specific, temporary)

### Via JSON File

1. Open `data/business-plan.json`
2. Find section by `id`
3. Edit `content` field
4. Save file
5. Refresh browser

**Note**: JSON file changes are permanent and affect all browsers

---

## Section Status

| Status | Meaning | Nav Icon |
|--------|---------|----------|
| `draft` | Initial content, needs work | Gray dot |
| `in-progress` | Being developed | Yellow dot |
| `complete` | Finalized | Green checkmark |

To change status:
1. Via webapp: Use dropdown in section footer
2. Via JSON: Change `status` field value

---

## Common Updates

### Updating Financial Numbers

Sections to update when financials change:
- Executive Summary (summary numbers)
- Financial Projections (detailed breakdown)
- Funding Request (use of funds)
- Revenue Model (projections table)

### Updating Traction Data

Sections to update when new validation data is available:
- Executive Summary (proven demand)
- Traction & Validation (detailed metrics)
- Financial Projections (pricing assumptions)

### Updating Team Info

Sections to update when team changes:
- Executive Summary (team summary)
- Management Team (detailed bios)
- Appendix (contact info)

### Updating Location/Market

Sections to update when location focus changes:
- Company Description (location)
- Market Overview (market data)
- Target Market (geographic focus)
- Competition Analysis (local competitors)

---

## Quality Checklist

Before marking a section "complete":

- [ ] All placeholder text removed
- [ ] Numbers are accurate and consistent across sections
- [ ] Sources cited where applicable
- [ ] Grammar and spelling checked
- [ ] HTML renders correctly
- [ ] Consistent with other sections
- [ ] Investor-ready tone

---

[Back to Main Docs](../README.md)
