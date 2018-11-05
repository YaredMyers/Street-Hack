function Obstacles(game) {
  this.game = game;
  this.imgObsDown = new Image();
  this.imgObsDown.src = "./starter-code/images/obstacles/firefont.png";
  this.imgObsUp = new Image();
  this.imgObsUp.src = "./starter-code/images/obstacles/ninja.png";
  this.width = 50;
  this.height = 70;
  this.x = this.game.canvas.width;
  this.y = 310;
  this.dx = 6;
}

Obstacles.prototype.draw = function() {
  console.log("dentro");
  this.game.ctx.drawImage(this.imgObsDown, this.x, this.y, this.width, this.height);
  // this.game.ctx.drawImage(this.imgObsUp, this.x, 200, 120, 90);
}

Obstacles.prototype.move = function() {
  this.x -= this.dx;
}