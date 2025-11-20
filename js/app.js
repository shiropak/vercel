// --- CONFIGURATION ---
// API Note: '_embed' is REQUIRED to get the featured image
const WP_API_ROOT = 'https://techcrunch.com/wp-json/wp/v2'; 

// --- 1. NAVIGATION SYSTEM ---
function switchPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Show selected page
    document.getElementById(pageId).classList.add('active');
}

// --- 2. MOUSE FOLLOWER & HOVER REVEAL ---
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const revealImg = document.getElementById('hover-image');

let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Move small cursor instantly
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';

    // Move Reveal Image with cursor
    revealImg.style.left = mouseX + 'px';
    revealImg.style.top = mouseY + 'px';
});

// Smooth follower delay
setInterval(() => {
    const currentX = parseFloat(follower.style.left || 0);
    const currentY = parseFloat(follower.style.top || 0);
    
    follower.style.left = currentX + (mouseX - currentX) * 0.1 + 'px';
    follower.style.top = currentY + (mouseY - currentY) * 0.1 + 'px';
}, 10);


// --- 3. DATA FETCHING (WORKS & BLOG) ---

async function fetchData(type, containerId) {
    const container = document.getElementById(containerId);
    // Fetch posts with embedded media (images)
    const url = `${WP_API_ROOT}/${type}?per_page=5&_embed`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        container.innerHTML = ''; // Clear loading text

        data.forEach(item => {
            // Safely try to get the image URL
            let imgUrl = '';
            if (item._embedded && item._embedded['wp:featuredmedia']) {
                imgUrl = item._embedded['wp:featuredmedia'][0].source_url;
            }

            const date = new Date(item.date).getFullYear();

            // Create HTML
            const el = document.createElement('a');
            el.className = 'list-item';
            el.href = item.link;
            el.target = '_blank';
            el.innerHTML = `
                <div class="item-title">${item.title.rendered}</div>
                <div class="item-meta">${type === 'posts' ? 'Article' : 'Project'} — ${date}</div>
            `;

            // ADD HOVER EFFECT
            // When entering this item, set the reveal image source and show it
            el.addEventListener('mouseenter', () => {
                if (imgUrl) {
                    revealImg.style.backgroundImage = `url(${imgUrl})`;
                    revealImg.classList.add('active');
                    follower.style.opacity = '0'; // Hide circle when image shows
                }
            });

            // When leaving, hide the image
            el.addEventListener('mouseleave', () => {
                revealImg.classList.remove('active');
                follower.style.opacity = '1';
            });

            container.appendChild(el);
        });

    } catch (error) {
        container.innerHTML = 'Error loading content.';
        console.error(error);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // "posts" is standard for Blog, usually you make a custom type for "projects"
    // For this demo we fetch "posts" for both, but you can change one to "projects"
    fetchData('posts', 'project-list'); 
    fetchData('posts', 'blog-list');
});
