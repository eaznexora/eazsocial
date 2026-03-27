document.addEventListener("DOMContentLoaded", () => {
    const bentoItems = document.querySelectorAll('.reveal-bento');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 150);
            }
        });
    }, { threshold: 0.2 });

    bentoItems.forEach(item => observer.observe(item));
});
