// DATA
const portfolioItems = [
    { 
        id: "joe-coffee", 
        title: "JOE COFFEE", 
        client: "JOE COFFEE NY",
        tags: "[INTERIOR]", 
        date: "04.2025", 
        desc: "A modern take on a classic coffee house experience, blending minimalist design with warm, inviting textures.", 
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop"
        ]
    },
    { 
        id: "atlas-mobility", 
        title: "ATLAS MOBILITY", 
        client: "ATLAS CORP",
        tags: "[TECH]", 
        date: "06.2025", 
        desc: "Designing intuitive interfaces for next-generation urban transport systems.", 
        img: "https://images.unsplash.com/photo-1517420704952-d9f3971d7894?q=80&w=800&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1556942657-313d11b32ee7?q=80&w=1200&auto=format&fit=crop"
        ]
    },
    // ... Add your other items here ...
];

// --- ROUTER ---
if (window.location.pathname.includes('project.html')) {
    loadProjectDetail();
} else {
    // Safe check: Only run render if the container exists
    if (document.getElementById('works-container')) render('all');
}

// --- HOME RENDER ---
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

        // List Hover
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

// --- FILTER LOGIC ---
const filterOptions = document.querySelectorAll('#filter-row .control-option');
if (filterOptions) {
    filterOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            filterOptions.forEach(btn => {
                btn.classList.remove('active');
                btn.innerText = btn.innerText.replace('●', '○'); 
            });
            opt.classList.add('active');
            opt.innerText = opt.innerText.replace('○', '●');
            render(opt.getAttribute('data-filter'));
        });
    });
}

// --- PROJECT DETAIL ---
function loadProjectDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const project = portfolioItems.find(p => p.id === id);
    
    if (!project) return;

    // Use optional chaining or checks to avoid errors if elements missing
    const elTitle = document.getElementById('p-project');
    if(elTitle) elTitle.innerText = project.title;
    
    const elClient = document.getElementById('p-client');
    if(elClient) elClient.innerText = project.client || "PRIVATE";

    const elTags = document.getElementById('p-cat');
    if(elTags) elTags.innerText = project.tags;
    
    const elDate = document.getElementById('p-year');
    if(elDate) elDate.innerText = project.date;
    
    const elDesc = document.getElementById('p-desc');
    if(elDesc) elDesc.innerText = project.desc;

    const galleryContainer = document.getElementById('p-gallery');
    if (galleryContainer) {
        if (project.gallery && project.gallery.length > 0) {
            project.gallery.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                galleryContainer.appendChild(img);
            });
        } else {
            const img = document.createElement('img');
            img.src = project.img;
            galleryContainer.appendChild(img);
        }
    }
}

// --- THEME & CLOCK ---
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

// Initial Theme Load
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

if(btnLight) {
    btnLight.addEventListener('click', () => {
        setTheme('light');
        localStorage.setItem('theme', 'light');
    });
}
if(btnDark) {
    btnDark.addEventListener('click', () => {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    });
}

const btnList = document.getElementById('btn-list');
const btnGrid = document.getElementById('btn-grid');

if(btnList) {
    btnList.addEventListener('click', () => {
        document.body.classList.add('view-mode-list');
        btnList.innerText = "● LIST";
        btnGrid.innerText = "○ GRID";
    });
}
if(btnGrid) {
    btnGrid.addEventListener('click', () => {
        document.body.classList.remove('view-mode-list');
        btnList.innerText = "○ LIST";
        btnGrid.innerText = "● GRID";
    });
}

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12; hours = hours ? hours : 12; 
    
    const clockEl = document.getElementById('live-clock');
    if(clockEl) clockEl.innerText = `ZÜRICH, CH ${hours}:${minutes} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();

const styleSheet = document.createElement("style");
styleSheet.innerText = `@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`;
document.head.appendChild(styleSheet);
