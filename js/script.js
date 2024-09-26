// Toggle navigation on mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navbar = document.querySelector('.navbar'); // Select the navbar element

// Add click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    // Additional event: Change navbar background color on toggle
    if (navLinks.classList.contains('show')) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; // Darker background when open
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.85)'; // Original color when closed
    }
}); // Closing brace for the toggle function

// Scroll Progress Bar functionality
window.onscroll = function() { scrollProgress() };

function scrollProgress() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

// Slideshow functionality for first set of slides
let currentEvent = 1;
let currentSlide = 0;
const eventImages = {
    1: ['../imgs/i1.jpg', '../imgs/i2.jpg', '../imgs/i3.jpg'],
    2: ['../imgs/i5.jpg', '../imgs/i6.jpg'],
    3: ['../imgs/i7.jpg', '../imgs/i8.jpg']
};

// Open modal and display the first image
function openModal(eventId) {
    currentEvent = eventId;
    currentSlide = 0;
    displaySlides();
    const modal = document.getElementById("imageModal");
    modal.style.display = "block";

    // Close modal if clicked outside the image
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

// Close modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Change slides (left or right navigation)
function changeSlide(n) {
    currentSlide += n;
    if (currentSlide >= eventImages[currentEvent].length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = eventImages[currentEvent].length - 1;
    }
    displaySlides();
}

// Display the current slide
function displaySlides() {
    const container = document.getElementById("slides-container");
    container.innerHTML = `<img src="${eventImages[currentEvent][currentSlide]}" alt="Event Image" class="modal-img">`;
}
