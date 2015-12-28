var SIZE = 40;
var EDGE_SIZE = 3;
var colors = [
    "yellow",
    "DarkOrange",
    "blue",
    "red",
    "green",
    "white"
];

function draw_cube() {
    var X_OFFSET = (canvas.width - 12 * SIZE) / 2;
    var Y_OFFSET = (canvas.height - 9 * SIZE) / 2 + 3 * SIZE;
    var PERSP = 1;
    var width = canvas.width - 2 * X_OFFSET;
    
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    //ctx.rect(20,20,500,100);
    //ctx.fillStyle="red";
    //ctx.fill();

    draw_side(X_OFFSET + 3 * SIZE, Y_OFFSET - 3 * SIZE, 0, 1);
    draw_side(X_OFFSET, Y_OFFSET, 1, 1);
    draw_side(X_OFFSET + 3 * SIZE, Y_OFFSET, 2, 1);
    draw_side(X_OFFSET + 6 * SIZE, Y_OFFSET, 3, 1);
    draw_side(X_OFFSET + 9 * SIZE, Y_OFFSET, 4, 1);
    draw_side(X_OFFSET + 3 * SIZE, Y_OFFSET + 3 * SIZE, 5, 1);
    //draw_side(X_OFFSET + 3 * SIZE, Y_OFFSET, 2, 1);
    //draw_side(X_OFFSET + 3 * SIZE, Y_OFFSET + 3 * SIZE, 4, 1);
    //draw_side(X_OFFSET + (6 + 1.5) * SIZE, Y_OFFSET - 1.5 * SIZE, 5, PERSP);
/*
    ctx.beginPath();
    ctx.moveTo(X_OFFSET + 3 * SIZE, Y_OFFSET);
    ctx.lineTo(X_OFFSET + (6 + 1.5) * SIZE - 3 * SIZE * PERSP, Y_OFFSET - 1.5 * SIZE);
    ctx.lineTo(X_OFFSET + (6 + 1.5) * SIZE, Y_OFFSET - 1.5 * SIZE);

    ctx.moveTo(X_OFFSET + 6 * SIZE, Y_OFFSET);
    ctx.lineTo(X_OFFSET + (6 + 1.5) * SIZE, Y_OFFSET - 1.5 * SIZE); // good

    ctx.moveTo(X_OFFSET + 6 * SIZE, Y_OFFSET + 3 * SIZE);
    ctx.lineTo(X_OFFSET + (6 + 1.5) * SIZE, Y_OFFSET - 1.5 * SIZE + 3 * SIZE * PERSP); // good

    ctx.moveTo(X_OFFSET + (4 + 0.5) * SIZE - SIZE * PERSP, Y_OFFSET - 0.5 * SIZE);
    ctx.lineTo(X_OFFSET + (6 + 0.5) * SIZE, Y_OFFSET - 0.5 * SIZE);
    ctx.lineTo(X_OFFSET + (6 + 0.5) * SIZE, Y_OFFSET + 3 * SIZE - 0.5 * SIZE / PERSP);

    ctx.stroke();
    */
}

function draw_one(x, y, size, idx) {
    ctx.beginPath();
    ctx.rect(x + EDGE_SIZE, y + EDGE_SIZE, size - 2 * EDGE_SIZE, size - 2 * EDGE_SIZE);
    ctx.fillStyle = colors[cube[idx]];
    ctx.fill();
}

function draw_side(x, y, idx, p) {
    size = 3 * SIZE * p;
    ctx.beginPath();
    ctx.rect(x, y, size, size);
    ctx.fillStyle = "black";
    ctx.fill();

    idx = idx * 9;
    size = SIZE * p;
    draw_one(x, y, size, idx++);
    draw_one(x + SIZE, y, SIZE, idx++);
    draw_one(x + 2 * SIZE, y, SIZE, idx++);

    draw_one(x, y + SIZE, size, idx++);
    draw_one(x + SIZE, y + SIZE, SIZE, idx++);
    draw_one(x + 2 * SIZE, y + SIZE, SIZE, idx++);

    draw_one(x, y + 2 * SIZE, size, idx++);
    draw_one(x + SIZE, y + 2 * SIZE, SIZE, idx++);
    draw_one(x + 2 * SIZE, y + 2 * SIZE, SIZE, idx++);
}
