// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll detection for sticky header effect ---
    const bodyEl = document.body;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            bodyEl.classList.add('scrolled');
        } else {
            bodyEl.classList.remove('scrolled');
        }
    });

    // --- Mobile Nav Toggle ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            bodyEl.classList.toggle('nav-open');
            const isExpanded = bodyEl.classList.contains('nav-open');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // --- Close mobile nav when a link is clicked ---
    const allNavLinks = document.querySelectorAll('.main-nav a');
    
    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (bodyEl.classList.contains('nav-open')) {
                bodyEl.classList.remove('nav-open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

});