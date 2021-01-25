class Drop
{
    constructor(x,y){
        var options={
            'restitution':0.1,
            'friction':0.001
          }
          this.x=x
          this.y=y
          this.r=5
          
        this.body=Bodies.circle(this.x,this.y,5,options);
        World.add(world,this.body)

       
    }
 updateY(){
     if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})

     }
 }
showDrop(){
    var pos=this.body.position
    ellipseMode(CENTER)
    ellipse(pos.x,pos.y,this.r,this.r)
}
};