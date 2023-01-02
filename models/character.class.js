class Character extends MovableObject {

    IMAGES_IDLE =
        [
            '../assets/img/1.Sharkie/1.IDLE/1.png',
            '../assets/img/1.Sharkie/1.IDLE/2.png',
            '../assets/img/1.Sharkie/1.IDLE/3.png',
            '../assets/img/1.Sharkie/1.IDLE/4.png',
            '../assets/img/1.Sharkie/1.IDLE/5.png',
            '../assets/img/1.Sharkie/1.IDLE/6.png',
            '../assets/img/1.Sharkie/1.IDLE/7.png',
            '../assets/img/1.Sharkie/1.IDLE/8.png',
            '../assets/img/1.Sharkie/1.IDLE/9.png',
            '../assets/img/1.Sharkie/1.IDLE/10.png',
            '../assets/img/1.Sharkie/1.IDLE/12.png',
            '../assets/img/1.Sharkie/1.IDLE/13.png',
            '../assets/img/1.Sharkie/1.IDLE/14.png',
            '../assets/img/1.Sharkie/1.IDLE/15.png',
            '../assets/img/1.Sharkie/1.IDLE/16.png',
            '../assets/img/1.Sharkie/1.IDLE/17.png',
            '../assets/img/1.Sharkie/1.IDLE/18.png',
        ]

    currentImage = 0;
    world;

    constructor() {
        super()
        this.loadImage('../assets/img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE)
        this.x = 0;
        this.y = 0;
        this.height = 450;
        this.width = 350;
        this.animate(this.IMAGES_IDLE);
    }

    checkKeyBoard() {
        if (this.world.keyboard.RIGHT == true) {
            this.moveRight();
        }
        if (this.world.keyboard.LEFT == true) {
            this.moveLeft();
        }
        if (this.world.keyboard.UP == true) {
            this.moveUp();
        }
        if (this.world.keyboard.DOWN == true) {
            this.moveDown();
        }

    }

}