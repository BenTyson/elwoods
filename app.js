// El Woods Business Plan App

let businessPlan = null;
let currentSectionIndex = 0;
let sidebarCollapsed = false;

// Initialize the app
document.addEventListener('DOMContentLoaded', async () => {
    await loadBusinessPlan();
    renderNavigation();
    renderCurrentSection();
    updateProgress();
});

// Load business plan data
async function loadBusinessPlan() {
    try {
        const response = await fetch('data/business-plan.json');
        businessPlan = await response.json();
    } catch (error) {
        console.error('Error loading business plan:', error);
        // Use default data if file doesn't exist yet
        businessPlan = getDefaultBusinessPlan();
    }
}

// Save business plan data
async function saveBusinessPlan() {
    // In a real implementation, this would POST to a server
    // For now, we'll store in localStorage as a fallback
    localStorage.setItem('elwoods-business-plan', JSON.stringify(businessPlan));
    console.log('Business plan saved to localStorage');
}

// Get default business plan structure
function getDefaultBusinessPlan() {
    return {
        "meta": {
            "title": "El Woods Business Plan",
            "subtitle": "An immersive sustainable retail experience",
            "location": "Denver, Colorado",
            "lastUpdated": new Date().toISOString()
        },
        "sections": [
            {
                "id": "executive-summary",
                "title": "Executive Summary",
                "status": "draft",
                "content": "<h3>Overview</h3>\n<p><strong>El Woods</strong> is a uniquely immersive retail + cafe experience blending sustainability, art, and community in Denver, Colorado.</p>\n<ul>\n<li>Sustainable buy-sell-trade retail storefront</li>\n<li>Forest-immersed cafe with locally sourced coffee & baked goods</li>\n<li>Local art gallery and community event space</li>\n</ul>\n<p>Our immersive woodland environment encourages guests to rethink consumption, feel grounded, and inspire a more conscious way of living.</p>\n<blockquote>\"Fuck normal, I want magic.\"</blockquote>"
            },
            {
                "id": "company-description",
                "title": "Company Description",
                "status": "draft",
                "content": "<h3>About El Woods</h3>\n<p>El Woods is a social enterprise built on environmental stewardship and conscious consumerism.</p>\n<ul>\n<li><strong>Structure:</strong> LLC / Social Enterprise</li>\n<li><strong>Location:</strong> Denver, Colorado (seeking venue partner for initial popup/hybrid concept)</li>\n<li><strong>Mission:</strong> Combat fast fashion waste and raise awareness about deforestation</li>\n<li><strong>Give-back:</strong> 10% of proceeds support environmental causes</li>\n</ul>\n<p>Every element tells the same story: reclaimed wood, living walls, handmade furniture, natural light, and air thick with greenery.</p>"
            },
            {
                "id": "problem",
                "title": "Problem Statement",
                "status": "draft",
                "content": "<h3>The Fast Fashion Crisis</h3>\n<div class=\"data-grid\">\n<div class=\"data-card\">\n<h4>Landfill Waste</h4>\n<div class=\"value\">10,000</div>\n<div class=\"stat-label\">items every 5 minutes</div>\n</div>\n<div class=\"data-card\">\n<h4>Water Pollution</h4>\n<div class=\"value\">20%</div>\n<div class=\"stat-label\">of global pollution from textiles</div>\n</div>\n<div class=\"data-card\">\n<h4>Water Usage</h4>\n<div class=\"value\">2,700L</div>\n<div class=\"stat-label\">to produce one t-shirt</div>\n</div>\n</div>\n<h3>The Thrift Store Gap</h3>\n<p>Traditional thrift stores are:</p>\n<ul>\n<li>Fragmented and transactional</li>\n<li>Cluttered, overwhelming, low-quality experience</li>\n<li>Don't address overconsumption culture</li>\n<li>Don't connect customers emotionally to impact</li>\n<li>Operate as resale outlets, not catalysts for change</li>\n</ul>\n<p><strong>Thrift stores are in need of a revival.</strong></p>"
            },
            {
                "id": "solution",
                "title": "Our Solution",
                "status": "draft",
                "content": "<h3>How El Woods Addresses the Problem</h3>\n<p>El Woods transforms sustainable shopping from a transaction into a <strong>transformative experience</strong>.</p>\n<ul>\n<li><strong>Immersive Environment:</strong> Forest-themed space that shifts mindset from \"cheap shopping\" to conscious lifestyle</li>\n<li><strong>Curated Selection:</strong> Quality over quantity - vintage, repurposed, and eco-conscious fashion</li>\n<li><strong>Emotional Connection:</strong> Connect customers to the impact of their choices through design and storytelling</li>\n<li><strong>Community Hub:</strong> Workshops, events, and gatherings that deepen sustainability awareness</li>\n<li><strong>Closed Loop:</strong> Buy-sell-trade model that actively keeps clothing in circulation</li>\n</ul>"
            },
            {
                "id": "market-overview",
                "title": "Market Overview",
                "status": "draft",
                "content": "<h3>Denver's Sustainable Market</h3>\n<ul>\n<li>Denver's sustainable market is growing rapidly</li>\n<li><strong>Waste No More (2022):</strong> Mandatory composting & recycling ordinance</li>\n<li>Cultural shift toward sustainable fashion</li>\n<li>Denver ranks <strong>4th highest per capita</strong> for vintage/secondhand stores in U.S.</li>\n</ul>\n<h3>Market Size</h3>\n<ul>\n<li>Buy-sell-trade market growing steadily</li>\n<li>Colorado cafe & coffee industry valued at <strong>$1.6B (2025)</strong></li>\n<li>Denver cafes increasingly adopting sustainable practices</li>\n</ul>"
            },
            {
                "id": "target-market",
                "title": "Target Market",
                "status": "draft",
                "content": "<h3>Customer Personas</h3>\n<p><em>To be developed - need input on:</em></p>\n<ul>\n<li>Primary demographic (age, income, location)</li>\n<li>Psychographic profile (values, lifestyle, interests)</li>\n<li>Shopping behaviors and preferences</li>\n<li>Key motivations for sustainable shopping</li>\n</ul>"
            },
            {
                "id": "competition",
                "title": "Competition Analysis",
                "status": "draft",
                "content": "<h3>Denver Competitors</h3>\n<ul>\n<li><strong>Sacred Society</strong> - wellness center</li>\n<li><strong>Dandy Lion Coffee Co.</strong> - whimsical boutique & cafe</li>\n<li><strong>Recital</strong> - designer clothes, plants, books</li>\n<li><strong>Ritual Craft</strong> - candles, tea, crystals, plants</li>\n<li><strong>Atomic Salvage</strong> - resale store</li>\n<li><strong>Common Threads</strong> - sewing classes, designer fashion</li>\n<li><strong>Green Spaces Marketplace</strong> - sustainability hub</li>\n</ul>\n<h3>Competitive Positioning</h3>\n<p><em>To be developed - how El Woods differentiates from each competitor</em></p>"
            },
            {
                "id": "usp",
                "title": "Unique Selling Proposition",
                "status": "draft",
                "content": "<h3>What Makes El Woods Different</h3>\n<ul>\n<li><strong>Immersive Experience:</strong> Mission-driven space unlike conventional cafes/stores</li>\n<li><strong>Restorative Environment:</strong> Forest immersion fostering emotional connection and grounding</li>\n<li><strong>Curated Ecosystem:</strong> Sustainable fashion + local art + baked goods + coffee in one cohesive experience</li>\n<li><strong>Catalyst for Change:</strong> Not just resale - actively shifting consumer behavior and awareness</li>\n</ul>"
            },
            {
                "id": "products-services",
                "title": "Products & Services",
                "status": "draft",
                "content": "<h3>Clothing | Cafe | Collective</h3>\n<h4>Wardrobe Revival (Clothing)</h4>\n<ul>\n<li><strong>Buy-Sell-Trade:</strong> Rotating selection of pre-loved and upcycled fashion</li>\n<li><strong>Designer Showcase:</strong> Local sustainable designers and resellers</li>\n<li>Curated vintage, repurposed, and eco-conscious pieces</li>\n</ul>\n<h4>Eco Cafe</h4>\n<ul>\n<li><strong>Locally Sourced:</strong> Small-batch roasters, tea artisans, neighborhood bakeries</li>\n<li><strong>Sustainably Minded:</strong> Compostable packaging, zero-waste practices, plant-based options</li>\n<li>Immersive woodland sensory experience</li>\n</ul>\n<h4>Collective</h4>\n<ul>\n<li><strong>Community:</strong> Workshops, talks, collaborative events</li>\n<li><strong>Art:</strong> Rotating local artist showcases, live art sessions</li>\n<li><strong>Books:</strong> Curated secondhand reads, book swaps</li>\n<li><strong>Music:</strong> Acoustic sessions, open-mic nights</li>\n</ul>"
            },
            {
                "id": "revenue-model",
                "title": "Revenue Model",
                "status": "draft",
                "content": "<h3>Revenue Streams</h3>\n<p><em>To be developed with specific projections:</em></p>\n<ul>\n<li><strong>Clothing Sales:</strong> Margin on buy-sell-trade items</li>\n<li><strong>Cafe Sales:</strong> Coffee, tea, baked goods</li>\n<li><strong>Consignment Fees:</strong> % from featured designers/resellers</li>\n<li><strong>Event Revenue:</strong> Workshops, ticketed events</li>\n<li><strong>Art Commissions:</strong> % on local artist sales</li>\n</ul>"
            },
            {
                "id": "operations",
                "title": "Operations Plan",
                "status": "draft",
                "content": "<h3>Day-to-Day Operations</h3>\n<h4>Sourcing & Partnerships</h4>\n<ul>\n<li>Local sustainable designers</li>\n<li>Artists and musicians</li>\n<li>Food vendors (coffee roasters, bakeries)</li>\n</ul>\n<h4>Community Events</h4>\n<ul>\n<li>Workshops and talks</li>\n<li>Forest walks and eco-activities</li>\n<li>Music and art shows</li>\n<li>Small performances and gallery exhibitions</li>\n</ul>\n<h4>Staffing</h4>\n<p><em>To be developed - staffing plan and hours of operation</em></p>"
            },
            {
                "id": "marketing",
                "title": "Marketing Strategy",
                "status": "draft",
                "content": "<h3>Marketing Approach</h3>\n<p><em>To be developed:</em></p>\n<ul>\n<li>Instagram presence and social media strategy</li>\n<li>Community partnerships</li>\n<li>Launch campaign</li>\n<li>Ongoing customer acquisition</li>\n<li>Event marketing</li>\n</ul>"
            },
            {
                "id": "management",
                "title": "Management Team",
                "status": "draft",
                "content": "<h3>Founding Team</h3>\n<h4>Mor McIntosh | Founder</h4>\n<p><em>Background to be added:</em></p>\n<ul>\n<li>Retail/fashion experience</li>\n<li>Food/hospitality experience</li>\n</ul>\n<h4>Ben | Co-Founder & Business Partner</h4>\n<p><em>Background to be added:</em></p>\n<ul>\n<li>Business/entrepreneurship experience</li>\n<li>Previous ventures</li>\n</ul>\n<h4>Contact</h4>\n<p>720.254.9067<br>elwoods.revival@gmail.com</p>"
            },
            {
                "id": "financials",
                "title": "Financial Projections",
                "status": "draft",
                "content": "<h3>Startup Costs (Phase 1: Popup/Hybrid)</h3>\n<p><em>To be developed:</em></p>\n<ul>\n<li>Space lease/arrangement</li>\n<li>Initial clothing inventory</li>\n<li>Cafe equipment & supplies</li>\n<li>Buildout/decor (forest aesthetic)</li>\n<li>POS system & technology</li>\n<li>Marketing/launch</li>\n<li>Working capital (3 months)</li>\n<li>Licenses & permits</li>\n</ul>\n<h3>Revenue Projections</h3>\n<p><em>To be developed with assumptions</em></p>\n<h3>Break-Even Analysis</h3>\n<p><em>To be calculated</em></p>"
            },
            {
                "id": "funding",
                "title": "Funding Request",
                "status": "draft",
                "content": "<h3>Investment Opportunity</h3>\n<p><em>To be developed:</em></p>\n<ul>\n<li>Total funding needed</li>\n<li>Use of funds breakdown</li>\n<li>Investment structure (equity, loan, etc.)</li>\n<li>Expected returns / timeline</li>\n</ul>"
            },
            {
                "id": "milestones",
                "title": "Milestones & Timeline",
                "status": "draft",
                "content": "<h3>Phased Approach</h3>\n<h4>Phase 1: Popup/Hybrid Concept</h4>\n<p>Test the El Woods experience in a smaller format:</p>\n<ul>\n<li>Partner with existing venue</li>\n<li>Launch core offerings (clothing + cafe)</li>\n<li>Build community and brand awareness</li>\n<li>Validate business model</li>\n</ul>\n<h4>Phase 2: Full El Woods Location</h4>\n<p>Expand to dedicated space with complete vision:</p>\n<ul>\n<li>Full forest immersion buildout</li>\n<li>Complete collective offerings</li>\n<li>Expanded event programming</li>\n</ul>\n<p><em>Timeline dependent on funding</em></p>"
            },
            {
                "id": "mission",
                "title": "Social & Environmental Mission",
                "status": "draft",
                "content": "<h3>Our Commitment</h3>\n<ul>\n<li><strong>10% of proceeds</strong> support environmental causes</li>\n<li>Focus on wildfire prevention and deforestation awareness</li>\n<li>Colorado wildfires make this locally relevant and resonant</li>\n</ul>\n<h3>Impact Goals</h3>\n<ul>\n<li>Divert clothing from landfills</li>\n<li>Shift consumer behavior toward conscious consumption</li>\n<li>Support local artists and sustainable designers</li>\n<li>Create community around environmental stewardship</li>\n</ul>"
            },
            {
                "id": "risks",
                "title": "Risk Analysis",
                "status": "draft",
                "content": "<h3>Key Risks & Mitigation</h3>\n<p><em>To be developed:</em></p>\n<ul>\n<li>Market risks</li>\n<li>Operational risks</li>\n<li>Financial risks</li>\n<li>Competitive risks</li>\n<li>Mitigation strategies for each</li>\n</ul>"
            },
            {
                "id": "appendix",
                "title": "Appendix",
                "status": "draft",
                "content": "<h3>Supporting Materials</h3>\n<ul>\n<li>Pitch deck (ElWoods_deck.pdf)</li>\n<li>Concept art and inspiration images</li>\n<li>Market research data</li>\n<li>Detailed financial models</li>\n</ul>"
            }
        ]
    };
}

