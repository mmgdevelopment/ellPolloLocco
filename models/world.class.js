class World {
    character = new Character();
    enemies = [
        new Enemie(1400),
        new Enemie(1600),
        new Enemie(1800),
        new Enemie(2250),
        new Enemie(2750),
        new Enemie(3000),
        new Enemie(3250),
        new Enemie(3750),
    ]

    backgroundObjects = [
        new BackgroundObject('../assets/img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('../assets/img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('../assets/img/3. Background/Layers/2. Floor/D1.png', 0),

        new BackgroundObject('../assets/img/3. Background/Layers/5. Water/D2.png', 936),
        new BackgroundObject('../assets/img/3. Background/Layers/3.Fondo 1/D2.png', 936),
        new BackgroundObject('../assets/img/3. Background/Layers/2. Floor/D2.png', 936),

        new BackgroundObject('../assets/img/3. Background/Layers/5. Water/D1.png', 936 * 2),
        new BackgroundObject('../assets/img/3. Background/Layers/3.Fondo 1/D1.png', 936 * 2),
        new BackgroundObject('../assets/img/3. Background/Layers/2. Floor/D1.png', 936 * 2),

        new BackgroundObject('../assets/img/3. Background/Layers/5. Water/D2.png', 936 * 3),
        new BackgroundObject('../assets/img/3. Background/Layers/3.Fondo 1/D2.png', 936 * 3),
        new BackgroundObject('../assets/img/3. Background/Layers/2. Floor/D2.png', 936 * 3),
    ]

    lightObjects = [

        new BackgroundObject('../assets/img/3. Background/Layers/1. Light/2.png', 0),
        new BackgroundObject('../assets/img/3. Background/Layers/1. Light/1.png', 0),
        new BackgroundObject('../assets/img/3. Background/Layers/1. Light/2.png', 936),
        new BackgroundObject('../assets/img/3. Background/Layers/1. Light/1.png', 936),
        new BackgroundObject('../assets/img/3. Background/Layers/1. Light/2.png', 936 * 2),
        new BackgroundObject('../assets/img/3. Background/Layers/1. Light/1.png', 936 * 2),
        new BackgroundObject('../assets/img/3. Background/Layers/1. Light/2.png', 936 * 3),
        new BackgroundObject('../assets/img/3. Background/Layers/1. Light/1.png', 936 * 3),
        new BackgroundObject('../assets/img/3. Background/Layers/1. Light/2.png', 936 * 4),

    ]
    ctx;
    canvas;
    keyboard;
    camera_x;

    constructor(canvas, keyboard) {
        canvas.width = 1200 * 1.3
        canvas.height = 480 * 1.3
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw()
        this.animateBackground();
        this.loadEnemies();
        this.setWorld();
    }

    draw() {
        this.deleteAllObjectsFromMap();
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.lightObjects);
        this.addObjectsToMap(this.enemies);
        if (this.character.flipDirection) {
            this.ctx.save();
            this.ctx.translate(this.character.width, 0)
            this.ctx.scale(-1, 1);
            this.character.x = this.character.x * - 1;
            this.addToMap(this.character);
            this.character.x = this.character.x * - 1;
            this.ctx.restore();
        } else {
            this.addToMap(this.character)
        }
        this.ctx.translate(-this.camera_x, 0)
        requestAnimationFrame(() => {
            this.draw();
        });

    }

    setWorld() {
        this.character.world = this;
    }

    deleteAllObjectsFromMap() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        })

    }
    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

    }

    animateBackground() {
        setInterval(() => {
            this.lightObjects.forEach(object => {
                object.x -= 0.1
            })
        }, 1000 / 60)
    }

    loadEnemies() {
        setInterval(() => {
            this.enemies.push(new Enemie)
        }, 5500)
    }
} 