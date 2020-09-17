class d{
    constructor(x,y,radius) {
      var options = {
        'restitution':0.8,
        'friction':0.4,
        'density':1.0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
     
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y,this.radius-5,this.radius+2);
    }
  };
 
