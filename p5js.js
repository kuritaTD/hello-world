// a shader variable

let theShader;

function preload(){

  // load the shader

  theShader = loadShader('libries/waterColor.vert', 'libries/waterColor.frag');

}

var canvas;

function setup() {

  // shaders require WEBGL mode to work

  canvas = createCanvas(windowWidth,2000, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  noStroke();
  text('kurita', 100, 100);
}

function draw() {


    ellipse(random(width), random(height), 100, 100);
  // shader() sets the active shader with our shader

  shader(theShader);
  theShader.setUniform('resolution', [width, height]);
  theShader.setUniform('mouse', [mouseX, mouseY]);
  theShader.setUniform('time', frameCount * 0.01);

  // rect gives us some geometry on the screen

  rect(0,0,width,height);



  // print out the framerate

  //  print(frameRate());


}

function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}



/*// this variable will hold our shader object
let theShader;

function preload(){
  // load the shader
  theShader = loadShader( 'libries/waterColor.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  // shader() sets the active shader with our shader
  shader(theShader);
  theShader.setUniform('resolution', [width, height]);
  theShader.setUniform('time', frameCount*0.01);
  // rect gives us some geometry on the screen
  rect(0,0,width, height);
}

*/



// this variable will hold our shader object
/*let theShader;

function preload(){
  // load the shader
  theShader = loadShader('libries/waterColor.vert', 'libries/waterColor.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  // shader() sets the active shader with our shader
  shader(theShader);

  // rect gives us some geometry on the screen
  rect(0,0,width, height);
}
*/
/*
var cols,cows;
var scl = 30;
var w = 3000;
var h = 2000;

var mouseSpeed;
var flying = 0;

var terrain = [];
var img;

var canvas;
function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  cols = w / scl;
  rows = h/ scl;

  img = loadImage("https://image.freepik.com/free-photo/cement-wall-texture-background_76539-221.jpg");
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
 background(0,120);
  flying -= 0.005;
  print(map(mouseY,height,0,0.01,0.6));
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      //tie -50 , 50 to progress
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -200, 200);
      xoff += 0.1;
    }
    yoff += 0.1;
  }

  orbitControl();

  translate(0, 0);
  rotateX(PI/3);
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  fill(200,200,200,200);
  ambientLight(200,200,200);
  // texture(img);
  specularMaterial(0,127,255,80);
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl+sin(frameCount), y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
}*/

/*var canvas;
var mic;

function preload(){
  waterColor = loadShader('libries/waterColor.frag');
}

function windwoResized(){
  resizeCanvas(windowWidth, windowHeight,WEBGL);
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  //mic = new p5.AudioIn();
  //mic.start();
  //background(255);
  waterColor.setUniform('time', frameCount*0.01);
  waterColor.setUniform('resolution', [width,height]);
}

function draw(){
  text("Kurita", pmouseX, pmouseY);
  shader(waterColor);
  //var vol = mic.getLevel();
  //ellipse(width/2, height/2,  vol*width );
}
*/
