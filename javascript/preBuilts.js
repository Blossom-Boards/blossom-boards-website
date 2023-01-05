
function generateBuilds() {
  let buildsContainer = document.createElement('div')
  
  buildsContainer.innerHTML = `
  <section id="products">
  <container class="card-container">
      <img class="card-image card-image-products" src="../images/board1.jpg">
      <h1>Bunnies - $55</h1>
      <p>White Keycaps</p>
      <p>Marshmallow Switches</p>
      <p>XKR Board</p>
  </container>
  <container class="card-container">
      <img class="card-image card-image-products" src="../images/board2.jpg">
      <h1>Matcha - $85</h1>
      <p>Olive Keycaps</p>
      <p>Irene Switches</p>
      <p>XKR2 Board</p>
  </container>
  <container class="card-container">
      <img class="card-image card-image-products" src="../images/board3.jpg">
      <h1>Board - $65</h1>
      <p>White Keycaps</p>
      <p>Brown Switches</p>
      <p>XKR Board</p>
  </container>
  <container class="card-container">
      <img class="card-image card-image-products" src="../images/board3.jpg">
      <h1>Board - $65</h1>
      <p>White Keycaps</p>
      <p>Brown Switches</p>
      <p>XKR Board</p>
  </container>
  <container class="card-container">
      <img class="card-image card-image-products" src="../images/board3.jpg">
      <h1>Board - $65</h1>
      <p>White Keycaps</p>
      <p>Brown Switches</p>
      <p>XKR Board</p>
  </container>
  <container class="card-container">
      <img class="card-image card-image-products" src="../images/board3.jpg">
      <h1>Board - $65</h1>
      <p>White Keycaps</p>
      <p>Brown Switches</p>
      <p>XKR Board</p>
  </container>
  <container class="card-container">
      <img class="card-image card-image-products" src="../images/board3.jpg">
      <h1>Board - $65</h1>
      <p>White Keycaps</p>
      <p>Brown Switches</p>
      <p>XKR Board</p>
  </container>
  <container class="card-container">
      <img class="card-image card-image-products" src="../images/board3.jpg">
      <h1>Board - $65</h1>
      <p>White Keycaps</p>
      <p>Brown Switches</p>
      <p>XKR Board</p>
  </container>
</section>
  `

  let main = document.querySelector('main')
  main.insertBefore(buildsContainer, main.secondChild)
}

generateBuilds()
