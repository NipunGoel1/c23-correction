var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,border1,border2,border3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	

packageSprite=createSprite(width/2, 80, 10,10);
packageSprite.addImage(packageIMG)
packageSprite.scale=0.2

helicopterSprite=createSprite(width/2, 200, 10,10);
helicopterSprite.addImage(helicopterIMG)
helicopterSprite.scale=0.6

groundSprite=createSprite(width/2, height-35, width,40);
groundSprite.shapeColor=color(255)


engine = Engine.create();
world = engine.world;

packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true,friction:10,density:1,});
World.add(world, packageBody);


//Create a Ground

ground = Bodies.rectangle(width/2, 740, width, 40 , {isStatic:true} );
World.add(world, ground);

border1 = new Basket(275,645,25,200);
  border2 = new Basket(501,645,25,200);
  border3 = new Basket(387,750,200,25);


	Engine.run(engine);

  
  

}


function draw() {
  if(packageSprite.y<400){
    packageSprite.x = helicopterSprite.x
  }
  rectMode(CENTER);
  background(2);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 border1.display();
 border2.display();
 border3.display();
 moveLeft();
 moveRight();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}

function moveLeft(){
  if(keyCode === LEFT_ARROW){
    helicopterSprite.x = helicopterSprite.x - 10;
    translation={x:-10,y:0} 
    Matter.Body.translate(packageBody, translation) 


  }

}
function moveRight(){
  if(keyCode === RIGHT_ARROW){
    helicopterSprite.x = helicopterSprite.x + 10;
    translation={x:+10,y:0}  
    Matter.Body.translate(packageBody, translation) 

  }
  }



