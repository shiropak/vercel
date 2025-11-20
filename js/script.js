// CONFIGURATION: Change this to your actual WordPress URL later
// For now, we use a demo API so you can see it working immediately.
const WP_API_URL = 'https://techcrunch.com/wp-json/wp/v2/posts?per_page=3&_embed'; 

const projectsList = document.getElementById('projects-list');
const loadingSpinner = document.querySelector('.loading-spinner');

async function fetchProjects() {
    try {
        const response = await fetch(WP_API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');
        
        const posts = await response.json();
        
        // Clear loading spinner
        loadingSpinner.style.display = 'none';

        // Loop through posts and create HTML
        posts.forEach(post => {
            // Get the featured image (if available)
            const title = post.title.rendered;
            const link = post.link;
            const date = new Date(post.date).toLocaleDateString();

            const projectHTML = `
                <a href="${link}" target="_blank" class="project-item">
                    <span class="project-title">${title}</span>
                    <span class="project-date">${date}</span>
                </a>
            `;
            
            projectsList.insertAdjacentHTML('beforeend', projectHTML);
        });

    } catch (error) {
        console.error('Error:', error);
        loadingSpinner.innerHTML = 'Failed to load projects. <br> (Check your API URL)';
    }
}

// Run the function when page loads
document.addEventListener('DOMContentLoaded', fetchProjects);
