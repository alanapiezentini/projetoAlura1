let cor; 
let posX;
let posY;
let raioCirc;

function setup() {
  
  createCanvas(400, 400);
  background("pink");
  
  corAleatoria = color(random(0, 255), random(0, 255), random(0, 255))
  raioCirc = random(10, 100)
  posX = random((0 + (raioCirc/2)), (400 - (raioCirc/2)))
  posY = random((0 + (raioCirc/2)), (400 - (raioCirc/2)))
  
}

function draw() {
  
  fill("white");
  stroke(corAleatoria);
  
  if(mouseIsPressed) {
    circle(posX, posY, raioCirc);
  }
  
    if(mouseIsPressed) {
    if(mouseX < posX) {
      posX--;
    }
    if(mouseX > posX) {
      posX++;
    }

    if(mouseY < posY) {
      posY--;
    }
    if(mouseY > posY) {
      posY++;
    }
  }
}