// Render navigation
function renderNavigation() {
    const navList = document.getElementById('navList');
    navList.innerHTML = '';

    businessPlan.sections.forEach((section, index) => {
        const li = document.createElement('li');
        li.className = `nav-item ${index === currentSectionIndex ? 'active' : ''}`;
        li.innerHTML = `
            <a href="#" onclick="goToSection(${index}); return false;">
                <span class="status-dot ${section.status}"></span>
                <span class="section-title">${section.title}</span>
                <span class="section-number">${index + 1}</span>
            </a>
        `;
        navList.appendChild(li);
    });
}

// Render current section
function renderCurrentSection() {
    const section = businessPlan.sections[currentSectionIndex];

    // Update header
    document.getElementById('currentSectionTitle').textContent = section.title;

    // Update status badge
    const statusBadge = document.getElementById('statusBadge');
    statusBadge.textContent = formatStatus(section.status);
    statusBadge.className = `status-badge ${section.status}`;

    // Update status select
    document.getElementById('statusSelect').value = section.status;

    // Update content
    const contentDiv = document.getElementById('sectionContent');
    if (section.content && section.content.trim()) {
        contentDiv.innerHTML = section.content;
    } else {
        contentDiv.innerHTML = `
            <div class="empty-state">
                <p>This section hasn't been filled out yet.</p>
                <p class="hint">Click the edit button to add content.</p>
            </div>
        `;
    }
}

