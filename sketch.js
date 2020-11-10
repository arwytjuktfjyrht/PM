var tree, boy, ground, stone
var treeImg, boyImg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	treeImg=loadImage("tree.png");
	boyImg=loadImage("boy.png");

	
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	stone=Bodies.circle(300,400,20,20);
	World.add(world, stone)

	boy=createSprite(300,550);
	boy.addImage(boyImg);
	boy.scale=0.2

	tree=createSprite(1200,350);
	tree.addImage(treeImg);
	tree.scale=0.5;

	chain = new Slingshot(stone.body,{x:200,y:100});

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}


