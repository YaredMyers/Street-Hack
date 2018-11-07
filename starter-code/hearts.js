function Hearts(game) {
  this.game = game;
  this.x =
  this.y = 
  this.w = this.game.canvas.width;
  this.h = this.game.canvas.height;
  this.imgHeart = new Image();
  this.imgHeart.src = "./starter-code/images/items/heart-transparent-video-game-6.png";
  this.lifePoints = 3;
}

// me dibuja los corazones
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
    x += this.x;
  }
}


// cuando nos da la vida
Hearts.prototype.addHearts = function() {
  this.lifePoints++;
}

// cuando nos quita la vida
Hearts.prototype.removeHearts = function() {
  this.lifePoints--;
} 