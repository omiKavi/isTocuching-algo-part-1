var movingBlock, fixedBlock;

function setup() {
  createCanvas(800,400);

  movingBlock = createSprite(400, 200, 50, 50);
  fixedBlock = createSprite(460, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  movingBlock.x = mouseX;
  movingBlock.y = mouseY;

  if(fixedBlock.x - movingBlock.x < fixedBlock.width/2+movingBlock.width/2 &&
    movingBlock.x - fixedBlock.x < fixedBlock.width/2+movingBlock.width/2 &&
    fixedBlock.y - movingBlock.y < fixedBlock.height/2+movingBlock.height/2 &&
    movingBlock.y - fixedBlock.y < fixedBlock.height/2+movingBlock.height/2
    ){
    movingBlock.shapeColor = "blue";
    fixedBlock.shapeColor = "blue";
  }else{
    movingBlock.shapeColor = "red";
    fixedBlock.shapeColor = "red";
  }

  drawSprites();
}