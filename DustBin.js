class disbin{
    constructor(x,y,r){
        var options={
            restitution=0.3,
            friction=0.5,
            density=1.2
        }
        this.x=x;
        this.y.y;
        this.r=r;
        this.body=bodies.circle(this.x,this.y,this/r,options)
        World.add(World, this.body);

    }
    display(){
        var paperpos=this.body.postion;

        Push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        storkeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}