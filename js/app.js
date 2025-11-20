// --- CONFIGURATION ---
const container = document.getElementById('works-container');
const preview = document.getElementById('hover-preview');

// --- 1. MANUAL DATA (The "Hardcoded" Portfolio) ---
// This guarantees your works show up instantly.
const portfolioItems = [
    {
        title: "JOE COFFEE",
        category: "[INTERIOR] [GRAPHIC]",
        date: "04.2025",
        desc: "BREWED TO PERFECTION",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "ATLAS MOBILITY",
        category: "[TECH] [ARD]",
        date: "06.2025",
        desc: "FUTURE-FORWARD URBAN TRANSIT",
        image: "https://images.unsplash.com/photo-1517420704952-d9f3971d7894?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "LUMINA HEALTH",
        category: "[GRAPHIC]",
        date: "08.2024",
        desc: "CLARITY IN CARE",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "NESTWELL",
        category: "[ART] [INTERIOR]",
        date: "02.2024",
        desc: "RETHINKING HOME & COMFORT",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "ALBA CERAMICS",
        category: "[CRAFT]",
        date: "09.2023",
        desc: "CRAFT MEETS CONTEMPORARY",
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "WAYPOINT TRAVEL",
        category: "[UX/UI]",
        date: "04.2023",
        desc: "SEAMLESS JOURNEYS",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "HARBOR CO",
        category: "[GRAPHIC]",
        date: "02.2023",
        desc: "MODERN TRADITION",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "NOVA BIOTECH",
        category: "[SCIENCE]",
        date: "05.2022",
        desc: "SHAPING THE FUTURE",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop"
    }
];

// --- 2. RENDER FUNCTION ---
function renderWorks(filter = 'all') {
    container.innerHTML = ''; // Clear loading text

    portfolioItems.forEach(item => {
        // Filter Logic (Optional for later)
        // if (filter !== 'all' && !item.category.includes(filter)) return;

        // Create Elements
        const el = document.createElement('div');
        el.className = 'work-item';
        el.dataset.img = item.image; // Store for hover

        el.innerHTML = `
            <div class="work-image">
                <img src="${item.image}" loading="lazy" alt="${item.title}">
            </div>
            <div class="work-info">
                <div class="work-title">${item.title}</div>
                <div class="work-desc">${item.desc}</div>
                <div class="meta-row">
                    <span class="work-cats">${item.category}</span>
                    <span class="work-date">${item.date}</span>
                </div>
            </div>
        `;
        
        // Add Interaction Events
        attachEvents(el, item.image);
        
        container.appendChild(el);
    });
}

// --- 3. INTERACTION EVENTS (Hover & Mouse Move) ---
function attachEvents(el, imgUrl) {
    // Mouse Enter: Show Preview (Only in List Mode)
    el.addEventListener('mouseenter', () => {
        if (document.body.classList.contains('view-mode-list')) {
            preview.style.backgroundImage = `url(${imgUrl})`;
            preview.classList.add('active');
        }
    });

    // Mouse Leave: Hide Preview
    el.addEventListener('mouseleave', () => {
        preview.classList.remove('active');
    });

    // Mouse Move: Follow Cursor
    el.addEventListener('mousemove', (e) => {
        if (document.body.classList.contains('view-mode-list')) {
            preview.style.left = e.clientX + 20 + 'px';
            preview.style.top = e.clientY + 'px';
            preview.style.transform = 'translate(0, -50%)';
        }
    });
}

// --- 4. VIEW TOGGLES (Grid vs List) ---
const gridBtn = document.getElementById('view-grid');
const listBtn = document.getElementById('view-list');
const main = document.querySelector('main');
const body = document.body;

gridBtn.addEventListener('change', () => {
    main.classList.remove('view-list');
    body.classList.remove('view-mode-list'); // Helper for JS checks
});

listBtn.addEventListener('change', () => {
    main.classList.add('view-list');
    body.classList.add('view-mode-list'); // Helper for JS checks
});

// --- 5. THEME TOGGLE ---
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    themeBtn.textContent = next === 'dark' ? 'LIGHT' : 'DARK';
});

// --- 6. CLOCK ---
setInterval(() => {
    const now = new Date();
    document.getElementById('clock').textContent = 
        now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}, 1000);

// Initialize
renderWorks();
