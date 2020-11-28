
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Dustbin,binImg;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bin = createSprite(964,520,20,20);

	bin = new Dustbin(902,505,10,120);
	bin2 = new Dustbin(962,565,130,10);
	bin3 = new Dustbin(1024,505,10,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



