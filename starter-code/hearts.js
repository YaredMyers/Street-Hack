function Hearts(game) {
  this.game = game;
  this.x =
  this.y = 
  this.w = 
  this.h = 
  this.imgHeart = new Image();
  this.imgHeart.src = "./starter-code/images/items/heart-transparent-video-game-6.png";
  this.lifePoints = 3;
}

Hearts.prototype.draw = function() {
  var x = 0;
  
}

Hearts.prototype.addHearts = function() {
  this.lifePoints++;
}

Hearts.prototype.removeHearts = function() {
  this.lifePoints--;
} 