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

/*========================================================

    Internal functions

========================================================*/

/**
* Display the bullet of current image among the full
* list of carousel images designed with empty bullets
*/
function showDots(index, nbDots) {
    const dots = document.querySelector("#banner .dots");
    
    // Reset HTML content of the dots <div>
    dots.innerHTML = '';
    
    for (let i = 0; i < nbDots; i++) {
        let classes = 'dot';
        if (index === i) classes += ' dot_selected';
        dots.innerHTML += `<div class="${classes}"></div>`;
    }
}

/**
* Display image and tag line according to the current
* index in the carousel. Then readjust bullet points.
*/
function showBanner(index, banners) {
    
    // Display image
    const bannerImage = document.querySelector("#banner .banner-img");
    bannerImage.src = `./assets/images/slideshow/${banners[index].image}`;
    
    // Display title
    const bannerTitle = document.querySelector("#banner p");
    bannerTitle.innerHTML = banners[index].tagLine;
    
    // Adjust bullet points
    showDots(index, banners.length);
}

/*========================================================

    Run at first launch

========================================================*/

// Index of the current slide
let currentSlide = 0;

/**
* Change carousel left and right arrows into previous
* and next buttons adding click event listeners 
*/
const previousBtn = document.querySelector("#banner .arrow_left");
previousBtn.addEventListener("click", () => {
    if (currentSlide > 0) currentSlide--;
    else currentSlide = slides.length - 1;
    showBanner(currentSlide, slides);
})

const nextBtn = document.querySelector("#banner .arrow_right");
nextBtn.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) currentSlide++;
    else currentSlide = 0;
    showBanner(currentSlide, slides);
})

// Add missing bullet points on pre-existing carousel image
showDots(currentSlide, slides.length);
