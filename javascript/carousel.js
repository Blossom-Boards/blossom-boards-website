let slideShowSection = document.querySelector(".slideshow-images")

let images = ['../images/board1.jpg','../images/board2.jpg','../images/board1.jpg']
let currentIndex = 0

function fillCarousel() {
  images.forEach((image, index) => {

    if(index >= 3) return

    createImage(image, index)
  })

let leftButton = document.querySelector('.index-0')
let rightButton = document.querySelector('.index-2')

leftButton.addEventListener('click', moveLeft)
rightButton.addEventListener('click', moveRight)
}

// creates the image
function createImage(image,index) {
  let imageContainer = document.createElement('div')
  imageContainer.className = `slideshow-image index-${index}`

  let imageElement = document.createElement('img')
  //imageElement.className = 'slideshow-image'
  imageElement.src = image
  imageContainer.appendChild(imageElement)

  slideShowSection.appendChild(imageContainer)
}

function onHover() {

}

function moveLeft() {
  currentIndex = currentIndex == 0 ? currentIndex = images.length - 1 : currentIndex - 1
  animateLeft()
}

function animateLeft() {
  let slideShowElements = document.querySelectorAll('.slideshow-images *')

  let timeline = gsap.timeline()
  .to('.index-0', {
    transform: 'translateX(33.4vw)',
    duration: .25,
    height:'40vh',
  })

  let timeline2 = gsap.timeline()
  timeline2.to('.index-1', {
    transform: 'translateX(33.4vw)',
    zIndex: 1,
    height:'30vh',
    duration: .25,
  })
  
  let timeline3 = gsap.timeline()
  timeline3.to('.index-2', {
    transform: 'translateX(150vw)',
    duration: .25,
  })
  .to('.index-2', {
    transform: 'translateX(-100vw)',
    duration: 0,
  })
  .to('.index-2', {
    transform: 'translateX(-66.5vw)',
    duration: .25,
    onComplete: reset
  })


  //now that everything is in place, delete all of the elements and add them back
}

function moveRight() {

  currentIndex = currentIndex == images.length - 1 ? 0 : currentIndex + 1
  animateRight()
}

function animateRight() {
  let slideShowElements = document.querySelectorAll('.slideshow-images *')

  let timeline = gsap.timeline()
  timeline.to('.index-0', {
    transform: 'translateX(-40vw)',
    duration: .25,
  })
  .to('.index-0', {
    transform: 'translateX(100vw)',
    duration: 0,
  })
  .to('.index-0', {
    transform: 'translateX(67vw)',
    duration: .25,
    onComplete: reset
  })
  
  let timeline2 = gsap.timeline()
  timeline2.to('.index-1', {
    delay: 0,
    transform: 'translateX(-33.4vw)',
    zIndex: 1,
    height: '30vh',
    duration: .25,
  })

  let timeline3 = gsap.timeline()
  timeline3.to('.index-2', {
    transform: 'translateX(-33.4vw)',
    zIndex: 2,
    height: '40vh',
    duration: .25,
  })

  //now that everything is in place, delete all of the elements and add them back
} 

function reset() {
  let slideShowElements = document.querySelectorAll('.slideshow-images *')

  slideShowElements.forEach(element => element.remove())

  fillCarousel()
}
fillCarousel()


