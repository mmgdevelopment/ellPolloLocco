class StartScreen extends DrawableObject {

    IMAGES =
        [
            'assets/img/6.Botones/Start/1.png',
            'assets/img/6.Botones/Start/2.png',
            'assets/img/6.Botones/Start/3.png',
            'assets/img/6.Botones/Start/4.png',

        ]

    constructor() {
        super();
        this.loadImage('assets/img/6.Botones/Start/1.png');
        this.loadImages(this.IMAGES);
        this.y = 250;
        this.x = 580;
        this.width = 415;
        this.height = 135;
        this.animateImages(this.IMAGES);
    }
}