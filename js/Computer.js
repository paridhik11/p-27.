class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life5="cyan"
    this.life6="cyan"
    this.life7="cyan"

    World.add(world, this.body);
  }

 
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
  life(){
    push()
    fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("computer", 930, 40);


   fill(this.life5)
   rect(810,50,70,20)
   fill(this.life6)
   rect(880,50,70,20)
   fill(this.life7)
   rect(950,50,70,20)
   pop()
  
   
  }
 // extra(){
    //push()
    //fill("yellow")
    //textAlign("center")
    //textSize(40)
    //text("PLAY THIS EASY YET INTERESTING GAME BY SIMPLE CODING AND ENJOY",500,900)
    //pop()
 // }
}
