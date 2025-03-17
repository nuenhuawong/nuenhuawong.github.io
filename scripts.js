// JavaScript for Tennis Learning In Singapore website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize expandable sections as collapsed
    const sectionContents = document.querySelectorAll('.section-content');
    sectionContents.forEach(content => {
        content.style.display = 'none';
    });
    
    // Toggle expandable sections
    const expandableSections = document.querySelectorAll('.expandable-section h2');
    
    expandableSections.forEach(section => {
        // Add collapsed class by default
        section.classList.add('collapsed');
        
        section.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === 'none') {
                content.style.display = 'block';
                this.classList.remove('collapsed');
                this.classList.add('expanded');
            } else {
                content.style.display = 'none';
                this.classList.remove('expanded');
                this.classList.add('collapsed');
            }
        });
    });

    // Highlight active navigation link
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPage.includes(linkPath) || 
            (currentPage.endsWith('/') && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
