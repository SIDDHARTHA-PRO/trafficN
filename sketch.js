var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);

  wall=createSprite(900, 200, 50, height);
wall.shapeColor=(20,20,20)
  speed=random(55,90)
weight=random(400,1500)
car.velocityX=speed;
}
console.log(wall.x-car.x)
function draw() {
  background("red"); 

  if(wall.x-car.x<car.width/2+wall.width/2){
car.shapeColor="green"
car.velocityX=0
var deformation=0.5*weight*speed*speed/22500;

if(deformation>180)
{
  car.shapeColor=color("red");
}

if(deformation<180 && deformation>100)
{
car.shapeColor=color("yellow");
}

if(deformation<100)
{
  car.shapeColor=color("green");
}



  }


  drawSprites();
}