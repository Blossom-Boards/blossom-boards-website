let tabs = document.querySelectorAll('.tab')
let selectedTabIndex = 0

console.log(tabs)

function generateStatusBar() {
  let statusBar = document.querySelector('.status-bar')
  statusBar.innerHTML = ''

  tabs.forEach((tab, index) => {
    let statusNode = document.createElement('div')
    statusNode.className = 'status-node'

    let nodeName = tab.children[0].innerText
    
    let opacity = index <= selectedTabIndex ? 1 : .5

    statusNode.innerHTML = `
    <div class="dot"></div>
    <p class="status-bar-text">${nodeName}</p>
    `
    statusNode.children[0].style.opacity = opacity

    statusBar.appendChild(statusNode)
  })
}

function nextTab() {

  if(selectedTabIndex >= tabs.length-1) return

  tabs[selectedTabIndex].classList.remove('visible')
  selectedTabIndex++
  tabs[selectedTabIndex].classList.add('visible')
  generateStatusBar()
}

if(tabs.length != 0)
  tabs[0].classList.add('visible')