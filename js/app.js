// Config
const WP_API = 'https://techcrunch.com/wp-json/wp/v2/posts?per_page=8&_embed'; 
const container = document.getElementById('works-container');
const preview = document.getElementById('hover-preview');

// State
let isListView = false;

// 1. Fetch Data
async function loadWorks() {
    try {
        const res = await fetch(WP_API);
        const posts = await res.json();
        container.innerHTML = ''; 

        posts.forEach((post, index) => {
            // Extract Data
            const title = post.title.rendered;
            // Mocking categories for the "Tech Look"
            const categories = ['[GRAPHIC]', '[INTERIOR]', '[ART]'].sort(() => 0.5 - Math.random()).slice(0, 2).join(' ');
            const date = '04.2025'; // Mock date like screenshot
            
            let imgUrl = '';
            if (post._embedded && post._embedded['wp:featuredmedia']) {
                imgUrl = post._embedded['wp:featuredmedia'][0].source_url;
            }

            // Build HTML
            const el = document.createElement('div');
            el.className = 'work-item';
            // We store image URL in dataset for the hover effect
            el.dataset.img = imgUrl;

            el.innerHTML = `
                <div class="work-image">
                    <img src="${imgUrl}" loading="lazy">
                </div>
                <div class="work-info">
                    <div class="work-title">${title}</div>
                    <div class="work-desc">BREWED TO PERFECTION</div>
                    <div class="meta-row">
                        <span class="work-cats">${categories}</span>
                        <span class="work-date">${date}</span>
                    </div>
                </div>
            `;
            
            // Event Listeners for Hover Preview (List Mode Only)
            el.addEventListener('mouseenter', () => {
                if (isListView && imgUrl) {
                    preview.style.backgroundImage = `url(${imgUrl})`;
                    preview.classList.add('active');
                }
            });
            
            el.addEventListener('mouseleave', () => {
                preview.classList.remove('active');
            });

            // Follow Mouse Logic
            el.addEventListener('mousemove', (e) => {
                if (isListView) {
                    // Offset slightly from cursor
                    preview.style.left = e.clientX + 20 + 'px';
                    preview.style.top = e.clientY + 'px';
                    // Remove the centering transform from CSS so it follows mouse precisely
                    preview.style.transform = 'translate(0, -50%)';
                }
            });

            container.appendChild(el);
        });

    } catch (err) {
        console.error(err);
    }
}

// 2. View Toggles (Grid vs List)
const gridBtn = document.getElementById('view-grid');
const listBtn = document.getElementById('view-list');
const mainContainer = document.querySelector('main');

gridBtn.addEventListener('change', () => {
    mainContainer.classList.remove('view-list');
    isListView = false;
});

listBtn.addEventListener('change', () => {
    mainContainer.classList.add('view-list');
    isListView = true;
});

// 3. Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', next);
    themeBtn.textContent = next === 'dark' ? 'LIGHT' : 'DARK';
});

// 4. Clock
setInterval(() => {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}, 1000);

// Init
loadWorks();
