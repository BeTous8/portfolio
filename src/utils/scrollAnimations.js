export function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });

    // Observe all elements with fade-in-element class
    document.querySelectorAll('.fade-in-element').forEach(el => {
        observer.observe(el);
    });
}