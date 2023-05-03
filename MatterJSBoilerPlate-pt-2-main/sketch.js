
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ground_options ={
		isStatic: true
	  };

	var ball_options = {
		restitution: 0.75,
	}


	//Crie os Corpos aqui.
	ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ball2 = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball2);

  ground= Bodies.rectangle(200,390,400,20,ground_options);

  World.add(world, ground);


	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  
  background(0);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball.position.y,20);
  drawSprites();
 
}



