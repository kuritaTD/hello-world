var canvas;

function setup(){
  createCanvas(1280, 720);

  canvas.style('z-index', '-1');
}

function draw(){
    background(0);
    fill(255, 0, 0);
    rect(100, 100, 100, 100);
}
