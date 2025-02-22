//1
const images = document.querySelectorAll(".image")
let currentIndex = 0
const showImage = (index) => {
    images.forEach((img, i) => {
        if (i === index) {
            img.style.display = "block"
        } else {
            img.style.display = "none"
        }
    })
}
showImage(currentIndex)
window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" && currentIndex < images.length - 1) {
        currentIndex++
    } else if (event.key === "ArrowLeft" && currentIndex > 0) {
        currentIndex--
    }
    showImage(currentIndex)
})
// 2
const controls = document.getElementById("controls")
const input = controls.querySelector("input")
const renderButton = controls.querySelector('[data-action="render"]')
const destroyButton = controls.querySelector('[data-action="destroy"]')
const boxesContainer = document.getElementById("boxes")
const getRandomColor = () => {
  const colorRed = Math.floor(Math.random() * 256)
  const colorGreen = Math.floor(Math.random() * 256)
  const colorBlue = Math.floor(Math.random() * 256)
  return `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`
}
const destroyBoxes = () => {
  boxesContainer.innerHTML = ""
}
const makeBoxes = (amount) => {
    destroyBoxes()
    let size = 30
    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div")
        box.style.width = `${size}px`
        box.style.height = `${size}px`
        box.style.backgroundColor = getRandomColor()
        boxesContainer.appendChild(box)
        size += 10
    }
}
renderButton.addEventListener("click", () => {
    const amount = parseInt(input.value)
    if (amount > 0 && amount <= 100) {
        makeBoxes(amount)
    } else {
        alert("Введіть число від 1 до 100!")
    }
    input.value = ""
})
destroyButton.addEventListener("click", destroyBoxes)
