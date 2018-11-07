function Items(game, img) {
  this.game = game;
  this.img = img;
  this.width = img.w;
  this.height = img.h;
  this.x = this.game.canvas.width;
  this.y = img.y0;
  this.dx = img.dx;
}

Items.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}

Items.prototype.move = function() {
  this.x -= this.dx;
}