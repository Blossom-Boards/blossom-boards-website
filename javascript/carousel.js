let slideShowSection = document.querySelector(".slideshow-images")
let leftButton = document.querySelector('.slideshow-left')
let rightButton = document.querySelector('.slideshow-right')

let images = ['1','2','3']
let currentIndex = 0

function fillCarousel() {
  images.forEach((image, index) => {

    if(index >= 3) return

    createImage(image, index)
  })
}

function createImage(image,index) {
  let imageContainer = document.createElement('div')
  imageContainer.className = 'slideshow-image'

  imageContainer.innerHTML = `
    
  `

  slideShowSection.appendChild(imageContainer)
}

function onHover() {

}

function moveLeft() {
  currentIndex = currentIndex == 0 ? currentIndex = images.length - 1 : currentIndex - 1
}

function moveRight() {

  currentIndex = currentIndex == images.length - 1 ? 0 : currentIndex + 1
  animateRight()
}

function animateRight() {
  let slideShowElements = document.querySelectorAll('.slideshow-images *')
  
  let timeline = gsap.timeline()
  
  timeline.to('.slideshow-images :nth-child(1)', {
    transform: 'translateX(-100px)',
    opacity: 0,
    duration: 1
  })
}

leftButton.addEventListener('click', moveLeft)
rightButton.addEventListener('click', moveRight)

fillCarousel()

