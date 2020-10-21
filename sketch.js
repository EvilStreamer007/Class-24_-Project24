
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var border1;
var border2;
var border3;

var ground;


function setup() {
	var canvas = createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(200,200);
	
	border1 = new dustbin(400,200,100,PI/2);
	border2 = new dustbin(500,200,100,PI/180);
	border3 = new dustbin(600,200,100,PI/2);

	ground = createSprite(400,650,800,5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  border1.display();
  border2.display();
  border3.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	 if (keyCode === UP_ARROW){
		 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	 }
}


