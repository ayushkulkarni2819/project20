var car,wall;
var weight,speed;
var deformation

function setup() {
  createCanvas(1600,400);
  car = createSprite(0,200,20,20);
  car . velocityX =speed;
  wall =createSprite(1500, 200, 60, height/2);
  weight = random(55,90);
  speed = random(400,1100);
}

function draw() {
  background("black");
  
 
  if(wall.x-car.x < car.width/2+wall.width/2 )
  {
   car . velocityX = 0;
   deformetion=0.5*weight*speed*speed/22509;

   if (deformation>180)
   {
     car.shapeColor= color(225,0,0);
   }
    if (deformation<180 && deformation >100) {
     car.shapeColor=color(230,230,0);
   } 
    if (deformation<100) {
     car.shapeColor= color(0,225,0);
   } 
     
   }
drawSprites();
  }
  
  
  
