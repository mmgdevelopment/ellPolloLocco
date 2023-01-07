class Coin extends DrawableObject {
    IMAGES_IDLE =
        [
            'assets/img/4. Marcadores/1. Coins/1.png',
            'assets/img/4. Marcadores/1. Coins/2.png',
            'assets/img/4. Marcadores/1. Coins/3.png',
            'assets/img/4. Marcadores/1. Coins/4.png',

        ]

    currentImage = 0;

    width = 40
    height = 40

    constructor(x, y) {
        super()
        this.x = x
        this.y = y
        this.loadImage(this.IMAGES_IDLE[0])
        this.loadImages(this.IMAGES_IDLE)
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