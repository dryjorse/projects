const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight   

let x = canvas.width / 2 - 300 / 2
let y = canvas.height / 2 - 300 / 2
let isMouseDown = false

canvas.addEventListener('mousedown', () => {
    isMouseDown = true
})

canvas.addEventListener('mouseup', () => {
    isMouseDown = false
    ctx.beginPath()
})

ctx.lineWidth = 1
canvas.addEventListener('mousemove', (e) => {
    if(isMouseDown) {
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(e.clientX, e.clientY, 1 / 2, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY)
    }
})

// изменение цвета контента
// ctx.fillStyle = 'magenta'

// изменение цвета рамки
// ctx.strokeStyle = 'magenta'

// толщина рамки
// ctx.lineWidth = 5

// создание прямоугольника
// ctx.fillRect(x, y, width, height) 

// создание рамки
// ctx.strokeRect(x, y, 300, 200)

// создание круга
// ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2)
// ctx.fill()

// создание различных фигур
// ctx.beginPath()
// ctx.moveTo(50, 50)
// ctx.lineTo(25, 100)
// ctx.lineTo(75, 100)
// ctx.closePath()
// ctx.stroke()

// увеличение ctx.scale(x, y)
// поварачивание ctx.rotate(3 * Math.PI/100)

// текст
// ctx.font = '20px Georgia'
// ctx.fillText('Hello world', 50, 50)
// ctx.textAlign = 'center'