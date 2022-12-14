class MovableObject {
    x
    y
    img
    width
    height

    constructor() {

    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveLeft() {
        console.log('moveRight');
    }

    moveRight() {
        console.log('moveLeft');

    }

    jump() {
        console.log('Jump');

    }


}