const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
var tutorial = document.getElementById('tutorialBox')
canvas.height = 184
canvas.width = 1000
var dialogueBox = document.getElementById('dialogueBox')
canvas.style.backgroundColor = 'black'
var dialogue = false
var jumpCount = 0
const gravity = 0.5
const speed = 10
var boxActive = false
var count = 2
var bruh = 0
class Player {
    constructor() {
        this.width = 33
        this.height = 60
        this.velocity = {
            x: 0,
            y: 0
        }
        this.position = {
            x: 300,
            y: 100
        }
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        else {
            this.velocity.y = 0
            jumpCount = 0
        }
        if (player.position.y + player.height <= scientist.position.y && player.position.y + player.height + player.velocity.y >= scientist.position.y && player.position.x + player.width >= scientist.position.x && player.position.x <= scientist.position.x + scientist.width) {
            player.velocity.y = 0
            jumpCount = 0
        }

    }
}
class Scientist {
    constructor() {
        this.width = 33
        this.height = 60
        this.velocity = {
            y: 0
        }
        this.position = {
            x: 600,
            y: canvas.height - this.height
        }
    }
    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

}

const scientist = new Scientist()
const player = new Player()
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate)
    scientist.draw()
    if (keys.right.pressed && player.position.x < canvas.width - player.width - 600) {
        player.velocity.x = speed
    } else if (keys.left.pressed && player.position.x > 300) {
        player.velocity.x = -speed
    } else {
        player.velocity.x = 0
        if (keys.right.pressed) {
            scientist.position.x -= speed
        } else if (keys.left.pressed) {
            scientist.position.x += speed
        }
    }
    if (player.position.x >= scientist.position.x - 40 && player.position.x <= scientist.position.x + 40 + scientist.width) {
        tutorial.innerHTML = "Press E to talk"
    } else {
        tutorial.innerHTML = ""
    }
    player.update()
}
animate()

addEventListener('keydown', (e) => {
    if (e.key == 'w' || e.key == ' ' || e.key == 'ArrowUp') {
        if (jumpCount < 1) {
            player.velocity.y -= 7
            jumpCount++
        }
    }
    if (e.key == 's' && player.position.y + player.height + player.velocity.y <= canvas.height) {
        player.velocity.y = 10
    }
    if (e.key == 'ArrowDown' && player.position.y + player.height + player.velocity.y <= canvas.height) {
        player.velocity.y = 10
    }
    if (e.key == 'a' || e.key == 'ArrowLeft') {
        keys.left.pressed = true
    } else if (e.key == 'd' || e.key == 'ArrowRight') {
        keys.right.pressed = true
    }
})
addEventListener('keyup', (e) => {
    if (e.key == 'a' || e.key == 'ArrowLeft') {
        keys.left.pressed = false
    }
    if (e.key == 'd' || e.key == 'ArrowRight') {
        keys.right.pressed = false
    } else if (e.key == 'e') {
        if (player.position.x >= scientist.position.x - 50 && player.position.x <= scientist.position.x + 50 + scientist.width) {
            if (boxActive == false) {
                dialogueBox.classList.remove('nondialogue')
                dialogueBox.classList.add('dialogue')
                dialogueBox.innerHTML = 'oh. youre that guy from earlier'
                boxActive = true
                bruh = 1
            } else if (bruh == 2) {
                dialogueBox.innerHTML = ''
                dialogueBox.classList.remove('dialogue')
                dialogueBox.classList.add('nondialogue')
                bruh = 0
                boxActive = false
            } else if (bruh = 1) {
                bruh = 2
                dialogueBox.innerHTML = 'Yes. I am...'
            }
        } else if (bruh == 2) {
            dialogueBox.innerHTML = ''
            dialogueBox.classList.remove('dialogue')
            dialogueBox.classList.add('nondialogue')
            boxActive = false
            bruh = 0
        } else if (bruh = 1) {
            bruh = 2
            dialogueBox.innerHTML = 'Yes. I am...'
        } else {
            dialogueBox.classList.remove('dialogue')
            dialogueBox.classList.add('nondialogue')
            dialogueBox.innerHTML = ''
            boxActive = false
        }
    }
})