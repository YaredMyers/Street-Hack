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

}

Items.prototype.move = function() {
  this.x -= this.dx;
}