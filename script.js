const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const textEl = document.querySelector('.podnaslov')
const text = 'Tradicionalna hercegovačka, broćanska slastica od autohtonih sorti grožđa žilavke i blatine.'
let idx = 1

open.addEventListener('click', () => {
    container.classList.add('show-nav')
})

close.addEventListener('click', () => {
    container.classList.remove('show-nav')
})

writeText()

function writeText() {

    textEl.innerText = text.slice(0,idx)

    idx++

    
    setTimeout(writeText, 50)
}
scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
    console
  }
  const pocetna = document.getElementById('pocetna')
  pocetna.addEventListener('click', (e) => {
      e.preventDefault()
      scrollTo(document.getElementById('prvi'))
      container.classList.remove('show-nav')
  })

  document.getElementById('onama').addEventListener('click', (e) => {
    e.preventDefault()
    scrollTo(document.getElementById('drugi'))
    container.classList.remove('show-nav')
})
document.getElementById('kontakt').addEventListener('click', (e) => {
    e.preventDefault()
    scrollTo(document.getElementById('treci'))
    container.classList.remove('show-nav')
})