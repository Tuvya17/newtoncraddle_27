
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	var engine, world
}

function setup() {
	createCanvas(800, 700);
  
  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof = new Roof(400,200,300,40);
  
  bob1 = new Bob(280,450,30);
  bob2 = new Bob(340,450,30);
	bob3 = new Bob(400,450,30);
	bob4 = new Bob(460,450,30);
	bob5 = new Bob(520,450,30);
  rope1 = new Rope(bob1.body,roof.body,-115,0);
  rope2 = new Rope(bob2.body,roof.body,-55,0);
  rope3 = new Rope(bob3.body,roof.body,0,0);
  rope4 = new Rope(bob4.body,roof.body,55,0);
  rope5 = new Rope(bob5.body,roof.body,115,0);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  
  

  
 
}



function keyPressed(){

  if(keyCode===38){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-20});

  }
}



