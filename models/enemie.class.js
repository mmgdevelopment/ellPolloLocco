class Enemie extends MovableObject {

    constructor(x = 3800) {
        super().loadImage('../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.x = x;
        this.y = (Math.random() * 500);
        this.height = 150;
        this.width = 120;
        this.animate();
        this.swimToTheLeft()
    }
    currentImage = 0;
    speed = 0.5 + (Math.random())

    IMAGES_SWIM = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ]

    swimToTheLeft() {
        setInterval(() => {
            this.moveLeft(this.speed)
        }, 1000 / 60)
    }


    animate() {
        this.currentImage = 0;
        return setInterval(() => {
            let path = this.IMAGES_SWIM[this.currentImage];
            this.img = this.imageCache[path]
            if (this.currentImage < this.IMAGES_SWIM.length - 1) {
                this.currentImage++;
            } else {
                this.currentImage = 0;
            }
        }, 150)
    }
}