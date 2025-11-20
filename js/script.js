// DATA - Now with Gallery Images and Client Info
const portfolioItems = [
    { 
        id: "joe-coffee", 
        title: "JOE COFFEE", 
        client: "JOE COFFEE NY",
        tags: "[INTERIOR]", 
        date: "04.2025", 
        desc: "A modern take on a classic coffee house experience, blending minimalist design with warm, inviting textures. We positioned Joe Coffee as a sanctuary in the city.", 
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
        ]
    },
    { 
        id: "atlas-mobility", 
        title: "ATLAS MOBILITY", 
        client: "ATLAS CORP",
        tags: "[TECH]", 
        date: "06.2025", 
        desc: "Designing intuitive interfaces for next-generation urban transport systems. Focus on user-centric design for public and personal mobility solutions.", 
        img: "https://images.unsplash.com/photo-1517420704952-d9f3971d7894?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1556942657-313d11b32ee7?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1496442226666-8d4a0e29e128?q=80&w=1200&auto=format&fit=crop"
        ]
    },
    { 
        id: "alba-ceramics", 
        title: "ALBA CERAMICS", 
        client: "ALBA STUDIO",
        tags: "[CRAFT]", 
        date: "09.2023", 
        desc: "We positioned Alba Ceramics as a bridge between tradition and modernity, crafting a brand identity and web experience that honors their artistry.", 
        img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1200&auto=format&fit=crop"
        ]
    },
    // ... You can add galleries to the other items similarly
    { id: "lumina-health", title: "LUMINA HEALTH", client: "LUMINA INC", tags: "[GRAPHIC]", date: "08.2024", desc: "Clarity in care.", img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop", gallery: [] },
    { id: "nestwell", title: "NESTWELL", client: "NESTWELL HOME", tags: "[ART]", date: "02.2024", desc: "Home & comfort.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop", gallery: [] },
    { id: "waypoint", title: "WAYPOINT", client: "WAYPOINT APP", tags: "[UX/UI]", date: "04.2023", desc: "Seamless journeys.", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop", gallery: [] },
    { id: "harbor-co", title: "HARBOR CO", client: "HARBOR SEAFOOD", tags: "[GRAPHIC]", date: "02.2023", desc: "Modern tradition.", img: "https://images.unsplash.com/photo-1529690086133-c8e4bc9e1f6a?q=80&w=800&auto=format&fit=crop", gallery: [] },
    { id: "nova-biotech", title: "NOVA BIOTECH", client: "NOVA LABS", tags: "[SCIENCE]", date: "05.2022", desc: "Future wellness.", img: "https://images.unsplash.com/photo-1581093458891-8f30869852bb?q=80&w=800&auto=format&fit=crop", gallery: [] }
];

// --- DETECT PAGE ---
// If we are on the Project Page, run the Project Logic.
if (window.location.pathname.includes('project.html') || window.location.pathname.includes('details001.html')) {
    loadProjectDetail();
} else {
    // Otherwise we are on Home Page
    const container = document.getElementById('works-container');
    if (container) render('all');
}

// --- HOME PAGE RENDER ---
function render(filter = 'all') {
    const container = document.getElementById('works-container');
    const preview = document.getElementById('hover-preview');
    if (!container) return;

    container.innerHTML = '';
    const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.tags.toLowerCase().includes(filter));

    filteredItems.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'work-item';
        el.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        el.style.opacity = '0';

        // Link to the template page with ?id=ID
        el.innerHTML = `
            <a href="project.html?id=${item.id}" class="work-link">
                <div class="work-image">
                    <img src="${item.img}" alt="${item.title}">
                    <div class="image-overlay">
                        <div class="circular-border"></div>
                        <span class="see-more-btn">SEE MORE &rarr;</span>
                    </div>
                </div>
                <div class="work-info">
                    <div class="work-title">${index + 1} <br> ${item.title}</div>
                    <div class="work-meta">${item.desc.substring(0, 30)}... <br> ${item.tags}</div>
                    <div class="work-date">${item.date}</div>
                </div>
            </a>
        `;

        // List Mode Hover
        el.addEventListener('mouseenter', () => {
            if (document.body.classList.contains('view-mode-list')) {
                preview.style.backgroundImage = `url(${item.img})`;
                preview.classList.add('active');
            }
        });
        el.addEventListener('mouseleave', () => preview.classList.remove('active'));
        el.addEventListener('mousemove', (e) => {
            if (document.body.classList.contains('view-mode-list')) {
                preview.style.left = (e.clientX + 20) + 'px';
                preview.style.top = e.clientY + 'px';
            }
        });
        container.appendChild(el);
    });
}

// --- PROJECT DETAIL PAGE LOGIC ---
function loadProjectDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    
    // Find project data
    const project = portfolioItems.find(p => p.id === id);
    
    if (!project) return;

    // Fill Info
    document.getElementById('p-project').innerText = project.title;
    document.getElementById('p-client').innerText = project.client;
    document.getElementById('p-cat').innerText = project.tags;
    document.getElementById('p-year').innerText = project.date;
    document.getElementById('p-desc').innerText = project.desc;

    // Fill Gallery
    const galleryContainer = document.getElementById('p-gallery');
    if (project.gallery.length > 0) {
        project.gallery.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            galleryContainer.appendChild(img);
        });
    } else {
        // Fallback if no gallery images defined
        const img = document.createElement('img');
        img.src = project.img;
        galleryContainer.appendChild(img);
    }
}

// --- SHARED LOGIC (Filters, Theme, Clock) ---
// (Keep your existing filter/theme/clock logic here if you want it on both pages)
// For brevity, ensure the theme switcher logic runs on both pages.
const btnLight = document.getElementById('theme-light');
const btnDark = document.getElementById('theme-dark');
const html = document.documentElement;

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (theme === 'dark') {
        if(btnDark) btnDark.classList.add('active');
        if(btnLight) btnLight.classList.remove('active');
    } else {
        if(btnLight) btnLight.classList.add('active');
        if(btnDark) btnDark.classList.remove('active');
    }
}
if(btnLight) btnLight.addEventListener('click', () => setTheme('light'));
if(btnDark) btnDark.addEventListener('click', () => setTheme('dark'));

// Styles for animation
const styleSheet = document.createElement("style");
styleSheet.innerText = `@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`;
document.head.appendChild(styleSheet);
