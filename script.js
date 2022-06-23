const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d'); //draws on context, not on html element itself directly
canvas.width = window.innerWidth; //sizing up the canvas with the size of window
canvas.height = window.innerHeight;
ctx.strokeStyle = "blue";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 0;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) return; //stops the fn when they are not moused down 

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX,lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if(hue >= 360) {
        hue = 0;
    }
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseout", () => isDrawing = false);