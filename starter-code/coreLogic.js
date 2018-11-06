
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
  // this.items = [];
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
  if (this.framesCount % 70 === 0) {
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
  this.obstacles.push(new Obstacles(this, obsLoad[obsTotal[Math.floor(Math.random() * obsCount)]]));
};

// CoreLogic.prototype.generateItem = function() { //////ATENCION!!!!!
//   this.items.push(new Items(this));
// };

// CoreLogic.prototype.clearObstacles = function() {
//   this.obstacles = this.obstacles.filter(function(obstacle) {
//     return obstacle.x >= 0;
//   });
// };

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

// CoreLogic.prototype.itsColision = function() {
//   this.items.forEach(function(its) {
//     if(this.player.x + this.player.width >= its.x  && its.x + its.width >= this.player.x &&
//       this.player.y + its.height >= its.y && its.y + its.height >= this.player.y) {
//         return true;
//       } else {
//         console.log(false);
//          false;
//       }
//     }.bind(this))
// };

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

// CoreLogic.prototype.cronom = function () {
//   this.cronominterval = setInterval(function () {
//     this.timeCrono--;
//   }.bind(this), 1000)
// }

// CoreLogic.prototype.time = function () {
//   setTimeout(function () {
//     clearInterval(this.cronominterval)
//     if (this.player.points > 15){
//       alert("You win! :)");
//     } else {
//       alert("You loose! :(");
//     }
//   }.bind(this), 60000);
// }

