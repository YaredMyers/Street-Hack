
function CoreLogic() {
  this.canvas = document.getElementById("myCanvas");
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.timeCrono = 60;
  this.background = new Background(this);
  this.player = new Player(this);
  this.obstaclesDown = new Obstacles(this);
  this.intervalID = null;
  this.reset();
}

CoreLogic.prototype.reset = function() {
  this.framesCount = 0;
  this.obstacles = [];
  this.score = 0;
}

CoreLogic.prototype.stop = function() {
  clearInterval(this.intervalID);
}

CoreLogic.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.obstaclesDown.draw();
// this.cronoDraw();
}

CoreLogic.prototype.moveAll = function() {
  this.background.move();
  this.player.move();
  this.obstaclesDown.move();
}

CoreLogic.prototype.init = function() {
  this.intervalID = setInterval(function (){
  this.moveAll();
  this.draw();
  this.framesCount++;
    // this.bgm();
  }.bind(this), 1000/this.fps);
};

CoreLogic.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

CoreLogic.prototype.generateObstacle = function() {
  this.obstacles.push(new Obstacle(this));
};

CoreLogic.prototype.clearObstacles = function() {
  this.obstacles = this.obstacles.filter(function(obstacle) {
    return obstacle.x >= 0;
  });
};

CoreLogic.prototype.obsColision = function() {
  if(player.x + player.width >= obstacles.x  && obstacles.x + obstacles.width >= player.x &&
    player.y + obstacles.height >= obstacles.y && obstacles.y + obstacles.height >= player.y) {
      console.log(true);
    } else {
      return false;
    }
}


// CoreLogic.prototype.cronoDraw = function() {
//   this.ctx.font = "100px Satisfy";
//   this.ctx.fillStyle = "white";
//   this.ctx.fillText(this.crono, 550, 100)
// }


