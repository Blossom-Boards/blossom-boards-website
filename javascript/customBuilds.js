let cardsContainer = document.querySelector('.cards-container')

let buttons = document.querySelectorAll('button')
let selectedSize = buttons[0].innerHTML

buttons.forEach(button => {

  button.addEventListener('click', (event) => {
    event.preventDefault()

    buttons.forEach(button => {
      button.classList.remove('size-selected')
    })

    button.classList.add('size-selected')
  })
})

//all prices are in usd
function generateRecommendedBoards() {
  let boards = [
    {
      name: 'jeff', 
      cost: 20,
      size: 60,
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

generateRecommendedBoards()