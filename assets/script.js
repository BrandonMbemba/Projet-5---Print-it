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
const rightArrow = document.querySelector("#banner .arrow_right");
const dots = document.querySelector (".dots");
const bannerimage = document.querySelector(".banner-img");

// Fonction pour le changement de slide
let indexImage = 0


rightArrow.addEventListener("click", function changeBulletPointsRight(dots) {


  if (indexImage < (slides.length - 1)){
    indexImage++
  } else {
    indexImage = 0
  }

  const image = slides[indexImage]

  bannerimage.setAttribute("src",`./assets/images/slideshow/${image.image}`)

  const tagLine = slides[indexImage].tagLine;
  document.querySelector('p').innerHTML = tagLine;

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

  setActiveDot(indexImage)
})


// Fonction pour la création des points

let dotsHTML = ``
 slides.forEach(() => {
   dots.innerHTML += ' <div class="dot"></div>'
 })


const listDots = document.querySelectorAll(".dot")

setActiveDot()

function setActiveDot() {
  listDots.forEach((dot, index) => {
    if (index == indexImage) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected')
    }
  })
}




