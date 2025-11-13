const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;
let slideInterval;

// Duplica le slide per creare un effetto infinito
function duplicateSlides() {
    slidesContainer.innerHTML += slidesContainer.innerHTML;
    slidesContainer.classList.add('duplicate');
}

// Avvia lo slideshow
function startSlideshow() {
    slideInterval = setInterval(nextSlide, 3000); // Cambia slide ogni 4 secondi
}

// Ferma lo slideshow
function stopSlideshow() {
    clearInterval(slideInterval);
}

// Avvia e gestisci lo slideshow infinito
function initSlideshow() {
    duplicateSlides();
    startSlideshow();
}

function nextSlide() {
    const slidesWidth = slidesContainer.offsetWidth / 2; // Dato che abbiamo duplicato, la larghezza è divisa per 2
    if (currentIndex >= totalSlides) {
        slidesContainer.style.transition = 'none'; // Disattiva la transizione per il reset
        slidesContainer.style.transform = `translateX(0)`; // Torna alla prima immagine
        currentIndex = 0; // Ripristina l'indice
        setTimeout(() => {
            slidesContainer.style.transition = 'transform 1s ease-in-out'; // Riattiva la transizione
            currentIndex++;
            slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 50);
    } else {
        currentIndex++;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

function prevSlide() {
    if (currentIndex <= 0) {
        slidesContainer.style.transition = 'none'; // Disattiva la transizione per il reset
        slidesContainer.style.transform = `translateX(-${totalSlides * 100}%)`; // Vai all'ultimo gruppo di immagini
        currentIndex = totalSlides - 1; // Ripristina l'indice
        setTimeout(() => {
            slidesContainer.style.transition = 'transform 1s ease-in-out'; // Riattiva la transizione
            slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 50);
    } else {
        currentIndex--;
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

function updateSlidePosition() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Eventi di navigazione con passive event listeners
const rightArrow = document.querySelector('.arrow.right');
const leftArrow = document.querySelector('.arrow.left');

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

// Gestione dello scorrimento automatico
rightArrow.addEventListener('mouseenter', stopSlideshow);
leftArrow.addEventListener('mouseenter', stopSlideshow);
rightArrow.addEventListener('mouseleave', startSlideshow);
leftArrow.addEventListener('mouseleave', startSlideshow);

// Inizializza lo slideshow
initSlideshow();


// Magic Island
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // or any other threshold value
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


//spostamento href header
// Get all anchor links with an href attribute
const anchorLinks = document.querySelectorAll('a[href*="#"]');

// Add an event listener to each anchor link
anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        // Get the target element (the section with the corresponding id)
        const target = document.querySelector(link.getAttribute('href'));
        
        if (target) {
            // Calculate the offset (in this case, the height of the header + 50px)
            const offset = document.querySelector('.header').offsetHeight + 50;

            // Scroll to the target element with the offset
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth',
            });

            // Prevent the default anchor link behavior
            event.preventDefault();
        }
    });
});

//menu hamburger
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}


// schermata di Caricamento
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    
    // Nascondi il caricamento dopo l'animazione
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 2500); // La durata deve corrispondere a quella dell'animazione (2.5s)
});


window.addEventListener('scroll', function() {
    const scrollContent = document.getElementById('scroll-content');
    const scrollPosition = window.scrollY;
    
    // Inizia a svanire dopo 100px di scroll
    if (scrollPosition > 100) {
        const opacity = Math.max(0, 1 - (scrollPosition - 100) / 200);
        scrollContent.style.opacity = opacity;
    } else {
        scrollContent.style.opacity = 1;
    }
});