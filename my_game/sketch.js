var gymImage;

function preload(){
  
  backgroundImage = loadImage("Images/gymimage.jpg");
  skinnyImage = loadImage("Images/skinny_clipart.png");
  }

//Function to set initial environment
function setup() {
  createCanvas(1435,815);
  edges = createEdgeSprites();  
  background = createSprite(750,400,1000,100);
  background.addImage("background",backgroundImage);
  background.scale = 2.2;
  skinny = createSprite(100,742,1,1);
  skinny.addImage("skinny",skinnyImage);
  skinny.scale = 0.15;
}

// function to display UI
function draw() {
  if(keyDown("space")){
    skinny.velocityY = -10;}
    skinny.velocityY = skinny.velocityY + 0.5;
  
    //stop trex from falling down
    skinny.collide(edges[3]);
    background.velocityX = -(2);
    if (background.x < 370){
      background.x = 750;
    }
drawSprites();
  }


