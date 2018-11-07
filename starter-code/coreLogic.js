
function CoreLogic() {
  this.canvas = document.getElementById("myCanvas");
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.timeCrono = 60;
  this.background = new Background(this);
  this.player = new Player(this);
  // this.hearts = new Hearts(this);
  this.score = 0;
  this.intervalID = null;
  this.reset();
}

CoreLogic.prototype.reset = function() {
  this.framesCount = 0;
  this.obstacles = [];
  this.items = [];
  this.timeCrono = 60;
  this.score = 0;
  // this.items.push(new Items(this, itsLoad["item1"]));

}

// CoreLogic.prototype.stop = function() {
//   clearInterval(this.intervalID);
// }

CoreLogic.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.obstacles.forEach(function(obs){
    obs.draw();
  });
  this.items.forEach(function(its){
    its.draw();
  });
  this.cronoDraw();
  this.scoreDraw();
}

CoreLogic.prototype.moveAll = function() {
  this.background.move();
  this.player.move();
  this.obstacles.forEach(function(obs){
    obs.move();
  });
  this.items.forEach(function(its) {
    its.move();
  })
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
    this.framesCount = 0;
  }
  this.framesCount++;

  this.itsColision();
  if(this.framesCount % 80 === 0) {
    // this.generateItem();
  }
  }.bind(this), 1000/this.fps);

  }

CoreLogic.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

CoreLogic.prototype.generateObstacle = function() {
  this.obstacles.push(new Obstacles(this, obsLoad[obsTotal[Math.floor(Math.random() * obsCount)]])); };

CoreLogic.prototype.generateItem = function() { //////ATENCION!!!!!
  this.items.push(new Items(this, itsLoad[itsTotal[Math.floor(Math.random() * itsCount)]]));
  // this.items.push(new Items(this, itsLoad["item1"]));

};

CoreLogic.prototype.clearObstacles = function() {
  this.obstacles = this.obstacles.filter(function(obstacle) {
    return obstacle.x >= 0;
  });
};

CoreLogic.prototype.clearItems = function() {
  this.items = this.items.filter(function(item) {
    return item.x >= 0;
  });
};

CoreLogic.prototype.obsColision = function() {
  this.obstacles.forEach(function(obs) {
  if(this.player.x + this.player.width >= obs.x  && obs.x + obs.width >= this.player.x &&
    this.player.y + obs.height >= obs.y && obs.y + obs.height >= this.player.y && !this.player.inmortal) {
      this.player.lifePoints--;
      console.log("pepe");
      
      this.player.inmortal = true;      
      setTimeout(function(){
        this.player.inmortal = false;
      }.bind(this), 600)
    }
    if (this.player.lifePoints === 0) {
      // alert("luz! fuego! destruccion!");
    }

  }.bind(this))
};

CoreLogic.prototype.itsColision = function() {
  this.items.forEach(function(its) {
    if(this.player.x + this.player.width - 20 >= its.x &&
        its.x + its.width >= this.player.x + 15&& 
        this.player.y + this.player.height - 15>= its.y &&
        its.y + its.height >= this.player.y) {
        this.score++;
        console.log(its.y, this.player.y + this.player.height);

     }
    }.bind(this))
};

// CoreLogic.prototype.gameOver = function() {
//   this.stop();
  
//   if(confirm("you have not arrived to deliver the DE :(")) {
//     this.reset();
//     this.init();


CoreLogic.prototype.cronoDraw = function() {
  this.ctx.font = "30px Helvetica";
  this.ctx.fillStyle = "black";
  this.ctx.fillText(this.crono, 290, 30);
}

CoreLogic.prototype.cronom = function () {
  this.cronomInterval = setInterval(function () {
    this.timeCrono--;
  }.bind(this), 1000)
}

CoreLogic.prototype.scoreDraw = function() {
  this.ctx.font = "20px Helvetica";
  this.ctx.fillstyle = "black";
  this.ctx.fillText(this.score, 100, 30);
}

CoreLogic.prototype.time = function () {
  setTimeout(function () {
    clearInterval(this.cronomInterval)
    if (this.player.points > 20){
      alert("You win! :)");
    } else {
      alert("You loose! :(");
    }
  }.bind(this), 60000);
}
