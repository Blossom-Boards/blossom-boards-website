let cardsContainer = document.querySelector('.list-of-cards')

let buttons = document.querySelectorAll('.size-button')
let selectedSize = buttons[0].innerHTML

function preventReload() {
  window.onbeforeunload = () => {
    alert('your form data may not be saved!')
    return 'your form data may not be saved!'
  }
}

function setNextButtonFunctionality() {
  let submitButtons = document.querySelectorAll('.submit-button')

  if(!submitButtons) return

  submitButtons.forEach(submitButton => {
    if(!submitButton) return

    submitButton.addEventListener('click', (event) => {
  
      event.preventDefault()
  
      nextTab()
    })
  })
}

function setSizeFunctionality() {
  buttons.forEach(button => {

    button.addEventListener('click', (event) => {
      event.preventDefault()
  
      buttons.forEach(button => {
        button.classList.remove('selected')
      })
  
      button.classList.add('selected')
    })
  })
}

//all prices are in usd
function generateRecommendedBoards() {
  let boards = [
    {
      name: 'jeff', 
      cost: 20,
      size: 60,
      src: '../images/board1.jpg'
    },
    {
      name: 'jeff', 
      cost: 20,
      size: 60,
      src: '../images/board1.jpg'
    },
    {
      name: 'jeff', 
      cost: 20,
      size: 60,
      src: '../images/board1.jpg'
    },
    {
      name: 'jeff', 
      cost: 20,
      size: 65,
      src: '../images/board1.jpg'
    },
  ]

  boards.forEach(board => {
    if(board.size != selectedSize) return

    let cardContainer = document.createElement('div')
    cardContainer.className = 'cards-container'
    cardContainer.innerHTML = `
    <div class="card-container card">
      <img class="card-image" src='${board.src}' alt="">
      <h1>
          ${board.name} - $${board.cost} USD
      </h1>
      <p>
          ${board.size}
      </p>
    </div>
    `
    cardsContainer.appendChild(cardContainer)
  })
}

function generateRecommendedSwitches() {

}

function generateRecommendedCaps() {

}

//preventReload()
setSizeFunctionality()
generateRecommendedBoards()
generateRecommendedSwitches()
generateRecommendedCaps()
setNextButtonFunctionality()
generateStatusBar()