var bImg,tImg,oImg;
var fireGroup,tankGroup;
var burSound;
var score=0;
function preload(){
bImg=loadImage("f.jpg")
tImg=loadImage("t.png")
oImg=loadImage("t2.png")
fImg=loadImage("f.png")
burSound=loadSound("burst.mp3")
}

function setup() {
 createCanvas(1000,1000)
 bc=createSprite(600,400)
 bc.addImage(bImg)
 bc.scale=2.1
 bc.velocityX=-5

 ta=createSprite(200,750)
 ta.addImage(tImg)
 ta.scale=0.2




 fireGroup=new Group()
 tankGroup=new Group()
}

function draw() {
if(bc.x<300)
{
 bc.x=width/2
}

if (keyDown("space")) {
    createFire();    
  }

  if (tankGroup.isTouching(fireGroup))
  {
      tankGroup.destroyEach();
  score=score+1
  }

 createTank();
 drawSprites();
 textStyle("bold")
 textSize(40)
 fill("blue")
 text("SCORE:"+score,10,50)
}


function createTank()
{
  var rand=Math.round(random(50,10))
  if (frameCount%100===0)
  {

  
  tn=createSprite(random(900,10),770,89)
  tn.addImage(oImg);
  tn.scale=1.1;
  tn.velocityX=-5;
  tankGroup.add(tn)

}
}

function createFire() {
    var f= createSprite(100, 50, 60, 10);
    f.addImage(fImg);
    f.x = 400;
    f.y=710;
    f.velocityX = 9;
    f.lifetime = 100;
    f.scale = 0.5;
    burSound.play();
    fireGroup.add(f);
  }