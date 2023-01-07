class StatusBar extends DrawableObject {

    world;
    percentage;
    imageSet;


    constructor(imageSet, y, percentage) {
        super();
        this.imageSet = imageSet;
        this.y = y;
        this.percentage = percentage;
        this.width = 200;
        this.height = 50;
        this.loadImage(imageSet[0]);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.percentage >= 80) {
                this.loadImage(this.imageSet[5]);
            } else if (this.percentage >= 60) {
                this.loadImage(this.imageSet[4]);
            } else if (this.percentage >= 40) {
                this.loadImage(this.imageSet[3]);
            } else if (this.percentage >= 20) {
                this.loadImage(this.imageSet[2]);
            } else if (this.percentage > 0) {
                this.loadImage(this.imageSet[1]);
            } else {
                this.loadImage(this.imageSet[0]);
            }

        }, 1000 / 60)
    }







}