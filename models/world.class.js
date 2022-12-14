class World {
    character = new Character();
    enemies = [
        new Enemie(10),
        new Enemie(200),
        new Enemie(300),
        new Enemie(400),
        new Enemie(500),
    ]
    backgrounds = [
        new Background('../assets/img/3. Background/Layers/5. Water/D1.png'),
        new Background('../assets/img/3. Background/Layers/3.Fondo 1/D1.png'),
        new Background('../assets/img/3. Background/Layers/2. Floor/D1.png'),


    ]
    ctx;
    canvas;

    constructor(canvas) {
        this.canvas = canvas;
        canvas.width = 720
        canvas.height = 480
        this.ctx = canvas.getContext('2d');
        this.draw()
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.backgrounds.forEach(background => {
            this.ctx.drawImage(background.img, background.x, background.y, background.width, background.height)
        })

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        requestAnimationFrame(() => {
            this.draw();
        });

    }


} 