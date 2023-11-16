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

display_dots()

/**
 * Change carousel left and right arrows into previous
 * and next buttons adding click event listeners 
 */
const previous_button = document.querySelector("#banner .arrow_left")
previous_button.addEventListener("click", () => {
    console.log("Previous image")
})
const next_button = document.querySelector("#banner .arrow_right")
next_button.addEventListener("click", () => {
    console.log("Next image")
})

/**
 * Display the index of current image among the full
 * list of carousel images designed with empty dots
 */
function display_dots() {
    const dots = document.querySelector(".dots")
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
