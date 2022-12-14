class Background extends MovableObject {

    constructor(path) {
        super().loadImage(path)
        this.x = 0;
        this.y = 0;
        this.width = 720 * 1.3;
        this.height = 480 * 1.3;
    }

}