function Items(game, img) {
  this.game = game;
  this.item1 = new Image();
  this.item1.src = "./starter-code/images/items/sushi1.png";
  this.item2Sp = new Image();
  this.item2Sp.src = "./starter-code/images/items/happysushi.png";
  this.item3 = new Image();
  this.item3.src = "./starter-code/images/items/sushi3.png";
  this.width = 50;
  this.height = 70;
  this.x = this.game.canvas.width;
  this.y = 310;
  this.dx = 6;
}

Items.prototype.draw = function() {
  this.game.ctx.drawImage(this.item1, this.x, this.y, this.width, this.height);
  // this.game.ctx.drawImage(this.imgObsDown, this.x, this.y, this.width, this.height);
  // this.game.ctx.drawImage(this.imgObsDown, this.x, this.y, this.width, this.height);
}

Items.prototype.move = function() {
  this.x -= this.dx;
}