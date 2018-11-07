function Player(game) {
  this.game = game;
  this.x = this.game.canvas.width * 0.10;
  this.y0 = this.game.canvas.height * 0.6;
  this.y = this.y0;
  this.img = new Image();
  this.img.src = "./starter-code/images/player/player1invert.png";
  this.imgUp = new Image();
  this.imgUp.src = "./starter-code/images/player/sakup.png";
  this.imgDown = new Image();
  this.imgDown.src = "./starter-code/images/player/sakdownalt.png";
  this.framesX = 3;
  this.framesY = 2;
  this.frameIndexX = 0;
  this.frameIndexY = 0;
  this.width = 125;
  this.height = 150;
  this.upwidth = 125;
  this.upheight = 150;
  this.vx = 1;
  this.vy = 1;
  this.run = true;
  this.jump = false;
  this.down = false;
  this.inmortal = false;
  this.setListeners();
}

var SPACE_KEY = 32;
var DOWN_KEY = 40;

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === SPACE_KEY && this.y == this.y0) {
      this.y -= 5;
      this.vy -= 10;
      this.run = false;
      this.jump = true;
    } else if (event.keyCode === DOWN_KEY  && this.down == false && this.y == this.y0) {
      this.y = 300;
      this.vx += 10;
      this.run = false;
      this.down = true;
      setTimeout(function(){
        this.down = false;
        this.run = true;
        this.y = this.y0;
      }.bind(this), 700);      
    }
  }.bind(this);
}

Player.prototype.draw = function() {
  if (this.down) {
    this.drawDown();
  } else if (this.jump) {
    this.drawJump();
  } else {
    this.drawRun();
  }
  
  this.animateSak();
}

Player.prototype.drawRun = function() {
  this.game.ctx.drawImage(
  this.img,
  this.frameIndexX * Math.floor(this.img.width / this.framesX),
  this.frameIndexY * Math.floor(this.img.height / this.framesY),
  this.img.width / this.framesX,
  this.img.height / this.framesY,
  this.x, 
  this.y, 
  this.width, 
  this.height,
  );
}

Player.prototype.drawJump = function() {
  this.game.ctx.drawImage(
  this.imgUp,
  this.x,
  this.y,
  75,
  100,
  );
}

Player.prototype.drawDown = function() {
  this.y = 315;
  this.game.ctx.drawImage(
  this.imgDown,
  this.x,
  315,
  75,      //290-75-100 en cascada
  70,
  );
}

Player.prototype.animateSak = function() {
  if (this.game.framesCount % 8 === 0) {
    this.frameIndexX += 1;
    
    if (this.frameIndexX > 2) {
      this.frameIndexY += 1;
      this.frameIndexX = 0;
    if(this.frameIndexY > 1) {
      this.frameIndexY = 0;
      }
    }
  }
}

Player.prototype.move = function() {
  var gravity = 0.5;

  if (this.y >= this.y0) {
    this.vy = 1;
    this.y = this.y0;
    this.run = true;
    this.jump = false;
  } else {
    this.vy += gravity;
    this.y += this.vy;
  }
}