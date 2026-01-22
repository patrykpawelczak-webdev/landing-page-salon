// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== PROGRESS BAR (MOBILE) ==========
const progressBar = document.querySelector('.scroll-progress-bar');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
});

// ========== SLIDER OPINII (pauza przy hover, auto 8s) ==========
const track = document.querySelector('.review-track');
const slides = document.querySelectorAll('.review-card');
const dotsContainer = document.querySelector('.slider-dots');

// Sprawdź czy elementy istnieją
if (track && slides.length > 0 && dotsContainer) {
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoPlayInterval;

    // Tworzenie kropek
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentSlide = i;
            updateSlider();
            resetAutoPlay();
        });
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.slider-dots .dot');

    function updateSlider() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Aktualizacja kropek
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    // Auto-play co 8 sekund
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 8000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    // Pauza przy hover
    const slider = document.querySelector('.reviews-slider');
    if (slider) {
        slider.addEventListener('mouseenter', stopAutoPlay);
        slider.addEventListener('mouseleave', startAutoPlay);
    }

    // Start
    startAutoPlay();
}
function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-play co 5 sekund
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}, 5000);