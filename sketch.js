var paper,trash1,trash2,trash3;
var ground,groundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ground = new Ground(width/2,610,width,20);

paper = new Paper(100,585,30);

trash1 = new Trash(590,560,10,80);
trash2 = new Trash(720,560,10,80);
trash3 = new Trash(655,595,140,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  trash1.display();
  trash2.display();
  trash3.display();

  paper.display();

  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x : 200,y : -100})
}

}


