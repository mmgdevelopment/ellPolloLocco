class GameOver extends DrawableObject {

    IMAGES =
        [
            'assets/img/6.Botones/Tittles/Game Over/Recurso 9.png',
            'assets/img/6.Botones/Tittles/Game Over/Recurso 10.png',
            'assets/img/6.Botones/Tittles/Game Over/Recurso 11.png',
            'assets/img/6.Botones/Tittles/Game Over/Recurso 12.png',
            'assets/img/6.Botones/Tittles/Game Over/Recurso 13.png',
        ]

    constructor() {
        super();
        this.loadImage('assets/img/6.Botones/Tittles/Game Over/Recurso 9.png');
        this.loadImages(this.IMAGES);
        this.y = 150;
        this.width = 1000;
        this.height = 250;
        this.animateImages(this.IMAGES);
    }
}