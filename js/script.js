// Tennis Learning in Singapore - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const hamburger = this.querySelector('.hamburger');
            
            if (navMenu.classList.contains('active')) {
                hamburger.style.backgroundColor = 'transparent';
                hamburger.classList.add('active');
            } else {
                hamburger.style.backgroundColor = 'var(--gray-700)';
                hamburger.classList.remove('active');
            }
        });
    }
    
    // Testimonial slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.querySelector('.prev-testimonial');
    const nextButton = document.querySelector('.next-testimonial');
    let currentSlide = 0;
    
    function showSlide(n) {
        // Hide all slides
        testimonialSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all indicators
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Show the current slide and activate the corresponding indicator
        testimonialSlides[n].classList.add('active');
        indicators[n].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= testimonialSlides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = testimonialSlides.length - 1;
        }
        showSlide(currentSlide);
    }
    
    // Add event listeners for testimonial controls
    if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
    }
    
    // Add event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-advance testimonials every 5 seconds
    if (testimonialSlides.length > 0) {
        setInterval(nextSlide, 5000);
    }
    
    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add animation to elements when they come into view
    const animateElements = document.querySelectorAll('.feature-card, .program-card, .location-card, .about-image, .booking-image');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
});
