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

// ========== SLIDER OPINII ==========
let currentSlide = 0;
const track = document.querySelector('.review-track');
const slides = document.querySelectorAll('.review-card');
const totalSlides = slides.length;

document.querySelector('.slider-btn.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
});

document.querySelector('.slider-btn.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
});

function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-play co 5 sekund
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}, 5000);