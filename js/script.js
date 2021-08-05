const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.clientWidth;
const height = canvas.clientHeight;
const ballRadius = 25;

const gravity = 5;
let impulse = 50;

let ballX = width / 2;
let ballY = height - ballRadius;

function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
}

function drawBall(ballX, ballY) {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    ctx.stroke();
}

setInterval(() => {
    clearCanvas();

    if (impulse===0 && Math.random() * 10 < 1 ) {
        impulse = Math.random() * 60;
    }

    if (ballY - impulse < height - ballRadius) {
        ballY -= impulse;
        impulse -= gravity;
    } else {
        ballY = height - ballRadius;
        impulse = -impulse * 0.8;
        if (Math.abs(impulse) < ballRadius) {
            impulse = 0;
        }
    }


    drawBall(ballX, ballY);
    console.log(`${ballX} ${ballY} ${Math.round(impulse)}`);
}, 25);
