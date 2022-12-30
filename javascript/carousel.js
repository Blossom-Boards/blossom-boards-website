let slideShowSection = document.querySelector(".slideshow-images")

let images = ['../images/board1.jpg','../images/board2.jpg','../images/board3.jpg','../images/icon.png','../images/board1.jpg',]
let images_linked = new LinkedList(images)
let currentImage = images_linked.head 

function fillCarousel() {

  let tempNode = currentImage

  for(let i = 0; i < 3; i++) {
    console.log(tempNode.value)
    createImage(tempNode.value,i)
    tempNode = tempNode.next
  }

  let leftButton = document.querySelector('.index-0')
  let rightButton = document.querySelector('.index-2')

  leftButton.addEventListener('click', moveLeft)
  rightButton.addEventListener('click', moveRight)
}

function moveLeft() {
  currentImage = currentImage.prev
  animateLeft()
}

function moveRight() {
  currentImage = currentImage.next
  animateRight()
}

// creates the image
function createImage(image,index) {
  let imageContainer = document.createElement('div')
  imageContainer.className = `slideshow-image index-${index}`

  let imageElement = document.createElement('img')
  //imageElement.className = 'slideshow-image'
  imageElement.src = image
  imageElement.alt = image
  imageContainer.appendChild(imageElement)

  slideShowSection.appendChild(imageContainer)
}

function onHover() {
  
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

function animateRight() {
  // let slideShowElements = document.querySelectorAll('.slideshow-images *')

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
