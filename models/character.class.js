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

    IMAGES_SWIM =
        [
            '../assets/img/1.Sharkie/3.Swim/1.png',
            '../assets/img/1.Sharkie/3.Swim/2.png',
            '../assets/img/1.Sharkie/3.Swim/3.png',
            '../assets/img/1.Sharkie/3.Swim/4.png',
            '../assets/img/1.Sharkie/3.Swim/5.png',
            '../assets/img/1.Sharkie/3.Swim/6.png',
        ]

    currentImage = 0;
    world;
    flipDirection = false;

    constructor() {
        super()
        this.loadImage('../assets/img/1.Sharkie/1.IDLE/1.png');
        this.loadImage('../assets/img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.x = 0;
        this.y = 0;
        this.height = 450;
        this.width = 350;
        this.animate();
    }



    animate() {
        let imageSet
        setInterval(() => {

            if (this.world.keyboard.RIGHT ||
                this.world.keyboard.LEFT ||
                this.world.keyboard.UP ||
                this.world.keyboard.DOWN
            ) {
                imageSet = this.IMAGES_SWIM;
            } else {
                imageSet = this.IMAGES_IDLE;
            }
            if (this.currentImage < imageSet.length - 1) {
                this.currentImage++;
            } else {
                this.currentImage = 0;
            }
            this.img = this.imageCache[imageSet[this.currentImage]]
        }, 150)

    }


    moveCharacter() {
        if (this.world.keyboard.RIGHT == true) {
            if (this.x < 1255) {
                this.moveRight();
                this.flipDirection = false;
            }
        }
        if (this.world.keyboard.LEFT == true) {
            if (this.x > 0) {
                this.moveLeft();
                this.flipDirection = true;
            }

        }
        if (this.world.keyboard.UP == true) {
            if (this.y > -210) {
                this.moveUp();
            }

        }
        if (this.world.keyboard.DOWN == true) {
            if (this.y < 280) {
                this.moveDown();
            }
        }

    }

}