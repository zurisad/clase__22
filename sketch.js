var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;
var fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");//Hola Zuri, aquí te quite una imagen porque era de un ada diferente
    
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice

	fairy = createSprite(550,510);
	fairy.addAnimation("animacion",fairyImg);//Aquí te corregí porque decía addImage y era Animation, ademas le puse la etiqueta animacion
    fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	var starBody_options={restitution:0.5, isStatic:true}
	starBody = Bodies.circle(650 , 30 , 5 , starBody_options );//Aquí solo decía options y era starBoby_options como pusiste arriba
	World.add(world, starBody);

	/*var fairy_options={restitution:0.5, isStatic:true}
	fairy = Bodies.rectangle(100 , 200 , 50, 50, fairy_options );//Aquí era lo mismo no solo se llamaba options
	World.add(world, fairy);*///ESTO LO PUSE EN COMENTARIOS PORQUE ERA LO QUE NO PERMITÍA QUE EL HADA SE MOVIERA
	                            //DENTRO DE SUS OPCIONES EXTRAS ESTA ISSTATIC: TRUE POR ESO EL HADA NO PODÍA MOVERSE

	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if (starBody.position.y > 470 &&(fairy.x>510&&fairy.x<560)){//Aqui solo te agregue la posicion en X para el hada, para que sostenga la estrella solo con la mano
     Matter.Body.setStatic(starBody,true);
}
  drawSprites();
  keyPressed();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	//escribe el código para mover al hada a la izquierda y derecha
	if (keyDown(RIGHT_ARROW)){
		fairy.x = fairy.x +5;
	  }
	if (keyDown(LEFT_ARROW)){
		fairy.x = fairy.x -5;
	  }//Yo utilice el valor 5, esta parte estaba bien
}
