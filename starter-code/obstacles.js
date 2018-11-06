function Obstacles(game, img) {
  this.game = game;
  this.img = img;
  this.width = img.w;
  this.height = img.h;
  this.x = this.game.canvas.width;
  this.y = img.y0;
  this.dx = 5; 
}

Obstacles.prototype.draw = function() {
  console.log("dentro");
  this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}

Obstacles.prototype.move = function() {
  this.x -= this.dx;
}


