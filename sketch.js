const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var boy
var drops=[]
var maxDrops=100;
function preload(){
  boyImage=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")  
  thunderImage=loadAnimation("1.png","2.png","3.png","4.png")
}

function setup(){
  engine=Engine.create()
  world=engine.world
  createCanvas(400,700)
  boy=createSprite(200,500) 
  boy.addAnimation("boy",boyImage)
  boy.scale=0.5;
  if(frameCount%150===0){
      for(var i=0;i<maxDrops;i++){
       drops.push[(new Drop(random(0,400)),random(0,400))]
      }
    }
    thunder=createSprite(250,400)
    thunder.addAnimation("thunder",thunderImage)
}

function draw(){
    Engine.update(engine)
   background(0)
   rand = Math.round(random(1,4)); if(frameCount%80===0){ thunderCreatedFrame=frameCount; thunder = createSprite(random(10,370), random(10,30), 10, 10); switch(rand){ case 1: thunder.addImage(thunder1); break; case 2: thunder.addImage(thunder2); break; case 3: thunder.addImage(thunder3); break; case 4: thunder.addImage(thunder4); break; default: break; } thunder.scale = random(0.3,0.6) } if(thunderCreatedFrame + 10 ===frameCount && thunder){ thunder.destroy(); }


   for(var i=0;i<maxDrops;i++){
       drops[i].showDrop();
       drops[i].updateY()
   }
    drawSprites()  
}   

