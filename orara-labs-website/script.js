// --- Select all the key elements ---
const body = document.querySelector('body');
const navButtons = document.querySelectorAll('.main-nav button');
const closeBtn = document.querySelector('.close-btn');
const expandedContent = document.querySelector('.expanded-content');

// --- Functions ---

// Main function to load content into the expanded view
function loadContent(contentId) {
    const template = document.querySelector(`#${contentId}-content`);
    if (!template) {
        console.error(`Content template for "${contentId}" not found.`);
        return;
    }
    const content = template.content.cloneNode(true);
    expandedContent.innerHTML = ''; // Clear previous content
    expandedContent.appendChild(content);
}

// Function to open the main expanded view (e.g., from the hero screen)
function openExpandedView(contentId) {
    loadContent(contentId);
    body.classList.add('view-expanded');
}

// Function to close the expanded view completely
function closeExpandedView() {
    body.classList.remove('view-expanded');
}


// --- Event Listeners ---

// Listen for clicks on the main navigation buttons (Projects, About, Blog)
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const contentId = button.dataset.content;
        openExpandedView(contentId);
    });
});

// Listen for a click on the main close button
closeBtn.addEventListener('click', closeExpandedView);


// ================================================= */
// NEW: Event Delegation for dynamic content         */
// This is the key to making the new buttons work    */
// ================================================= */

// We listen for ALL clicks inside the expanded content area
expandedContent.addEventListener('click', (event) => {
    
    // Check if the clicked item (or its parent) is a "Read More" button
    const readMoreBtn = event.target.closest('.btn-read-more');
    if (readMoreBtn) {
        event.preventDefault(); // Stop the link from trying to navigate
        const postId = 'nlp-surveillance-post'; // The ID of the full post template
        loadContent(postId); // Load the full post content
    }

    // Check if the clicked item is a "Back" button
    const backBtn = event.target.closest('.btn-back');
    if (backBtn) {
        event.preventDefault(); // Stop the link from navigating
        loadContent('blog'); // Reload the main blog summary view
    }
});