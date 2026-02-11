// Initialize AOS Animation Library
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
});

// Typing Effect using Typed.js
const typed = new Typed('.typing-text', {
    strings: ['Data Scientist', 'AI Researcher', 'Data Analyst', 'Statistician'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Theme Toggle (Simplified for this version - focuses purely on dark mode adjustments if we want light mode later)
// Currently forced dark mode for "Premium" feel, but toggle logic is preserved for future expansion
const themeToggle = document.getElementById('theme-toggle');
// We can expand this to switch CSS variables if light mode is desired, 
// for now it just toggles the icon to show functionality.
themeToggle.addEventListener('click', () => {
    const icon = themeToggle.querySelector('i');
    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        // Future: Implement light theme toggle here
        alert("Light mode is currently disabled for this premium dark-themed design.");
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Active Link Highlight on Scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active'); // You can add specific active styles in CSS if needed (.nav-link.active)
        }
    });
});
