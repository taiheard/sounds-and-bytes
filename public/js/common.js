document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navOverlay = document.getElementById('navOverlay');
    
    if (hamburger && navOverlay) {
        const spans = hamburger.querySelectorAll('span');

        hamburger.addEventListener('click', () => {
            navOverlay.classList.toggle('active');
            const isActive = navOverlay.classList.contains('active');
            
            if (isActive) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking a link
        navOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navOverlay.classList.remove('active');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Intersection Observer for Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .animate-on-scroll, .fade-in, .animate, .project-card, .contact-section, .contact-form, .reveal, article').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(el);
    });

    // Helper to observe new dynamic elements
    window.observeNewElements = (selector) => {
        document.querySelectorAll(selector).forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            observer.observe(el);
        });
    };

    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.style.cursor = 'pointer';
        scrollIndicator.addEventListener('click', () => {
            const nextSection = document.querySelector('main, .main-grid, .blog-container, .main-container, .content-grid, .soundtracks-grid, .video-section, .intro-section');
            if (nextSection) {
                nextSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            } else {
                // Fallback: scroll down by viewport height
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                });
            }
        });
    }
});

