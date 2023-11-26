import { randomIntFromRange, randomColor, distance } from '@/utility/index.js'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


var height = window.innerHeight;
var width = window.innerWidth;

canvas.width = width
canvas.height = height

const mouse = {
  x: height / 2,
  y: height / 2
}
var friction = 0.99

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = height
  canvas.height = height

  init()
})

// Objects
class Object {
  constructor(x, y, dy, radius, color) {
    this.x = x
    this.y = y
    this.dy = dy
    this.radius = radius
    this.color = color
  }

  draw() {
    //start drawing
  }

  update() {
    //update draw
    this.draw()
  }
}

// Implementation
let ball

function init() {
  // for (let i = 0; i < 100; i++) {
  // }
}
// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
}

init()
animate()
