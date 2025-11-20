// DATA: 20 Unique Works
const portfolioItems = [
    { 
        id: "joe-coffee", title: "JOE COFFEE", client: "JOE COFFEE NY", tags: "[INTERIOR]", date: "04.2025", 
        desc: "A modern take on a classic coffee house experience, blending minimalist design with warm, inviting textures.", 
        img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
        gallery: ["https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop"]
    },
    { 
        id: "atlas-mobility", title: "ATLAS MOBILITY", client: "ATLAS CORP", tags: "[TECH]", date: "06.2025", 
        desc: "Designing intuitive interfaces for next-generation urban transport systems.", 
        img: "https://images.unsplash.com/photo-1517420704952-d9f3971d7894?q=80&w=800&auto=format&fit=crop",
        gallery: ["https://images.unsplash.com/photo-1556942657-313d11b32ee7?q=80&w=1200&auto=format&fit=crop"]
    },
    { 
        id: "lumina-health", title: "LUMINA HEALTH", client: "LUMINA INC", tags: "[GRAPHIC]", date: "08.2024", 
        desc: "Visual identity and branding for a health tech startup, focused on creating trust and clarity.", 
        img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "nestwell", title: "NESTWELL", client: "NESTWELL HOME", tags: "[ART]", date: "02.2024", 
        desc: "An art direction project exploring the emotional connection to home through conceptual photography.", 
        img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "alba-ceramics", title: "ALBA CERAMICS", client: "ALBA STUDIO", tags: "[CRAFT]", date: "09.2023", 
        desc: "Branding and product photography for a bespoke ceramic studio, emphasizing artisanal process.", 
        img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "waypoint", title: "WAYPOINT TRAVEL", client: "WAYPOINT APP", tags: "[UX/UI]", date: "04.2023", 
        desc: "UX/UI design for a premium travel planning platform, focusing on intuitive navigation.", 
        img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "harbor-co", title: "HARBOR CO", client: "HARBOR SEAFOOD", tags: "[GRAPHIC]", date: "02.2023", 
        desc: "Rebranding and packaging design for an artisanal seafood company.", 
        img: "https://images.unsplash.com/photo-1529690086133-c8e4bc9e1f6a?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "nova-biotech", title: "NOVA BIOTECH", client: "NOVA LABS", tags: "[SCIENCE]", date: "05.2022", 
        desc: "Creating visual identities for scientific innovation and cutting-edge research.", 
        img: "https://images.unsplash.com/photo-1581093458891-8f30869852bb?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "stratos-aero", title: "STRATOS AERO", client: "STRATOS", tags: "[TECH]", date: "11.2021", 
        desc: "Aerospace engineering visualization and brand identity for a private spaceflight company.", 
        img: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "form-void", title: "FORM & VOID", client: "ARCH DIGEST", tags: "[INTERIOR]", date: "09.2021", 
        desc: "Minimalist interior design showcase focusing on negative space and light.", 
        img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "echo-sound", title: "ECHO SOUND", client: "ECHO AUDIO", tags: "[PRODUCT]", date: "07.2021", 
        desc: "Product design and packaging for high-fidelity noise cancelling headphones.", 
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "prism-arch", title: "PRISM ARCH", client: "CITY PLANNING", tags: "[ARCHITECTURE]", date: "05.2021", 
        desc: "Conceptual architectural rendering for a sustainable community center.", 
        img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "kinetic-type", title: "KINETIC TYPE", client: "TYPE FOUNDRY", tags: "[GRAPHIC]", date: "03.2021", 
        desc: "Motion graphics exploration of typography in digital spaces.", 
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "bloom-botanics", title: "BLOOM BOTANICS", client: "BLOOM SKINCARE", tags: "[BRANDING]", date: "01.2021", 
        desc: "Organic skincare packaging design inspired by rare flora.", 
        img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "urban-pulse", title: "URBAN PULSE", client: "NY MAGAZINE", tags: "[PHOTOGRAPHY]", date: "11.2020", 
        desc: "Street photography series capturing the rhythm of post-pandemic city life.", 
        img: "https://images.unsplash.com/photo-1449824913929-2b3a3e380d7b?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "cipher-security", title: "CIPHER SEC", client: "CIPHER", tags: "[WEB]", date: "09.2020", 
        desc: "Cybersecurity dashboard UI with a focus on data visualization and threat detection.", 
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "aether-scent", title: "AETHER SCENT", client: "LUXE PARFUM", tags: "[PACKAGING]", date: "07.2020", 
        desc: "Glass bottle design and outer packaging for a limited edition fragrance.", 
        img: "https://images.unsplash.com/photo-1594035910387-fea477942654?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "terra-firma", title: "TERRA FIRMA", client: "NATIONAL PARKS", tags: "[LANDSCAPE]", date: "05.2020", 
        desc: "Wayfinding system and signage for a desert conservation area.", 
        img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "quantum-fi", title: "QUANTUM FI", client: "Q-BANK", tags: "[UI/UX]", date: "03.2020", 
        desc: "Mobile banking app interface design focused on millennial investment habits.", 
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        gallery: []
    },
    { 
        id: "zenith-fit", title: "ZENITH FIT", client: "ZENITH", tags: "[APP]", date: "01.2020", 
        desc: "Holistic wellness app combining fitness tracking with meditation guides.", 
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
        gallery: []
    }
];

