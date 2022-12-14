class MovableObject {
    x
    y
    img
    imageCache = {}
    width
    height

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
        console.log('moveRight');
    }

    moveRight() {
        console.log('moveLeft');

    }

    jump() {
        console.log('Jump');

    }


}