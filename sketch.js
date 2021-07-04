var ship, shipImage2, edges;
var sea, seaImg; 

function preload(){
shipImage2 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg= loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,160,400,500);
  sea.addImage("sea", seaImg);
  sea.x = sea.width/2;
  
  ship = createSprite(100,250,5,10);
  ship.addAnimation("floating", shipImage2);
  ship.scale = 0.25
}

function draw() {
  background("skyblue");

  sea.velocityX = -2
  console.log(sea.x);
 
 if(sea.x < 0){
   sea.x = sea.width/2;
 }
  drawSprites();
}