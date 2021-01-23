var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];

var particles;
var gameState="end";
var divisionHeight=300;
var score = 0;
var count = 0;
function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 
function draw() {
  background("black");
  Engine.update(engine);

  textSize(20)
  text("Score : "+score,20,30);

  textSize(25)
  text("500 ",20,450);

  textSize(25)
  text("500 ",100,450);

  textSize(25)
  text("500 ",180,450);

  textSize(25)
  text("500 ",260,450);

  textSize(25)
  text("100 ",340,450);

  textSize(25)
  text("100 ",420,450);

  textSize(25)
  text("100 ",500,450);

  textSize(25)
  text("200 ",580,450);

  textSize(25)
  text("200 ",660,450);

  textSize(25)
  text("200 ",740,450);

  
  mousePressed(); 
  //if (count>=5)  gameState ="end";

  if (particle=null){
    particle.display();

    if(particle.body.position.X>760){

      if(particle.body.position.x<300){
         score=score+++500;
         particle=null;
      }

   if(particle.body.position.x>300 && particle.body.position.x<500){ 
     score=score+100; 
     particle=null; 
    }

   if(particle.body.position.x<500){ 
     score=score+200;
     particle=null;
    }
}
}
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));

   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){

    if(gameState!== "end"){
      particle=new Particle(mouseX,10,10,10);
      textSize(45)
      text("GameOver ",400,350);
    }

}