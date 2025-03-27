document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const intervalSelect = document.getElementById('interval-select');
    const currentSlideDisplay = document.getElementById('current-slide');
    const totalSlidesDisplay = document.getElementById('total-slides');
    
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);
    
    // Variables
    let currentIndex = 0;
    let totalSlides = slides.length;
    let intervalId = null;
    let isPlaying = false;
    let slideInterval = 0;
    
    // Initialize display
    totalSlidesDisplay.textContent = totalSlides;
    updateCurrentSlideDisplay();
    updateProgressBar();
    
    // Event listeners
    prevBtn.addEventListener('click', function() {
        if (isPlaying) toggleAutoPlay();
        goToPrevSlide();
    });
    nextBtn.addEventListener('click', function() {
        if (isPlaying) toggleAutoPlay();
        goToNextSlide();
    });
    playPauseBtn.addEventListener('click', toggleAutoPlay);
    intervalSelect.addEventListener('change', function() {
        if (isPlaying) {
            clearInterval(intervalId);
            slideInterval = parseInt(this.value, 10) * 1000;
            if (slideInterval > 0) {
                intervalId = setInterval(goToNextSlide, slideInterval);
            } else {
                isPlaying = false;
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        }
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            if (isPlaying) toggleAutoPlay();
            goToPrevSlide();
        } else if (e.key === 'ArrowRight') {
            if (isPlaying) toggleAutoPlay();
            goToNextSlide();
        } else if (e.key === ' ') {
            // Espace pour démarrer/arrêter le défilement
            toggleAutoPlay();
            e.preventDefault(); // Empêcher le défilement de la page
        }
    });
    
    // Add swipe navigation for touch devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const threshold = 50;
        if (touchEndX < touchStartX - threshold) {
            // Swipe gauche
            goToNextSlide();
        } else if (touchEndX > touchStartX + threshold) {
            // Swipe droite
            goToPrevSlide();
        }
    }
    
    // Functions
    function changeSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
            // Réinitialiser les animations en retirant et ajoutant les éléments du DOM
            const elements = slide.querySelectorAll('h2, p, ul, .slide-illustration, .debate-questions');
            elements.forEach(el => {
                el.style.opacity = ''; // Réinitialiser l'opacité
            });
        });
        
        // Add active class to current slide
        slides[index].classList.add('active');
        currentIndex = index;
        updateCurrentSlideDisplay();
        updateProgressBar();
        
        // Déclencher les animations séquentiellement
        const activeSlide = slides[index];
        setTimeout(() => {
            activeSlide.classList.add('animated');
        }, 50);
    }
    
    function goToNextSlide() {
        let nextIndex = (currentIndex + 1) % totalSlides;
        changeSlide(nextIndex);
    }
    
    function goToPrevSlide() {
        let prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        changeSlide(prevIndex);
    }
    
    function updateCurrentSlideDisplay() {
        currentSlideDisplay.textContent = currentIndex + 1;
    }
    
    function updateProgressBar() {
        const progress = ((currentIndex + 1) / totalSlides) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    function toggleAutoPlay() {
        if (isPlaying) {
            clearInterval(intervalId);
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            isPlaying = false;
        } else {
            slideInterval = parseInt(intervalSelect.value, 10) * 1000;
            if (slideInterval > 0) {
                intervalId = setInterval(goToNextSlide, slideInterval);
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                isPlaying = true;
            }
        }
    }
    
    // Responsive adjustments
    function adjustForScreenSize() {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            // Mobile-specific adjustments if needed
        } else {
            // Desktop-specific adjustments if needed
        }
    }
    
    // Call on load and resize
    adjustForScreenSize();
    window.addEventListener('resize', adjustForScreenSize);
    
    // Additional feature: Double-click to fullscreen
    document.querySelector('.presentation-container').addEventListener('dblclick', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });
    
    // Animation automatique au chargement de la page
    setTimeout(() => {
        slides[0].classList.add('animated');
    }, 500);
}); 