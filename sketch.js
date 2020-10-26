const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,ground;
var ball;
var rope;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;

function setup(){
createCanvas(1200,800);
engine = Engine.create();
world = engine.world
ground = new Ground(600,780,2000,10);

box1 = new Box(900,100,100,70);
box2 = new Box(900,100,100,70);
box3 = new Box(900,100,100,70);
box4 = new Box(900,100,100,70);
box5 = new Box(900,100,100,70);

ball = new Ball(200,400,80,80);

rope = new Rope(ball.body,{x: 500,y: 300})

}

function draw(){
background(0);
Engine.update(engine)


ground.display();

ball.display();

rope.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
//box1.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY})

}