// STATE
let itemsDisplayed = 8; // Start with 8
let currentFilter = 'all';
let isLoading = false; // Loading state

// --- ROUTER ---
if (window.location.pathname.includes('project.html')) {
    loadProjectDetail();
} else {
    // Only run home logic if container exists
    const container = document.getElementById('works-container');
    if (container) {
        render(currentFilter);
        setupScrollListener();
    }
}

// --- SCROLL LISTENER ---
function setupScrollListener() {
    window.addEventListener('scroll', () => {
        if (isLoading) return; // Prevent multiple triggers

        // Check if user is near bottom of page
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300) {
            // Check if more items to load
            if (itemsDisplayed < getFilteredItems().length) {
                loadMoreItems();
            }
        }
    });
}

function loadMoreItems() {
    isLoading = true;
    const loadingIndicator = document.getElementById('loading-indicator');
    if(loadingIndicator) loadingIndicator.classList.add('visible');

    // Simulate network request (delay)
    setTimeout(() => {
        itemsDisplayed += 4; // Load 4 more
        render(currentFilter, true); // Append
        
        if(loadingIndicator) loadingIndicator.classList.remove('visible');
        isLoading = false;
    }, 800); // 800ms delay
}

function getFilteredItems() {
    return currentFilter === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.tags.toLowerCase().includes(currentFilter));
}

// --- HOME RENDER ---
function render(filter = 'all', append = false) {
    const container = document.getElementById('works-container');
    const preview = document.getElementById('hover-preview');
    if (!container) return;

    currentFilter = filter;
    
    if (!append) {
        container.innerHTML = '';
        // Only reset itemsDisplayed if filtering, not if we are just appending
        // But if we filter, we should reset to 8
        if(itemsDisplayed > 8 && !append) itemsDisplayed = 8; 
    }

    const allFiltered = getFilteredItems();
    const itemsToShow = allFiltered.slice(0, itemsDisplayed);

    // Clear if not appending to avoid duplicates in this simple implementation
    if(!append) container.innerHTML = ''; 

    // If appending, we only want to render the NEW items.
    // But keeping it simple: if not appending, render all itemsToShow.
    // If appending, we render only the slice from (itemsDisplayed - 4) to itemsDisplayed.
    
    let itemsToRender = itemsToShow;
    if (append) {
        // Only render the newly added items
        const previousCount = itemsDisplayed - 4;
        itemsToRender = allFiltered.slice(previousCount, itemsDisplayed);
    }

    if (itemsToRender.length === 0 && !append) {
        container.innerHTML = '<div style="grid-column: span 4; opacity: 0.5;">NO PROJECTS FOUND.</div>';
        return;
    }

    itemsToRender.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'work-item';
        
        // Only animate if it's a new load or filter change
        el.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        el.style.opacity = '0';

        // Calculate correct global index for display
        // If appending, we need to know the offset
        let displayIndex = index + 1;
        if (append) {
             displayIndex = (itemsDisplayed - 4) + index + 1;
        } else {
             displayIndex = index + 1;
        }

        el.innerHTML = `
            <a href="project.html?id=${item.id}" class="work-link">
                <div class="work-image">
                    <img src="${item.img}" alt="${item.title}" loading="lazy">
                    <div class="image-overlay">
                        <div class="circular-border"></div>
                        <span class="see-more-btn">SEE MORE &rarr;</span>
                    </div>
                </div>
                <div class="work-info">
                    <div class="work-title">${displayIndex} <br> ${item.title}</div>
                    <div class="work-meta">${item.desc.substring(0, 30)}... <br> ${item.tags}</div>
                    <div class="work-date">${item.date}</div>
                </div>
            </a>
        `;

        // List Hover Events
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
            
            // Reset display count when filtering
            itemsDisplayed = 8;
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
        galleryContainer.innerHTML = '';
        if (project.gallery && project.gallery.length > 0) {
            project.gallery.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.loading = "lazy";
                galleryContainer.appendChild(img);
            });
        } else {
            const img = document.createElement('img');
            img.src = project.img;
            img.loading = "lazy";
            galleryContainer.appendChild(img);
        }
    }
}

// --- THEME & CLOCK & VIEW ---
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

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

if(btnLight) btnLight.addEventListener('click', () => {
    setTheme('light');
    localStorage.setItem('theme', 'light');
});
if(btnDark) btnDark.addEventListener('click', () => {
    setTheme('dark');
    localStorage.setItem('theme', 'dark');
});

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
