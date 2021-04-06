const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var mango1
var backgroundImg,platform;

function preload()
{
	backgroundImg = loadImage("sprites/blue bg.png");	
}

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

	//Create the Bodies Here.
    mango1 = new Mango();
	mango2 = new Mango();
	mango3 = new Mango();
    mango4 = new Mango();
	mango5 = new Mango();
	mango6 = new Mango();
	mango7 = new Mango();
	mango8 = new Mango();
	mango9 = new Mango();
	mango10 = new Mango();
	mango11 = new Mango();
	mango12 = new Mango();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  Engine.update(engine);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango10.display();
  mango11.display();
  mango12.display();

  drawSprites();
 
}



