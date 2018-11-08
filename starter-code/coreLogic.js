
function CoreLogic() {
  this.canvas = document.getElementById("myCanvas");
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.timeCrono = 5;
  this.background = new Background(this);
  this.player = new Player(this);
  this.hearts = new Hearts(this);
  this.score = 0;
  this.intervalID = null;
  this.imgGameOver = new Image();
  this.imgGameOver.src = "./starter-code/images/background/gameoverbg.png";
  this.reset();
}

CoreLogic.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.framesCount = 0;
  this.obstacles = [];
  this.items = [];
  this.timeCrono = 60;
  this.score = 0;
}

CoreLogic.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.hearts.draw();
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
  console.log("pepe")
  this.intervalID = setInterval(function (){
  this.clearAll();  
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
    this.generateItem();
  }
  if (this.timeCrono === 0) {
    this.gameOver();
    // if(confirm("GAME OVER. Play again?")) {
    //   this.reset();
    //   this.init();
    // }
  }
  if(this.framesCount % 60 == 0) {
    this.timeCrono--;
  }

  }.bind(this), 1000/this.fps);
  }

CoreLogic.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}; 

CoreLogic.prototype.generateObstacle = function() {
  this.obstacles.push(new Obstacles(this, obsLoad[obsTotal[Math.floor(Math.random() * obsCount)]])); 
};

CoreLogic.prototype.generateItem = function() { 
  this.items.push(new Items(this, itsLoad[itsTotal[Math.floor(Math.random() * itsCount)]]));
};

CoreLogic.prototype.clearAll = function() {
  this.clearItems();
  this.clearObstacles();
};

CoreLogic.prototype.clearObstacles = function() {
  this.obstacles = this.obstacles.filter(function(obstacle) {
    return obstacle.x + obstacle.width >= 0;
  });
};

CoreLogic.prototype.clearItems = function() {
  this.items = this.items.filter(function(item) {
    return item.x + item.width >= 0;
  });
};

CoreLogic.prototype.obsColision = function() {
  this.obstacles.forEach(function(obs) {
  if(this.player.x + this.player.width >= obs.x  && obs.x + obs.width >= this.player.x &&
    this.player.y + obs.height >= obs.y && obs.y + obs.height >= this.player.y && !this.player.inmortal) {
      this.player.lifePoints--;      
      this.player.inmortal = true;
      var beatMusic = new Audio("./starter-code/sound/beat.wav");
      // beatMusic.play();    
      setTimeout(function(){
        this.player.inmortal = false;
      }.bind(this), 600)
    }
    if (this.player.lifePoints === 0) {
      // prompt("luz! fuego! destruccion!");
      this.gameOver();
    }

  }.bind(this))
};

CoreLogic.prototype.itsColision = function() {
  this.items.forEach(function(its, i) {
    if(this.player.x + this.player.width - 20 >= its.x &&
        its.x + its.width >= this.player.x + 15&& 
        this.player.y + this.player.height - 15>= its.y &&
        its.y + its.height >= this.player.y) {
        this.score++;
        this.items.splice(i, 1);
        var itemMusic = new Audio("./starter-code/sound/item.mp3");
        // itemMusic.play();
     }
    }.bind(this))
};

CoreLogic.prototype.stop = function() {
  clearInterval(this.intervalID);
  console.log("pepeStop")
};

CoreLogic.prototype.gameOver = function() {
  this.stop();
  this.clear();
  
  this.ctx.drawImage(this.imgGameOver, 0, 0, this.canvas.width, this.canvas.height);
  if(confirm("GAME OVER. Play again?")) {
    this.reset();
    this.init();
  }
};

CoreLogic.prototype.cronoDraw = function() {
  this.ctx.font = "35px ArcadeClassic";
  this.ctx.fillStyle = "black";
  this.ctx.strokeStyle = "white";
  this.ctx.fillText(this.timeCrono, 330, 35);
  this.ctx.strokeText(this.timeCrono, 330, 35);
};


CoreLogic.prototype.scoreDraw = function(score) {
  this.ctx.font = "35px ArcadeClassic";
  this.ctx.fillstyle = "black";
  this.ctx.strokeStyle = "white";
  this.ctx.fillText(`Score:  ${(this.score)}`, 15, 35);
  this.ctx.strokeText(`Score:  ${(this.score)}`, 15, 35); 
};

CoreLogic.prototype.time = function () {
  setTimeout(function () {
    clearInterval(this.cronomInterval)
    if (this.player.points > 2000){
      alert("You win! :)");
    } else {
      alert("You loose! :(");
    }
  }.bind(this), 60000);
};
