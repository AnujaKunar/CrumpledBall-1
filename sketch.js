
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin1, dustbin2, dustbin3, ground;

function setup() {
  createCanvas(1400, 400);
  
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

  paper= new Paper(200,450,40);
  dustbin1 = new Dustbin(1200,350,200,20);
	dustbin2 = new Dustbin(1300,310,20,100);
  dustbin3 = new Dustbin(1100,310,20,100);

  ground = new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.psition,{x:85, y:-85});
	}
}

