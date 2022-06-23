const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d'); //draws on context, not on html element itself directly
canvas.width = window.innerWidth; //sizing up the canvas with the size of window
canvas.height = window.innerHeight;
ctx.strokeStyle = "blue";
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if(!isDrawing) return; //stops the fn when they are not moused down 
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX,lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseout", () => isDrawing = false);