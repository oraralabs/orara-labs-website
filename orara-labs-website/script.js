// --- Select all the key elements ---
const body = document.querySelector('body');
const navButtons = document.querySelectorAll('.main-nav button');
const closeBtn = document.querySelector('.close-btn');
const expandedContent = document.querySelector('.expanded-content');

// --- The async loadContent function ---
async function loadContent(contentId) {
    try {
        const response = await fetch(`content/${contentId}.html`);
        if (!response.ok) {
            throw new Error(`Content for "${contentId}" not found. Status: ${response.status}`);
        }
        const html = await response.text();
        expandedContent.innerHTML = html;
    } catch (error) {
        console.error("Error loading content:", error);
        expandedContent.innerHTML = `<p style="color: red; font-weight: bold;">Error: Could not load the requested content. Please check the file path and server status.</p>`;
    }
}

// --- Core Functions to Open/Close Views ---
function openExpandedView(contentId) {
    loadContent(contentId);
    body.classList.add('view-expanded');
}

function closeExpandedView() {
    body.classList.remove('view-expanded');
}

// --- Event Listeners ---
// Listen for clicks on the main navigation buttons
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const contentId = button.dataset.content;
        openExpandedView(contentId);
    });
});

// Listen for a click on the main close button
closeBtn.addEventListener('click', closeExpandedView);

// Use Event Delegation for clicks inside the dynamic content area
expandedContent.addEventListener('click', (event) => {
    // Check for "Read More" button click
    const readMoreBtn = event.target.closest('.btn-read-more');
    if (readMoreBtn) {
        event.preventDefault();
        const postId = readMoreBtn.dataset.post;
        loadContent(postId);
    }

    // Check for "Back" button click
    const backBtn = event.target.closest('.btn-back');
    if (backBtn) {
        event.preventDefault();
        loadContent('blog');
    }
});