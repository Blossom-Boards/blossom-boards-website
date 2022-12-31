let details = document.querySelectorAll('details')

details.forEach(detail => {
  

  detail.addEventListener('mousedown', () => {

    animation(detail)

  })
})

function animation(detail) {
  let expanded = detail.open

  if(expanded) {
    //play the closing
    detail.children[0].children[0].innerText = '+ '+detail.children[0].children[0].innerText.substring(1)


    gsap.fromTo(detail, {
      height: getExpandedHeight(detail)+"px",
    }, {
      height: '50px',
      duration: .2
    })

  } else {
    detail.children[0].children[0].innerText = '- '+detail.children[0].children[0].innerText.substring(1)

    //play the expanding
    gsap.fromTo(detail, {
      height: 50+"px",
    }, {
      height: getExpandedHeight(detail)+"px",
      duration: .2
    })

  }
}

function getExpandedHeight(detail) {
  let height = 0
  //get height of children
  for(let i = 0; i < detail.children.length; i++) {
    height += detail.children[i].offsetHeight
  }

  return height
}