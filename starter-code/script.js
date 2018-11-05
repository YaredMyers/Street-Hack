window.onload = function() {
  document.getElementById("start-button").onclick = function(e) {
  //document.activeElement.blur();
    startGame();
  };

var coreLogic = new CoreLogic();

function startGame() {
coreLogic.init();
}



};