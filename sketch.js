var apple
var ground
var edges
var wall1, wall2, wall3, wall4, wall5, wall6
var wallsGroup;
var charger, chargerImage
var rockImage
function setup() {
  createCanvas(1200,600);
  edges=createEdgeSprites()
  apple=createSprite(100, 350, 50, 50);
  ground=createSprite(600, 580, 1200, 20);
  wall1=createSprite(360,490,150,50)
  wall1.addImage(rockImage)
  wall1.scale=.3
  wall2=createSprite(605,490,150,200)
  wall2.addImage(rockImage)
  wall2.scale=.3
  wall3=createSprite(450,70,100,400)
  wall3.addImage(rockImage)
  wall3.scale=.3
  wall4=createSprite(480,280,165,30)
  wall4.addImage(rockImage)
  wall4.scale=.3
  wall5=createSprite(860,220,165,30)
  wall5.addImage(rockImage)
  wall5.scale=.3
  wall6=createSprite(1200,160,165,30)
  wall6.addImage(rockImage)
  wall6.scale=.3
  charger=createSprite(1150,130,80,30)
  charger.addImage(chargerImage)
  charger.scale=.3
  wallsGroup = new Group();
  wallsGroup.add(ground)
  wallsGroup.add(wall1);
  wallsGroup.add(wall2);
  wallsGroup.add(wall3);
  wallsGroup.add(wall4);

}
function preload(){
  chargerImage=loadImage("images/charger.png")
  rockImage=loadImage("images/rock.png")
}
function draw() {
  background(255,255,255);
apple.bounceOff(edges)

  if(keyDown("a")){
  apple.x=apple.x-5
  }  
  if(keyDown("d")){
    apple.x=apple.x+5
    }  
    if(keyWentDown("w")){
      apple.velocityY= -15
      console.log("inside W")
   }  
   if(keyWentDown("w")&&(keyDown("d"))){
    apple.velocityY= -15
    apple.x=apple.x+5
 }  
 if(keyWentDown("w")&&(keyDown("a"))){
  apple.velocityY= -15
  apple.x=apple.x-5
}  
   apple.velocityY = apple.velocityY + 0.8
   apple.collide(ground);
   apple.collide(wall1);
   apple.collide(wall2);
   apple.collide(wall3);
   apple.collide(wall4);
   apple.collide(wall5);
   apple.collide(wall6);
  drawSprites();
}