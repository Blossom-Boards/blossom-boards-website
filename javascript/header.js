
function header() {
  let headerContainer = document.createElement('div')
  
  headerContainer.innerHTML = `
  
  <a class="hover-text" href="main.html"><h1 id="name">Blossom Boards</h1></a>
  <img id="icon" src="../images/icon.png"></img>
  <nav>
      <a class="hover-text" href="main.html"><h1 class="nav-text">HOME</h1></a>
      <a class="hover-text" href="prebuilts.html"><h1 class="nav-text">SHOP PRE-BUILTS</h1></a>
      <a class="hover-text" href="custombuilds.html"><h1 class="nav-text">CUSTOM BUILDS</h1></a>
      <a class="hover-text" href="services.html"><h1 class="nav-text">SERVICES</h1></a>
      <a class="hover-text" href="faqs.html"><h1 class="nav-text">FAQs</h1></a>
      <a class="hover-text" href="about.html"><h1 class="nav-text">ABOUT US</h1></a>
  </nav>
  <hr>
  `

  let body = document.querySelector('body')
  body.insertBefore(headerContainer, body.firstChild)
}

header()
