class Enemie extends MovableObject {

    constructor() {
        super().loadImage('../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png')
        this.x = Math.random() * 1000;
        this.y = 250;
        this.height = 300;
        this.width = 250;
    }
}