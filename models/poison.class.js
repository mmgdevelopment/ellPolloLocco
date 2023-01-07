class Poison extends DropableObject {

    IMAGES_IDLE = [
        'assets/img/4. Marcadores/Posiขn/Animada/1.png',
        'assets/img/4. Marcadores/Posiขn/Animada/2.png',
        'assets/img/4. Marcadores/Posiขn/Animada/3.png',
        'assets/img/4. Marcadores/Posiขn/Animada/4.png',
        'assets/img/4. Marcadores/Posiขn/Animada/5.png',
        'assets/img/4. Marcadores/Posiขn/Animada/6.png',
        'assets/img/4. Marcadores/Posiขn/Animada/7.png',
        'assets/img/4. Marcadores/Posiขn/Animada/8.png',
    ]

    width = 60
    height = 80

    constructor(x, y) {
        super(x, y)
        this.loadImage(this.IMAGES_IDLE[0])
        this.loadImages(this.IMAGES_IDLE)
    }
}
