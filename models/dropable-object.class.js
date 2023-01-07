class DropableObject extends DrawableObject {

    currentImage = 0;

    width = 40
    height = 40

    constructor(x, y) {
        super()
        this.x = x
        this.y = y
        this.animate()
    }

    animate() {
        setInterval(() => {
            if (this.currentImage < this.IMAGES_IDLE.length - 1) {
                this.currentImage++;
            } else {
                this.currentImage = 0;
            }
            this.img = this.imageCache[this.IMAGES_IDLE[this.currentImage]]
        }, 150)
    }

}