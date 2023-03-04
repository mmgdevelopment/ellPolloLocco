let world;
let canvas;
let keyboard = new Keyboard;

function init() {
    /** @type {HTMLCanvasElement} */
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    canvas.addEventListener('mousedown', (e) => {
        if (world.gameStarted) return;
        getCursorPosition(canvas, e)
    })
    canvas.addEventListener('mousemove', (e) => {
        if (world.gameStarted) return;
        addHowerEffect(canvas, e);
    })
}



document.addEventListener('keydown', (event) => {
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
    if (event.key == 'Enter') {
        world.startGameRequest = true;
        canvas.style.cursor = 'unset';
    };
})
document.addEventListener('keyup', (event) => {
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

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if ((x > 600 && x < 970) && y > 265 && y < 370) {
        world.startGameRequest = true;
        canvas.style.cursor = 'unset';
    }
}
function addHowerEffect(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if ((x > 580 && x < 992) && y > 250 && y < 382) {
        canvas.style.cursor = 'pointer';
    } else {
        canvas.style.cursor = 'unset';
    }
}




