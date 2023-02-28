class DropableObject extends DrawableObject {

    currentImage = 0;

    width = 40
    height = 40
    world;
    constructor(x, y) {
        super()
        this.x = x
        this.y = y
        this.animate()
        this.checkforHits()
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

    checkforHits() {
        setInterval(() => {
            if (
                this.world.character.x + 280 > this.x &&
                this.world.character.x + 50 < this.x + this.width &&
                this.world.character.y + 350 > this.y &&
                this.world.character.y + 200 < this.y + this.height
            ) {
                if (this instanceof Coin) {
                    this.world.coinBar.percentage += 15;
                }
                if (this instanceof Poison) {
                    this.world.poisonBar.percentage += 15;
                }
                this.x = 80000 //// ??? better solution ???
            }

        }, 150)
    }

}