// Format status for display
function formatStatus(status) {
    const statusMap = {
        'draft': 'Draft',
        'in-progress': 'In Progress',
        'complete': 'Complete'
    };
    return statusMap[status] || status;
}

// Go to specific section
function goToSection(index) {
    currentSectionIndex = index;
    renderNavigation();
    renderCurrentSection();
}

// Navigate to previous section
function previousSection() {
    if (currentSectionIndex > 0) {
        goToSection(currentSectionIndex - 1);
    }
}

// Navigate to next section
function nextSection() {
    if (currentSectionIndex < businessPlan.sections.length - 1) {
        goToSection(currentSectionIndex + 1);
    }
}

// Update section status
function updateStatus() {
    const newStatus = document.getElementById('statusSelect').value;
    businessPlan.sections[currentSectionIndex].status = newStatus;

    renderNavigation();
    renderCurrentSection();
    updateProgress();
    saveBusinessPlan();
}

// Update progress bar
function updateProgress() {
    const total = businessPlan.sections.length;
    const complete = businessPlan.sections.filter(s => s.status === 'complete').length;
    const percentage = (complete / total) * 100;

    document.getElementById('progressFill').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = `${complete} of ${total} sections complete`;
}

// Open edit panel
function openEditPanel() {
    const section = businessPlan.sections[currentSectionIndex];
    document.getElementById('editContent').value = section.content || '';
    document.getElementById('editPanel').classList.add('open');
    document.getElementById('editOverlay').classList.add('open');
}

