class BackgroundObject extends MovableObject {

    constructor(path, x) {
        super().loadImage(path)
        this.x = x;
        this.y = 0;
        this.width = 720 * 1.3;
        this.height = 480 * 1.3;
    }

}