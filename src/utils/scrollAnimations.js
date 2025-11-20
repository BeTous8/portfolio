export function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in-element, .fade-in-top, .fade-in-bottom').forEach(el => {
        observer.observe(el);
    });
}