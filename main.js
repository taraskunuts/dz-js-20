//1
const images = document.querySelectorAll('.gallery .image')
let currentIndex = 0
function updateImage() {
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.display = "block"
    } else {
      image.style.display = "none"
    }
  })
}
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length
  updateImage()
}
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length
  updateImage()
}
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    nextImage()
  } else if (event.key === 'ArrowLeft') {
    prevImage()
  }
})
updateImage()
//2
const inputElement = document.getElementById('input-boxes')
const renderButton = document.querySelector('[data-action="render"]')
const destroyButton = document.querySelector('[data-action="destroy"]')
const boxesContainer = document.getElementById('boxes')
function getRandomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}
function createBoxes(amount) {
  boxesContainer.innerHTML = ''

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div')
    const size = 30 + i * 10
    box.style.width = `${size}px`
    box.style.height = `${size}px`
    box.style.backgroundColor = getRandomColor()
    box.classList.add('box')
    boxesContainer.appendChild(box)
  }
}
function destroyBoxes() {
  boxesContainer.innerHTML = ''
}
renderButton.addEventListener('click', () => {
  const amount = parseInt(inputElement.value)
  if (amount > 0) {
    createBoxes(amount)
  }
})
destroyButton.addEventListener('click', destroyBoxes)