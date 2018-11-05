function Background(game) {
  this.img = new Image();
  this.img.src = "./starter-code/images/background/cityback.jpg";
  this.game = game;
  this.ctx = game.ctx;
  this.x = 0;
  this.y = 0;
   this.width = 700;
   this.height = 400;
  this.dx = 6;
}

Background.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);
  this.ctx.drawImage(this.img, this.x + this.game.canvas.width, this.y, this.game.canvas.width, this.game.canvas.height);
}

Background.prototype.move = function() {
  this.x -= this.dx;

  if (this.x < -this.game.canvas.width) this.x = 0;
}