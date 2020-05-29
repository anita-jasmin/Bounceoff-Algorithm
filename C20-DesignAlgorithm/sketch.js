
var rect1,rect2,rect3,rect4;
function setup() {
  createCanvas(800,800);
  rect1=createSprite(400, 600, 50, 50);
  rect2=createSprite(400,100,50,50);
  rect3=createSprite(200,400,50,50);
  rect4=createSprite(600,400,50,50);
  rect1.shapeColor="green";
  rect2.shapeColor="blue";
  rect3.shapeColor="red";
  rect4.shapeColor="yellow";
  rect1.velocityY=-3;
  rect2.velocityY=+3;
  rect3.velocityX=3;
  rect4.velocityX=-3;
}

function draw() {
  background(0);  
  drawSprites();
  //bounceOff(rect1,rect2);
  bounceOff(rect3,rect4);
  bounceOff(rect1,rect3);
  
}
function bounceOff(ob1,ob2){
  if(
    ob1.x-ob2.x<ob1.width/2 + ob2.width/2 &&
    ob2.x-ob1.x<ob2.width/2+ob1.width/2)
  {
    ob1.velocityX=ob1.velocityX*(-1);
    ob2.velocityX=ob2.velocityX*(-1);
  }
  if(ob1.y-ob2.y<ob1.height/2+ob2.height/2  &&
    ob2.y-ob1.y<ob2.height/2+ob1.height/2)
    {
      ob1.velocityY=ob1.velocityY*(-1);
      ob2.velocityY=ob2.velocityY*(-1);
    }
}