class MovableObject extends DrawableObject {

    speed = 5

    constructor() {
        super()

    }

    moveLeft() {
        this.x -= this.speed
    }

    moveRight() {
        this.x += this.speed

    }

    moveUp() {
        this.y -= this.speed
    }

    moveDown() {
        this.y += this.speed

    }
}