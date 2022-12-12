function init() {
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById('canvas');
    canvas.width = 720
    canvas.height = 480
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = '../assets/img/3. Background/Dark/1.png';

    img.onload = () => {

        // ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 1920, 1080);
        ctx.drawImage(img, 0, 0, 720, 480);

    }

}