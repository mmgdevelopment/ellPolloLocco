class DrawableObject {

    x
    y
    img
    imageCache = {}
    width
    height
    currentImage

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

    animateImages(images) {
        this.currentImage = 0;
        return setInterval(() => {
            let path = images[this.currentImage];
            this.img = this.imageCache[path]
            if (this.currentImage < images.length - 1) {
                this.currentImage++;
            } else {
                this.currentImage = 0;
            }
        }, 150)
    }


}