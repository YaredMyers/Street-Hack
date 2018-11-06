function Obstacles(game) {
  this.game = game;
  this.imgObsDown = new Image();
  this.imgObsDown.src = "./starter-code/images/obstacles/firefont.png";
  this.imgObsDown2 = new Image();
  this.imgObsDown2.src = "./starter-code/images/obstacles/ugly.png";
  this.imgObsDown3 = new Image();
  this.imgObsDown3.src = "./starter-code/images/obstacles/trashCan.png";
  this.imgObsDown4 = new Image();
  this.imgObsDown4.src = "./starter-code/images/obstacles/ninjacat.png";
  this.imgObsUp = new Image();
  this.imgObsUp.src = "./starter-code/images/obstacles/ninja.png";
  this.imgObsUp2 = new Image();
  this.imgObsUp2.src = "./starter-code/images/obstacles/dalshimfly.png";
  this.imgObsUp3 = new Image();
  this.imgObsUp3.src = "./starter-code/images/obstacles/flybat.png";
  this.width = 50;
  this.height = 70;
  this.x = this.game.canvas.width;
  this.y = 310;
  this.dx = 6;
}

Obstacles.prototype.draw = function() {
  console.log("dentro");
  //obstaculos suelo
  //fuente
  this.game.ctx.drawImage(this.imgObsDown, this.x, this.y, this.width, this.height);
  //señor random
  // this.game.ctx.drawImage(this.imgObsDown2, this.x, 300, 45, 85);
  //papelera
  // this.game.ctx.drawImage(this.imgObsDown3, this.x, 300, 65, 80);
  //gato ninja
  // this.game.ctx.drawImage(this.imgObsDown4, this.x, 335, 90, 50);


  //obstaculos aire
  //jumping ninja 
  // this.game.ctx.drawImage(this.imgObsUp, this.x, 220, 120, 80);
  //Dalshim
  // this.game.ctx.drawImage(this.imgObsUp2, this.x, 205, 140, 100);
  //bat
  // this.game.ctx.drawImage(this.imgObsUp3, this.x, 250, 70, 40);

}

Obstacles.prototype.move = function() {
  this.x -= this.dx;
}


