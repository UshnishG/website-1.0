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
let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0; // Separate index for the second slideshow

let slideIndexAbout = 0; // Index for the About Us slideshow
showSlidesAbout(); // Start the slideshow
showSlides1();
showSlides2();
showSlides3();


function showSlidesAbout() {
    let slides = document.getElementsByClassName("mySlides-about");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndexAbout++; // Increment index
    if (slideIndexAbout > slides.length) { slideIndexAbout = 1; } // Reset index if needed
    slides[slideIndexAbout - 1].style.display = "block"; // Show the current slide

    setTimeout(showSlidesAbout, 2000); // Change image every 2 seconds
}

// Function to display slides for the first slideshow
function showSlides1() {
    let slides = document.getElementsByClassName("mySlides1");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) { slideIndex1 = 1 } // Reset index
    slides[slideIndex1 - 1].style.display = "block"; // Display current slide
    setTimeout(showSlides1, 2000); // Change image every 2 seconds
}

// Function to display slides for the second slideshow
function showSlides2() {
    let slides = document.getElementsByClassName("mySlides2");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) { slideIndex2 = 1 } // Reset index
    slides[slideIndex2 - 1].style.display = "block"; // Display current slide
    setTimeout(showSlides2, 2000); // Change image every 2 seconds
}

function showSlides3() {
    let slides = document.getElementsByClassName("mySlides3");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex3++;
    if (slideIndex3 > slides.length) { slideIndex3 = 1 } // Reset index
    slides[slideIndex3- 1].style.display = "block"; // Display current slide
    setTimeout(showSlides3, 2000); // Change image every 2 seconds
}
