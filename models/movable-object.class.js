class MovableObject {
    x
    y
    img
    imageCache = {}
    width
    height
    speed = 5

    constructor() {

    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
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

    jump() {
        console.log('Jump');

    }



}