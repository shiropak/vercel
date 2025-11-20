// DATA
const portfolioItems = [
    { title: "JOE COFFEE", tags: "[INTERIOR]", date: "04.2025", desc: "BREWED TO PERFECTION", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop" },
    { title: "ATLAS MOBILITY", tags: "[TECH]", date: "06.2025", desc: "FUTURE TRANSIT", img: "https://images.unsplash.com/photo-1517420704952-d9f3971d7894?q=80&w=800&auto=format&fit=crop" },
    { title: "LUMINA HEALTH", tags: "[GRAPHIC]", date: "08.2024", desc: "CLARITY IN CARE", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop" },
    { title: "NESTWELL", tags: "[ART]", date: "02.2024", desc: "HOME & COMFORT", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" },
    { title: "ALBA CERAMICS", tags: "[CRAFT]", date: "09.2023", desc: "CONTEMPORARY CRAFT", img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop" },
    { title: "WAYPOINT", tags: "[UX/UI]", date: "04.2023", desc: "SEAMLESS JOURNEYS", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop" },
    { title: "HARBOR CO", tags: "[GRAPHIC]", date: "02.2023", desc: "MODERN TRADITION", img: "https://images.unsplash.com/photo-1529690086133-c8e4bc9e1f6a?q=80&w=800&auto=format&fit=crop" },
    { title: "NOVA BIOTECH", tags: "[SCIENCE]", date: "05.2022", desc: "FUTURE WELLNESS", img: "https://images.unsplash.com/photo-1581093458891-8f30869852bb?q=80&w=800&auto=format&fit=crop" }
];

const container = document.getElementById('works-container');
const preview = document.getElementById('hover-preview');

// --- RENDER FUNCTION (Now accepts a filter) ---
function render(filter = 'all') {
    container.innerHTML = '';
    
    // 1. Filter the data
    const filteredItems = filter === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.tags.toLowerCase().includes(filter));

    // 2. If empty, show message
    if(filteredItems.length === 0) {
        container.innerHTML = '<div style="grid-column: span 4; opacity: 0.5;">NO PROJECTS FOUND IN THIS CATEGORY.</div>';
        return;
    }

    // 3. Loop and Create
    filteredItems.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'work-item';
        
        // Animation delay for smooth filtering
        el.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        el.style.opacity = '0'; // Start hidden for animation

        el.innerHTML = `
            <div class="work-image"><img src="${item.img}"></div>
            <div class="work-info">
                <div class="work-title">${index + 1} <br> ${item.title}</div>
                <div class="work-meta">${item.desc} <br> ${item.tags}</div>
                <div class="work-date">${item.date}</div>
            </div>
        `;
        
        // Hover Events
        el.addEventListener('mouseenter', () => {
            if(document.body.classList.contains('view-mode-list')) {
                preview.style.backgroundImage = `url(${item.img})`;
                preview.classList.add('active');
            }
        });
        el.addEventListener('mouseleave', () => preview.classList.remove('active'));
        el.addEventListener('mousemove', (e) => {
            if(document.body.classList.contains('view-mode-list')) {
                preview.style.left = (e.clientX + 20) + 'px';
                preview.style.top = e.clientY + 'px';
            }
        });
        
        container.appendChild(el);
    });
}

// --- FILTER LOGIC (The Catalog Function) ---
const filterOptions = document.querySelectorAll('#filter-row .control-option');

filterOptions.forEach(opt => {
    opt.addEventListener('click', () => {
        // 1. Remove active class and circle from ALL buttons
        filterOptions.forEach(btn => {
            btn.classList.remove('active');
            btn.innerText = btn.innerText.replace('●', '○'); // Swap circle
        });

        // 2. Add active class and circle to CLICKED button
        opt.classList.add('active');
        opt.innerText = opt.innerText.replace('○', '●'); // Swap circle

        // 3. Get the filter value (all, graphic, art, etc.)
        const filterValue = opt.getAttribute('data-filter');
        
        // 4. Re-render grid
        render(filterValue);
    });
});

// --- THEME LOGIC ---
const btnLight = document.getElementById('theme-light');
const btnDark = document.getElementById('theme-dark');
const html = document.documentElement;

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    if(theme === 'dark') {
        btnDark.classList.add('active');
        btnLight.classList.remove('active');
    } else {
        btnLight.classList.add('active');
        btnDark.classList.remove('active');
    }
}

btnLight.addEventListener('click', () => setTheme('light'));
btnDark.addEventListener('click', () => setTheme('dark'));

// --- VIEW LOGIC (Grid vs List) ---
document.getElementById('btn-list').addEventListener('click', () => {
    document.body.classList.add('view-mode-list');
    document.getElementById('btn-list').innerText = "● LIST";
    document.getElementById('btn-grid').innerText = "○ GRID";
});
document.getElementById('btn-grid').addEventListener('click', () => {
    document.body.classList.remove('view-mode-list');
    document.getElementById('btn-list').innerText = "○ LIST";
    document.getElementById('btn-grid').innerText = "● GRID";
});

// Add a simple fade-in animation to CSS via JS
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(styleSheet);

// Initial Load
render('all');
