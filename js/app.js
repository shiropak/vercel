// Configuration
const WP_API = 'https://techcrunch.com/wp-json/wp/v2/posts?per_page=6&_embed'; 
const gridContainer = document.getElementById('project-grid');
const timeDisplay = document.getElementById('time-display');

// 1. Fetch and Build Grid
async function loadGrid() {
    try {
        const res = await fetch(WP_API);
        const posts = await res.json();
        
        gridContainer.innerHTML = ''; // Clear loading

        posts.forEach((post, index) => {
            // Get Data
            const title = post.title.rendered;
            const link = post.link;
            const date = new Date(post.date).getFullYear();
            
            // Try to find an image, fallback if none
            let imgUrl = 'https://via.placeholder.com/600x800/222/fff?text=No+Image';
            if (post._embedded && post._embedded['wp:featuredmedia']) {
                imgUrl = post._embedded['wp:featuredmedia'][0].source_url;
            }

            // Create the HTML Card
            const card = document.createElement('a');
            card.href = link;
            card.target = "_blank";
            card.className = 'project-card';
            card.innerHTML = `
                <div class="card-image">
                    <img src="${imgUrl}" alt="${title}">
                </div>
                <div class="card-meta">
                    <div>
                        <div class="card-title">${title}</div>
                        <div class="card-category">Design / Concept</div>
                    </div>
                    <div class="card-date">${date}</div>
                </div>
            `;
            
            gridContainer.appendChild(card);
        });

    } catch (error) {
        gridContainer.innerHTML = '<p>Error loading projects.</p>';
        console.error(error);
    }
}

// 2. Time Display (Like Metzger Footer)
function updateTime() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// 3. Simple Filter Logic (Visual only for demo)
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Add to clicked
        this.classList.add('active');
        
        // Optional: You can add logic here to hide/show cards based on tags later
    });
});

// Init
loadGrid();
setInterval(updateTime, 1000);
updateTime();
