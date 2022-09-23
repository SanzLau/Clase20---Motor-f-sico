const Engine = Matter.Engine; // constante del motor físico
const World = Matter.World; //Constante del mundo virtual
const Bodies = Matter.Bodies; //constante objetos
const Body = Matter.Body;

let engine; 
let world;
var ball;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create(); //Crear el motor físico
  world = engine.world; //Crea el mundo

  //Propiedades físicas que se le dara a ball
  var ball_options={
    restitution: 0.95, //Rebote
    frictionAir: 0.01  //Fricción con el Aire
  }

  ball = Bodies.circle(100,10,20,ball_options); //creacion de un cuerpo (ball).
  World.add(world,ball); // una vez creado se agrega al mundo.

  //SUELO porpiedades
 ground_options= {
  isStatic: true,

 }

  ground = Bodies.rectangle(10,380,400,20, ground_options); //creación de un cuerpo (ground).
  World.add(world,ground); // una vez creado se agrega al mundo.


}

function draw() 
{
  background("black");
  
Engine.update(engine); //Actualiza el motor físico

ellipse(ball.position.x, ball.position.y,20);  //muestra el cuerpo de "ball" en el juego.
rect(ground.position.x, ground.position.y,400,20); //muestra el cuerpo de "ground" en el juego.

  
 
}

