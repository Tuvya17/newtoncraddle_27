class Bob{
    constructor(x, y, r) {
        var options = {
             isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        //this.Paper = loadImage("paper.png")
        this.body = Bodies.circle(x, y, r, options);
        
        this.r = r
        World.add(world, this.body);
      }
      display(){
        //Image("paper.png");
        //console.log("paper");
        push();
        fill("orange")
        ellipseMode(RADIUS);
        ellipse( this.body.position.x, this.body.position.y, this.r, this.r);
        pop();
      }
}