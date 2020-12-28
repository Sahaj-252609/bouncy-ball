const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  //creating physics engine
  engine = Engine.create();
  //create a world
  world = engine.world;

  var ground_options = {
    isStatic : true,
  }
  //creating a ground 
  ground = Bodies.rectangle(200,390,400,20, ground_options);
  //adding ground to the world
  World.add(world,ground);
 
 var ball_options = {
   restitution : 1,
 }
  //creating a ball
  ball= Bodies.circle(200,200,20,ball_options);
  //adding to world
  World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x, ground.position.y,400, 20 );
  fill("white");
  strokeWeight(3);
  stroke("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);
}