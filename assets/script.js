/*========================================================
    Data model
========================================================*/

const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

// Index of the current slide
let currentSlide = 0;

/*========================================================
    Internal functions
========================================================*/

/**
* Display image and tag line according to
* the current index in the carousel 
*/
function displaySlide() {
    
    // Display image
    const image = document.querySelector("#banner .banner-img");
    image.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    
    // Display title
    const title = document.querySelector("#banner p");
    title.innerHTML = slides[currentSlide].tagLine;
}

/**
* Display the bullet of current image among the full
* list of carousel images designed with empty bullets
*/
function displayDots() {
    const dots = document.querySelector(".dots");

    // Reset HTML content of the dots <div>
    dots.innerHTML = '';
    
    for (let i = 0; i < slides.length; i++) {
        if (currentSlide === i)
            // Current image with full dot
            dots.innerHTML += '<div class="dot dot_selected"></div>';
        else
            // Carousel image with empty dot
            dots.innerHTML += '<div class="dot"></div>';
    }
}

/*========================================================
    Run at first launch
========================================================*/

/**
* Change carousel left and right arrows into previous
* and next buttons adding click event listeners 
*/
const previous_button = document.querySelector("#banner .arrow_left");
previous_button.addEventListener("click", () => {
    if (currentSlide > 0) currentSlide--;
    else currentSlide = slides.length - 1;
    displaySlide();
    displayDots();
})

const next_button = document.querySelector("#banner .arrow_right");
next_button.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) currentSlide++;
    else currentSlide = 0;
    displaySlide();
    displayDots();
})

// Add missing bullet points on pre-existing carousel image
displayDots();

