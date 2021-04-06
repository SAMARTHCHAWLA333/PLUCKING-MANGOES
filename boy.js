class Boy{
    constructor(bodya,pointb){
    var option={
        bodyA:bodya,
        pointB:pointb,
        length:10,
        stiffness:0.5
    }    
    this.boy=Matter.Constraint.create(option)
    World.add(world,this.slingshot);
    this.boy=loadImage("boy.png");
   
    }
    display()
    {image(this.boy);
     strokeWeight(5);
     stroke(47,21,8);
        if(this.boy.bodyA){
        line(this.boy.bodyA.position.x-20,this.boy.bodyA.position.y,this.boy.pointB.position.x-10,this.noy.pointB.position.y)
        line(this.boy.bodyA.position.x-20,this.boy.bodyA.position.y,this.boy.pointB.x+30,this.boy.pointB.y)
        image(this.sling3Img,this.boy.bodyA.position.x-30,this.slingshot.bodyA.position.y-10,15,30);
        }
     
     }
    fly(){
        this.boy.bodyA=null
    }
    attach(body){
      this.boy.bodyA=body;  
    }
    }