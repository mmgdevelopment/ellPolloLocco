class Enemie extends MovableObject {
    world;
    currentImage;
    speed = 0.5 + (Math.random())
    isDead = false;
    isFallingDown = false;

    enemiesStarted;

    IMAGES_SWIM = [
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ]

    constructor(x = 3800) {
        super().loadImage('../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.x = x;
        this.y = (Math.random() * 500);
        this.height = 150;
        this.width = 120;
        this.animate();
        this.swimToTheLeft();
        this.checkforHits();

    }

    swimToTheLeft() {
        setInterval(() => {
            if (this.world.gameStarted) {
                this.moveLeft()
            }
        }, 1000 / 60)
    }

    fallDown() {
        setInterval(() => {
            this.moveDown()
        }, 10)
    }


    animate() {
        this.currentImage = 0;
        setInterval(() => {
            let path = this.IMAGES_SWIM[this.currentImage];
            this.img = this.imageCache[path]
            if (this.currentImage < this.IMAGES_SWIM.length - 1) {
                this.currentImage++;
            } else {
                this.currentImage = 0;
            }
            if (this.isDead) {
                this.loadImage('assets/img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png');
                return
            }
        }, 150)
    }


    checkforHits() {
        setInterval(() => {
            if (
                this.world.character.x + 280 > this.x &&
                this.world.character.x + 50 < this.x + this.width &&
                this.world.character.y + 320 > this.y &&
                this.world.character.y + 200 < this.y + (this.height - 50)
            ) {
                if (!this.world.character.isAttacking && !this.isDead) {
                    this.world.lifeBar.percentage -= 1
                    this.world.character.isHurtElectric = true;
                } else {
                    this.isDead = true;
                    if (!this.isFallingDown) {
                        this.isFallingDown = true;
                        this.fallDown();
                    }
                }
            }
        }, 150)
    }
}