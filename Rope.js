class Rope{
    constructor(bodyA,pointB){
        var option = {
            bodyA: bodyA,
            pointB: pointB,
            length: 250,
            stiffness: 0.3
        }

        this.pointB = pointB;
        this.rope = Constraint.create(option);
        World.add(world,this.rope);
        }
       
  display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.pointB;
    push();
    stroke(28,158,185);
    strokeWeight(5);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop();

  }      
}