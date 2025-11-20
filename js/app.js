// --- 1. CUSTOM CURSOR LOGIC ---
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Immediate movement for small dot
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Smooth delay for the circle follower
setInterval(() => {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    follower.style.left = posX + 'px';
    follower.style.top = posY + 'px';
}, 15);

// Hover effect on links
document.querySelectorAll('a').forEach(el => {
    el.addEventListener('mouseenter', () => follower.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => follower.classList.remove('cursor-hover'));
});

// --- 2. SCROLL ANIMATION (INTERSECTION OBSERVER) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));

// --- 3. WORDPRESS FETCH (HEADLESS) ---
// Replace this with your actual WordPress URL when ready
const WP_API = 'https://techcrunch.com/wp-json/wp/v2/posts?per_page=4&_embed'; 
const workList = document.getElementById('wp-work-list');

async function loadPortfolio() {
    try {
        const res = await fetch(WP_API);
        const posts = await res.json();
        
        workList.innerHTML = ''; // Clear loading text

        posts.forEach((post, index) => {
            const title = post.title.rendered;
            const link = post.link;
            // Format date to just Year for minimalism
            const year = new Date(post.date).getFullYear(); 

            const html = `
                <a href="${link}" target="_blank" class="work-item">
                    <div class="work-title">0${index + 1} / ${title}</div>
                    <div class="work-meta">Dev & Design — ${year}</div>
                </a>
            `;
            
            workList.insertAdjacentHTML('beforeend', html);
        });

        // Re-attach cursor hover events to new elements
        const newLinks = workList.querySelectorAll('a');
        newLinks.forEach(el => {
            el.addEventListener('mouseenter', () => follower.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => follower.classList.remove('cursor-hover'));
        });

        // Trigger animation for the list itself
        workList.classList.add('in-view');

    } catch (err) {
        console.error(err);
        workList.innerHTML = "Error loading works.";
    }
}

loadPortfolio();
