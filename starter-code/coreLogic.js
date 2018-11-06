
function CoreLogic() {
  this.canvas = document.getElementById("myCanvas");
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.timeCrono = 60;
  this.background = new Background(this);
  this.player = new Player(this);
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
  this.obstacles.forEach(function(obs){
      obs.draw();
    })
// this.cronoDraw();
}

CoreLogic.prototype.moveAll = function() {
  this.background.move();
  this.player.move();
  this.obstacles.forEach(function(obs){
    obs.move();
  });
}

CoreLogic.prototype.init = function() {
  this.intervalID = setInterval(function (){
  this.moveAll();
  this.draw();
  this.obsColision();
  if (this.framesCount % 100 === 0) {
    this.generateObstacle();
  }
  if(this.framesCount == 1000){
    this.framesCount=0;
  }
  this.framesCount++;
  }.bind(this), 1000/this.fps);
};

CoreLogic.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

CoreLogic.prototype.generateObstacle = function() {
  this.obstacles.push(new Obstacles(this));
};

CoreLogic.prototype.clearObstacles = function() {
  this.obstacles = this.obstacles.filter(function(obstacle) {
    return obstacle.x >= 0;
  });
};

CoreLogic.prototype.obsColision = function() {
  this.obstacles.forEach(function(obs) {
  if(this.player.x + this.player.width >= obs.x  && obs.x + obs.width >= this.player.x &&
    this.player.y + obs.height >= obs.y && obs.y + obs.height >= this.player.y) {
      return true;
    } else {
      console.log(false);
       false;
    }
  }.bind(this))
};

// CoreLogic.prototype.gameOver = function() {
//   this.stop();
  
//   if(confirm("you have not arrived to deliver the DE :(")) {
//     this.reset();
//     this.init();


// CoreLogic.prototype.cronoDraw = function() {
//   this.ctx.font = "100px Satisfy";
//   this.ctx.fillStyle = "white";
//   this.ctx.fillText(this.crono, 550, 100)
// }


