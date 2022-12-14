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

    constructor() {
        super()
        this.loadImage('../assets/img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE)
        this.x = 0;
        this.y = 0;
        this.height = 450;
        this.width = 350;
        this.animate();
    }

    animate() {
        setInterval(() => {
            let path = this.IMAGES_IDLE[this.currentImage];
            this.img = this.imageCache[path]
            if (this.currentImage < this.IMAGES_IDLE.length - 1) {
                this.currentImage++;
            } else {
                this.currentImage = 0;
            }
        }, 150)

    }

}