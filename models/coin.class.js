class Coin extends DropableObject {
    IMAGES_IDLE =
        [

            'assets/img/4. Marcadores/1. Coins/1.png',
            'assets/img/4. Marcadores/1. Coins/2.png',
            'assets/img/4. Marcadores/1. Coins/3.png',
            'assets/img/4. Marcadores/1. Coins/4.png',

        ]

    constructor(x, y) {
        super(x, y)
        this.loadImage(this.IMAGES_IDLE[0])
        this.loadImages(this.IMAGES_IDLE)
    }
}