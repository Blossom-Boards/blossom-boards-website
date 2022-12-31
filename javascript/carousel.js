let slideShowSection = document.querySelector(".slideshow-images")

let images = ['../images/board1.jpg','../images/board2.jpg','../images/board3.jpg','../images/board1.jpg',]
let images_linked = new LinkedList(images)
let currentImage = images_linked.head 

let autoScrollInterval = null

function fillCarousel() {

  let tempNode = currentImage

  for(let i = 0; i < 3; i++) {
    createImage(tempNode.value,i)
    tempNode = tempNode.next
  }

  let leftButton = document.querySelector('.index-0')
  let rightButton = document.querySelector('.index-2')

  leftButton.addEventListener('click', moveLeft)
  document.querySelector('.index-0').style.opacity = "0.3"
  rightButton.addEventListener('click', moveRight)
  document.querySelector('.index-2').style.opacity = "0.3"
  
}

function moveLeft() {
  resetAutoScrolling()
  currentImage = currentImage.prev
  animateLeft()
}

function moveRight() {
  resetAutoScrolling()
  currentImage = currentImage.next
  animateRight()
}

// creates the image
function createImage(image,index) {
  let imageContainer = document.createElement('div')
  imageContainer.className = `slideshow-image index-${index}`

  let imageElement = document.createElement('img')
  imageElement.src = image
  imageElement.alt = image
  imageContainer.appendChild(imageElement)

  slideShowSection.appendChild(imageContainer)
}

function animateLeft() {

  let timeline = gsap.timeline()
  .to('.index-0', {
    transform: 'translateX(25.45vw)',
    duration: .25,
    opacity:1,
    height:'40vh',
    width: '80vw',
  })

  let timeline2 = gsap.timeline()
  timeline2.to('.index-1', {
    transform: 'translateX(25.45vw)',
    zIndex: 1,
    height:'30vh',
    width: '40vw',
    opacity: 0.3,
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
    onComplete: () => {
      document.querySelector('.index-2 img').src = currentImage.value
    }
  })
  .to('.index-2', {
    transform: 'translateX(-75.45vw)',
    duration: .25,
    onComplete: reset
  })


  //now that everything is in place, delete all of the elements and add them back
}

function animateRight() {

  let timeline = gsap.timeline()
  timeline
  .to('.index-0', {
    transform: 'translateX(-25.45vw)',
    duration: .25,
  })
  .to('.index-0', {
    transform: 'translateX(100vw)',
    duration: 0,
    onComplete: () => {
      document.querySelector('.index-0 img').src = currentImage.next.next.value
    }
  })
  .to('.index-0', {
    transform: 'translateX(75.45vw)',
    duration: .25,
    onComplete: reset
  })
  
  let timeline2 = gsap.timeline()
  timeline2.to('.index-1', {
    delay: 0,
    transform: 'translateX(-25.45vw)',
    zIndex: 1,
    height: '30vh',
    opacity:.3,
    width: '40vw',
    duration: .25,
  })

  let timeline3 = gsap.timeline()
  timeline3.to('.index-2', {
    transform: 'translateX(-25.45vw)',
    zIndex: 2,
    height: '40vh',
    width: '80vw',
    opacity:1,
    duration: .25,
  })
} 

//now that everything is in place, delete all of the elements and add them back

function reset() {
  let slideShowElements = document.querySelectorAll('.slideshow-images *')

  slideShowElements.forEach(element => element.remove())

  fillCarousel()

}

function startAutoScrolling() {
  autoScrollInterval = setInterval(()=> {

    moveRight()
  
  }, 5000)
}

function stopAutoScrolling() {
  clearInterval(autoScrollInterval)
}

function resetAutoScrolling() {
  stopAutoScrolling(autoScrollInterval)
  startAutoScrolling()
}

fillCarousel()
startAutoScrolling()