class Block1{
    constructor(x, y, width, height){
   var options={
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
   }
   this.width=width;
   this.height=height;
   this.body=Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);

   }
   display()
   {
        var angle = this.body.angle;
           var Pos=this.body.position;		
           push()
           translate(Pos.x, Pos.y);
           rectMode(CENTER)
           stroke("black");
           rotate(angle);
           strokeWeight(2);
           fill(103, 209, 234)
           rect(0,0,this.width, this.height);
           pop()
           
   }
    
}