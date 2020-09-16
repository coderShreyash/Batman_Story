const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
    l1=loadImage("l1.jpg")
    l2=loadImage("l2.jpg")
    l3=loadImage("l3.jpg")
    bg = loadImage("rain.jpg")
    t1=loadImage("t1.png");
    t2=loadImage("t2.png");
    t3 = loadImage("t3.png")
    
}

function setup(){
   createCanvas(500,650);
   engine = Engine.create();
   world = engine.world;
   gd = new g(260,240,105);
   ra = createSprite(250,0);
   

}

drops=[]

function draw(){
 
    
    background(bg);    
    Engine.update(engine);
   
    if(frameCount%10==0){
        
        ra.addImage(t1)
    }
    if(frameCount%25==0){
        ra.addImage(t2)
    }
    if(frameCount%35==0){
        ra.addImage(t3)
    }
   
    
    

for(var i =0 ; i<1 ; i++){
    drops.push(new d(random(10,490),random(0,50),10));
    }
    for(var i =0;i<drops.length;i++){
        
        drops[i].display();
        
        }



  



    drawSprites();
   
}   

