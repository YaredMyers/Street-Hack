function Items(game, img) {
  this.game = game;
  // this.item1 = new Image();
  // this.item1.src = "./starter-code/images/items/sushi1.png";
  // this.item2Sp = new Image();
  // this.item2Sp.src = "./starter-code/images/items/happysushi.png";
  // this.item3 = new Image();
  // this.item3.src = "./starter-code/images/items/sushi3.png";
  this.img = img;
  this.width = img.w;
  this.height = img.h;
  this.x = this.game.canvas.width;
  this.y = img.y0;
  this.dx = img.dx;
}

Items.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  // this.game.ctx.drawImage(this.imgObsDown, this.x, this.y, this.width, this.height);
  // this.game.ctx.drawImage(this.imgObsDown, this.x, this.y, this.width, this.height);
}

Items.prototype.move = function() {
  this.x -= this.dx;
}