// script.js

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Initialize theme on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// Page Navigation
const sections = document.querySelectorAll('main section');
const nextButtons = document.querySelectorAll('.next-page');
const prevButtons = document.querySelectorAll('.prev-page');

nextButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        sections[index].classList.add('hidden');
        sections[index + 1].classList.remove('hidden');
        updateProgressBar();
    });
});

prevButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        sections[index + 1].classList.add('hidden');
        sections[index].classList.remove('hidden');
        updateProgressBar();
    });
});

// Reading Progress Bar
function updateProgressBar() {
    const currentSection = Array.from(sections).findIndex(section => !section.classList.contains('hidden'));
    const totalSections = sections.length;
    const progress = ((currentSection + 1) / totalSections) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

// Initialize Progress Bar
updateProgressBar();

// Dashboard and Books Navigation
document.querySelector('a[href="#dashboard"]').addEventListener('click', () => {
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById('introduction').classList.remove('hidden');
    updateProgressBar();
});

document.querySelector('a[href="#books"]').addEventListener('click', () => {
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById('chapter1').classList.remove('hidden');
    updateProgressBar();
});
