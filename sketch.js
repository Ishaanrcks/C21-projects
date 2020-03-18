var sunim;
function preload(){
 sunim=loadImage('sun.png');
}
function setup() {
  createCanvas(800,800);
  sun=createSprite(400, 400, 100, 100);
  sun.addImage(sunim);
  sun.scale=0.5
  count=0
  starg=createGroup();
  for(var x=0;x<Math.round(random(50,300));x+=1){
    star=createSprite(random(100,800),random(80,800),3,3)
    starg.add(star)
    star.shapeColor="white"
    star=createSprite(-random(100,800),-random(80,800),3,3)
    starg.add(star)
    star.shapeColor="white"
    star=createSprite(random(100,800),-random(80,800),3,3)
    starg.add(star)
    star.shapeColor="white"
    star=createSprite(-random(100,800),random(80,800),3,3)
    starg.add(star)
    star.shapeColor="white"
   
    sun.depth=300
  }  
}

function draw() {
  
  sun.depth+=2
  background(0)
  count+=1;
  sun.scale=0.5+count/100;

  
  drawSprites();
}