
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var emgine,world,paper;
var box1,box2,box3;
var dust;
function preload(){
dust=loadImage("dustbinpic/dustbingreen.png");
}
function setup() {
	createCanvas(800, 400);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
  


 paper=new Paper(100,300,40);
 ground= new Ground(400,380,800,20);

 box1=createSprite(550,320,20,90);
 box1.shapeColor=color("white")
 box1.addImage(dust);
box1.scale=0.5

 /*box2=createSprite(620,370,140,40);
 box2.shapeColor=color("white")

 box3=createSprite(690,320,20,90);
 box3.shapeColor=color("white")*/
 
 Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPresssed()
  drawSprites();

  paper.display();
  ground.display();
}
  
function keyPresssed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{
			x:11,
			y:-13
		}
			
			

		);
	}
}
 




