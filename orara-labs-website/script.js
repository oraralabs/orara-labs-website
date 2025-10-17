// --- Selecting the HTML elements ---
const projectsModal = document.querySelector('#projects-modal');
const projectsBtn = document.querySelector('#projects-btn');
const aboutModal = document.querySelector('#about-modal');
const aboutBtn = document.querySelector('#about-btn');
const closeButtons = document.querySelectorAll('.close-btn');

// --- Functions to toggle modals ---

// This function opens the projects modal
function openProjectsModal() {
    projectsModal.classList.add('visible'); // Add the .visible class
}

// This function opens the about modal
function openAboutModal() {
    aboutModal.classList.add('visible'); // Add the .visible class
}

// This function closes ANY modal that is currently visible
function closeModal() {
    // Find the currently visible modal and remove its .visible class
    document.querySelector('.modal.visible').classList.remove('visible');
}

// --- Event Listeners ---
projectsBtn.addEventListener('click', openProjectsModal);
aboutBtn.addEventListener('click', openAboutModal);

// Add the close event to all close buttons
closeButtons.forEach(button => {
    button.addEventListener('click', closeModal);
});

// Optional: Also close the modal if the user clicks on the background overlay
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (event) => {
        // Only close if the clicked element is the modal background itself
        if (event.target === modal) {
            closeModal();
        }
    });
});