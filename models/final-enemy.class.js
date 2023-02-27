class FinalEnemy extends MovableObject {

    currentImage = 0;
    world;


    IMAGES_INTRODUCE = [
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'assets/img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ]

    IMAGES_FLOATING = [
        'assets/img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ]


    constructor() {
        super()
        this.loadImage('assets/img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_FLOATING);
        this.x = 2800
        this.y = 0;
        this.width = 400;
        this.height = 600;
        this.speed = 0;
        this.animate();
    }



    animate() {
        let imageSet
        setTimeout(() => {
            setInterval(() => {
                if (this.world.characterOnEndPosition) {
                    if (!this.world.finalEnemyIntroduced) {
                        imageSet = this.IMAGES_INTRODUCE;
                    } else {
                        imageSet = this.IMAGES_FLOATING;
                    }
                    if (this.currentImage < imageSet.length - 1) {
                        this.currentImage++;
                    } else {
                        if (imageSet == this.IMAGES_INTRODUCE) {
                            this.world.finalEnemyIntroduced = true
                        } else {
                            this.currentImage = 0;
                        }
                    }
                    this.img = this.imageCache[imageSet[this.currentImage]]
                }

            }, 150)

        }, 50)
    }
}