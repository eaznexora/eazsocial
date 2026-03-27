console.log("JS RUNNING");
document.addEventListener("DOMContentLoaded", () => {
    const revealText = document.querySelector('.reveal-text');

    const observerOptions = {
        threshold: 0.5 // Jab 50% section dikhega tab trigger hoga
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    if (revealText) {
        observer.observe(revealText);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.reveal-card');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    });

    cards.forEach(card => {
        observer.observe(card);

        // 🔥 IMPORTANT: agar already screen pe hai
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            card.classList.add('active');
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll('.reveal-step');

    const observerOptions = {
        threshold: 0.3 // Jab card 30% screen par aayega tab trigger hoga
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    steps.forEach(step => observer.observe(step));
});



document.addEventListener("DOMContentLoaded", () => {
    const journeySection = document.querySelector('.journey-section');
    const pillars = document.querySelectorAll('.reveal-pillar');

    const journeyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Pehle lines draw hongi
                entry.target.classList.add('reveal-active');
                
                // Phir cards staggered way mein aayenge
                pillars.forEach((pillar, index) => {
                    setTimeout(() => {
                        pillar.classList.add('active');
                    }, 600 + (index * 200)); // Lines draw hone ke baad start hoga
                });
            }
        });
    }, { threshold: 0.3 });

    if (journeySection) {
        journeyObserver.observe(journeySection);
    }
});