function Hearts(game) {
  this.game = game;
  this.x = 650;
  this.y = 0;
  this.w = 50;
  this.h = 50;
  this.imgHeart = new Image();
  this.imgHeart.src = "./starter-code/images/items/heart-transparent-video-game-6.png";
  this.lifePoints = 3;
}

Hearts.prototype.draw = function() {
  var x = 0;
  for (i = 0; i < this.lifePoints; i++) {
    this.game.ctx.drawImage(
      this.imgHeart,
      this.x,
      this.y,
      this.w,
      this.h,
    );
    x += this.w;
  }
}

Hearts.prototype.addHearts = function() {
  this.lifePoints++;
}

Hearts.prototype.removeHearts = function() {
  this.lifePoints--;
} 