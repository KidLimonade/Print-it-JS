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

// index of the current slide
let current_slide = 0

/**
 * Display the index of current image among the full
 * list of carousel images designed with empty dots
 */
function display_dots() {
    const dots = document.querySelector(".dots")
    dots.innerHTML = ''
    for(i = 0; i < slides.length; i++) {
        if (current_slide === i) {

            // current image with full dot
            dots.innerHTML += '<div class="dot dot_selected"></div>'
        } else {

            // carousel image with empty dot
            dots.innerHTML += '<div class="dot"></div>'
        }
    }
}

/**
 * Display image and tag line according to
 * the current index of the carousel 
 */
function display_slide() {

    // Display image
    const image = document.querySelector("#banner .banner-img")
    image.src = `./assets/images/slideshow/${slides[current_slide].image}`

    // Display title
    const title = document.querySelector("#banner p")
    title.innerHTML = slides[current_slide].tagLine
}

/**
 * Update User Interface
 */
function update_UI() {
    display_dots()
    display_slide()
}

/**
 * Change carousel left and right arrows into previous
 * and next buttons adding click event listeners 
 */
const previous_button = document.querySelector("#banner .arrow_left")
previous_button.addEventListener("click", () => {
    console.log("Previous image")
    if (current_slide === 0) {
        current_slide = slides.length - 1
    } else {
        current_slide--
    }
    update_UI()
})

const next_button = document.querySelector("#banner .arrow_right")
next_button.addEventListener("click", () => {
    console.log("Next image")
    if (current_slide === slides.length - 1) {
        current_slide = 0
    } else {
        current_slide++
    }
    update_UI()
})

/**
 * Main
 */
update_UI()
