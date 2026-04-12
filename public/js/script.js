document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            
            // Hamburger Animation
            hamburger.children[0].style.transform = navLinks.classList.contains('nav-active') ? 'translateY(7px) rotate(45deg)' : 'none';
            hamburger.children[1].style.opacity = navLinks.classList.contains('nav-active') ? '0' : '1';
            hamburger.children[2].style.transform = navLinks.classList.contains('nav-active') ? 'translateY(-7px) rotate(-45deg)' : 'none';
        });
    }

    // Scroll Animation (Intersection Observer)
    const fadeSections = document.querySelectorAll('.fade-in-section');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeSections.forEach(section => {
        appearOnScroll.observe(section);
    });
});
