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
