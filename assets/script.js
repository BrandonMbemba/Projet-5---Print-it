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



const leftArrow = document.querySelector("#banner .arrow_left");
console.log(leftArrow)
const rightArrow = document.querySelector("#banner .arrow_right");
console.log(rightArrow)
const dots = document.querySelector (".dots");
console.log(dots)
const bannerimage = document.querySelector(".banner-img");
console.log(bannerimage)

console.log(slides[1])


// Fonction pour le changement de slide
let indexImage = 0 

// 3 lignes de code seulement sont nécessaires

console.log("tableau",slides)
rightArrow.addEventListener("click", function changeBulletPointsRight(dots) {
    console.log ("je rentre dans ma function",indexImage)
 

    if (indexImage < (slides.length - 1)){
        indexImage++
        console.log("je rentre dans le if",indexImage) 
    } else {
        indexImage = 0
        console.log("else",indexImage)
    }

    const image = slides[indexImage]
  
    console.log(indexImage)
    bannerimage.setAttribute("src",`./assets/images/slideshow/${image.image}`)

    const tagLine = slides[indexImage].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    console.log('==tag', image.tagLine)
    setActiveDot(indexImage)
})

leftArrow.addEventListener("click", function changeBulletPointsLeft(dots) {
    if (indexImage == 0) {
        indexImage = slides.length - 1
    } else {
        indexImage--
    }
    const image = slides[indexImage]

    bannerimage.setAttribute("src",`./assets/images/slideshow/${image.image}`)

    const tagLine = slides[indexImage].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    console.log('==tag', image.tagLine)
    setActiveDot(indexImage)
})


// Fonction pour la création des points 

let dotsHTML = `
    <div class="dot dot_selected"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
`
dots.innerHTML = dotsHTML

const listDots = document.querySelectorAll(".dot")
console.log(listDots)

function setActiveDot() {
  for (let index = 0; index < listDots.length; index++) {
    const dot = listDots[index];
    if (index == indexImage) {
        dot.classList.add('dot_selected');
    } else {
        dot.classList.remove('dot_selected')
    }
  }
}




