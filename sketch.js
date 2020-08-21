//creating variables for monkey,background and invisible ground
var monkey,monkeyAnimation;

var backGround,backGroungImage,invisibleGround;

//creating variables for bananas,obstacle and score
var bananaImage,ObstacleImage;

var bananaGroup,ObstacleGroup;

var score;

function preload(){
  //adding animation for monkey
  monkeyAnimation = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkrey_10.png");

  //adding animation for background,banana and obstacle
  backGroungImage=loadImage("jungle.png");

  bananaImage=loadImage("banana.png");

  ObstacleImage=loadImage("stone.png");
}

function setup() {
  
  //creating monkey and giving animation
  monkey = createSprite(50,350,10,10);
 
  monkey.addAnimation("monkey_running",monkeyAnimation);
  monkey.scale=0.3;
  
  //creating moving background and adding animation
  backGround = createSprite(200,200,400,400);
  
  backGround.addImage("screen",backGroundImage);
  backGround.scale=2;
  
  backGround.velocityX=-2;
  backGround.x=backGround.width/2;
  
  //creating invisible ground and making it invisible
  invisibleGround = createSprite(200,380,400,10);
  invisibleGround.visible=false;
  
  //creating score
  score = 0;
}

function draw() {
  //clear the screen
  background("turqouise");
  
  //reseting the background
  if(backGround.x < 0)
  {
    backGround.x=backGround.width/2;
  }
  
  //adding and adjusting text
  stroke("white");
  fill("white");
  textSize(20);
  
  text("Score :"+score,100,50);
  
  //increasing score if monkey is touching banana
  if(bananaGroup.isTouching(monkey))
  {
     score=score+2;
   
     bananaGroup.destroyEach();
  }
  
  //increase monkey score when it touches bananas
  switch(score)
  {
    case 10 : monkey.scale=0.5;
    break;
    case 20 : monkey.scale=0.7;
    break;
    case 30 : monkey.scale=0.9;
    break;
    case 40 : monkey.scale=0.11;
    break;
    case 60 : monkey.scale=0.13;
    break;
    case 70 : monkey.scale=0.15;
    break;
    case 80 : monkey.scale=0.17;
    break;
    case 90 : monkey.scale=0.19;
    break;
    case 100 : monkey.scale=0.21;
    break;
  }
  
  //when obstacles is touching monkey ,monkey scale back to     starting scale
  if(obstacleGroup.isTouching(monkey))
  {
     monkey.scale=0.3; 
  }
  
  //make monkey collide with invisibke ground
  monkey.collide(invisibleGround);
  
  drawSprites();
}

  //code for creating bananas
  function spawnBananas()
  {
    if(frameCount % 80 === 0)
    {
      var banana = createSprite(400,200,10,10);
      //adding animation and setting scale

      banana.addAnimation("banana",bananaImage);
      banana.scale=0.5;

      //adding velocity
      banana.velocityX=-3;

      //setting Y position to ranodm
      banana.y=Math.round(random(120,200));

      //setting a lifetime
      banana.lifetime=134;

      //adding group
      bananaGroup.add(banana);                          
    }
  }

  //code for making obstacles
  function spawnObstacles()
  {
    if(frameCount %120 === 0)
    {
      var obstacle = createSprite(200,360,10,10);

      //adding animtion and setting scale
      obstacle.addImage("obstacle",ObstacleImage);
      obstacle.scale=0.15;

      //adding velocity
      obstacle.velocityX=-4;

      //adding lifeime
      obstacle.lifetime=130;

      //adding a group
      ObstacleGroup.add(obstacle);
    } 
  }