document.addEventListener('DOMContentLoaded', () => {
    // Add subtle intersection observer for paragraph fade-ins
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const paragraphs = document.querySelectorAll('section p, section .highlight-box, section ul');
    paragraphs.forEach(p => {
        p.style.opacity = '0';
        p.style.transform = 'translateY(15px)';
        p.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(p);
    });

    // Dynamic background subtle shift
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const bg = document.querySelector('.background-overlay');
        if (bg) {
            bg.style.background = `radial-gradient(circle at ${15 + x * 5}% ${50 + y * 5}%, rgba(59, 130, 246, 0.15), transparent 25%),
                                   radial-gradient(circle at ${85 - x * 5}% ${30 - y * 5}%, rgba(239, 68, 68, 0.1), transparent 25%)`;
        }
    });
});
