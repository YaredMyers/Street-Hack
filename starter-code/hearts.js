//todo: consider using a GameConfig variables instead of hardcoded values
function Hearts(game) {
  this.game = game;
  this.x = 650;
  this.y = 0;
  this.w = 50;
  this.h = 50;
  this.imgHeart = new Image();
  this.imgHeart.src = "./starter-code/images/items/heart-transparent-video-game-6.png";
  this.lifePoints = this.game.player.lifePoints;
}

Hearts.prototype.draw = function() {
  var x = this.x;
  for (i = 0; i < this.game.player.lifePoints; i++) {
    this.game.ctx.drawImage(
      this.imgHeart,
      x,
      this.y,
      this.w,
      this.h,
    );
    x -= this.w;
  }
}

Hearts.prototype.addHearts = function() {
  this.lifePoints++;
}

Hearts.prototype.removeHearts = function() {
  this.lifePoints--;
} 