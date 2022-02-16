
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bola;
var solo;
var paredeDir, paredeEsq;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var bola_options = {
		isStatic: false,
		restituation: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	solo = new Solo(400,700, 800, 35);
	paredeDir = new Solo(600,632, 10, 100);
	paredeEsq = new Solo(490,632, 10, 100);

	Engine.run(engine);

  
	bola = Bodies.circle(50, 10, 15, bola_options);
      World.add(world, bola);

		
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

	Engine.update(engine);
	solo.mostrar();
	paredeDir.mostrar();
	paredeEsq.mostrar();

	ellipseMode(RADIUS);
	ellipse(bola.position.x, bola.position.y, 15)
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bola, {x: 0, y: 0}, {x: 17, y: 3});
	}
}



