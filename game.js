let world;
let canvas;
let keyboard = new Keyboard;

function init() {
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


document.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key == 'ArrowLeft') {
        keyboard.LEFT = true;
    };
    if (event.key == 'ArrowRight') {
        keyboard.RIGHT = true;
    };
    if (event.key == 'ArrowUp') {
        keyboard.UP = true;
    };
    if (event.key == 'ArrowDown') {
        keyboard.DOWN = true;
    };
    if (event.key == 'Enter') {
        keyboard.ENTER = true;
    };
    if (event.key == 'd') {
        keyboard.D = true;
    };
})
document.addEventListener('keyup', (event) => {
    console.log(event.key);
    if (event.key === 'ArrowLeft') {
        keyboard.LEFT = false;
    };
    if (event.key === 'ArrowRight') {
        keyboard.RIGHT = false;
    };
    if (event.key === 'ArrowUp') {
        keyboard.UP = false;
    };
    if (event.key === 'ArrowDown') {
        keyboard.DOWN = false;
    };
    if (event.key === 'Enter') {
        keyboard.ENTER = false;
    };
    if (event.key === 'd') {
        keyboard.D = false;
    };
})


