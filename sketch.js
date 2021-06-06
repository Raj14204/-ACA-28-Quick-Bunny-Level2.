var player;
var target;
var edges;
var snakes;

function setup() {
  createCanvas(1000,800);
  snakesgroup= new Group();
  edges=createEdgeSprites();
  

  player = createSprite(40,550,30,30); 
target = createSprite(900,40,30,30);
obs1 = createSprite(300,120,100,20);
obs1.velocityX = 5;
obs2 = createSprite(300,320,100,20);
obs2.velocityX = -5;
obs1 = createSprite(300,120,100,20);
obs1.velocityX = 5;
obs2 = createSprite(300,320,100,20);
obs2.velocityX = -5;
obs3 = createSprite(165,120,100,20);
obs3.velocityX = 5;
obs4 = createSprite(20,120,100,20);
obs4.velocityX = 5;
obs5 = createSprite(180,320,100,20);
obs5.velocityX = -5;
obs6 = createSprite(0.2,320,100,20);
obs6.velocityX = -5;
target.shapeColor = "blue";
obs2.shapeColor = "red";
obs1.shapeColor = "red";
obs3.shapeColor = "red";
obs4.shapeColor = "red";
obs5.shapeColor = "red";
obs6.shapeColor = "red";
player.shapeColor="pink"
}

function draw() {
   background("green");
 genratesnake();
 for (i=0;i<(snakesgroup).length;i++){
   var temp = (snakesgroup).get(i);
   if (player.isTouching(temp)){
    player.X=40;
    player.Y=550;
  }
} 
 
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);
obs3.bounceOff(edges[1]);
obs3.bounceOff(edges[0]);
obs4.bounceOff(edges[1]);
obs4.bounceOff(edges[0]);
obs5.bounceOff(edges[1]);
obs5.bounceOff(edges[0]);
obs6.bounceOff(edges[1]);
obs6.bounceOff(edges[0]);






if(keyDown("up")){
  player.y=player.y-3;
}
if(keyDown("down")){
  player.y=player.y+3;
}
if(keyDown("left")){
  player.x=player.x-3;
}
if(keyDown("right")){
  player.x=player.x+3;
}
if(player.isTouching(target)){
  v1=textSize(40);
  
  var v1=text("YOU WIN",200,200);
}
if(player.isTouching(obs1)){
  obs1.velocityX=0;
  text("YOU LOSE",200,200);
  
}
if(player.isTouching(obs2)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs3)){
  obs3.velocityX=0;
  text("YOU LOSE",200,200);
}if(player.isTouching(obs4)){
  obs4.velocityX=0;
  text("YOU LOSE",200,200);
}if(player.isTouching(obs5)){
  obs5.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs6)){
  obs6.velocityX=0;
  text("YOU LOSE",200,200);
}

  drawSprites();
   
}

function genratesnake(){
  if(frameCount % 30===0){
    console.log(frameCount);
    snakes=createSprite(600,random(70,550),random(30,120),5);
   snakes.shapeColor="yellow";
   snakes.velocityX=random(-4,4);
   snakes.velocityY=random(-4,4);
   snakesgroup.add(snakes);

}
}