// Close edit panel
function closeEditPanel() {
    document.getElementById('editPanel').classList.remove('open');
    document.getElementById('editOverlay').classList.remove('open');
}

// Close edit panel with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeEditPanel();
    }
});

// Save content from edit panel
function saveContent() {
    const newContent = document.getElementById('editContent').value;
    businessPlan.sections[currentSectionIndex].content = newContent;

    renderCurrentSection();
    closeEditPanel();
    saveBusinessPlan();
}

// Toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    const toggleBtn = document.getElementById('sidebarToggle');

    sidebarCollapsed = !sidebarCollapsed;

    if (sidebarCollapsed) {
        sidebar.classList.add('collapsed');
        mainContent.classList.add('expanded');
        toggleBtn.classList.remove('active');
    } else {
        sidebar.classList.remove('collapsed');
        mainContent.classList.remove('expanded');
        toggleBtn.classList.add('active');
    }
}

// Export plan (simple print version)
function exportPlan() {
    // Create a new window with printable content
    const printWindow = window.open('', '_blank');

    let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>El Woods Business Plan</title>
            <style>
                body { font-family: Georgia, serif; max-width: 800px; margin: 0 auto; padding: 2rem; }
                h1 { text-align: center; border-bottom: 2px solid #3d6b4f; padding-bottom: 1rem; }
                h2 { color: #2d4a3e; margin-top: 2rem; border-bottom: 1px solid #ccc; padding-bottom: 0.5rem; }
                h3 { color: #3d6b4f; }
                ul { margin-left: 1.5rem; }
                .meta { text-align: center; color: #666; margin-bottom: 2rem; }
                .data-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1rem 0; }
                .data-card { border: 1px solid #ccc; padding: 1rem; text-align: center; }
                blockquote { border-left: 3px solid #c9a959; padding-left: 1rem; font-style: italic; color: #666; }
                @media print { body { padding: 0; } }
            </style>
        </head>
        <body>
            <h1>El Woods Business Plan</h1>
            <div class="meta">
                <p>${businessPlan.meta.subtitle}</p>
                <p>${businessPlan.meta.location}</p>
            </div>
    `;

    businessPlan.sections.forEach((section, index) => {
        html += `<h2>${index + 1}. ${section.title}</h2>`;
        html += section.content || '<p><em>Content to be added</em></p>';
    });

    html += `
            <hr>
            <p style="text-align: center; color: #666; font-size: 0.9rem;">
                Generated ${new Date().toLocaleDateString()}
            </p>
        </body>
        </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
}

// Load from localStorage on startup if available
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('elwoods-business-plan');
    if (saved) {
        try {
            const savedPlan = JSON.parse(saved);
            // Merge saved content with default structure (in case new sections added)
            if (savedPlan.sections) {
                businessPlan = savedPlan;
            }
        } catch (e) {
            console.log('Could not load saved plan, using defaults');
        }
    }
});
