// --- Select all the key elements ---
const body = document.querySelector('body');
const navButtons = document.querySelectorAll('.main-nav button');
const closeBtn = document.querySelector('.close-btn');
const expandedContent = document.querySelector('.expanded-content');

// --- Functions ---

function openExpandedView(contentId) {
    // 1. Find the correct template
    const template = document.querySelector(`#${contentId}-content`);
    
    // 2. If a template doesn't exist, do nothing
    if (!template) {
        console.error(`Content template for "${contentId}" not found.`);
        return;
    }

    // 3. Clone its content and put it into our expanded view
    const content = template.content.cloneNode(true);
    expandedContent.innerHTML = ''; // Clear previous content
    expandedContent.appendChild(content);

    // 4. Add the magic class to the body to trigger the CSS animations
    body.classList.add('view-expanded');
}

function closeExpandedView() {
    // Remove the class from the body to reverse the animations
    body.classList.remove('view-expanded');
}

// --- Event Listeners ---

// Listen for clicks on ANY of the navigation buttons
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const contentId = button.dataset.content; // Get the ID from the data-content attribute
        openExpandedView(contentId);
    });
});

// Listen for a click on the close button
closeBtn.addEventListener('click', closeExpandedView);