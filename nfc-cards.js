document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. MOBILE MENU TOGGLE LOGIC
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            hamburger.classList.toggle('toggle');
        });
    }

    // ==========================================
    // 2. SCROLL ANIMATION FOR CARDS
    // ==========================================
    const cards = document.querySelectorAll('.card-item');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Ek baar animate hone ke baad rok dega
            }
        });
    }, { 
        threshold: 0.15 // Jab card 15% dikhega tab animation start hoga
    });

    cards.forEach(card => {
        observer.observe(card);
    });

});