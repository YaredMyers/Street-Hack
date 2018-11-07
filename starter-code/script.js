window.onload = function() {
  document.getElementById("start-button").onclick = function(e) {
  // document.activeElement.blur();
  // var audio = new Audio("./starter-code/sound/maintheme.mp3");
  // audio.play();
    
    startGame();
  };

var coreLogic = new CoreLogic();

function startGame() {
document.getElementById("start-button").disabled = true;

coreLogic.init();
}



};

// this.cronom();
// this.time();