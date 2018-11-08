var imgObstacles = {
  bat: {
    name: "bat",
    w: 70,
    h: 40,
    y0: 250,
    dx: 7,
    src:"./starter-code/images/obstacles/flybat.png"
  },
  dalshim: {
    name: "dalshim",
    w: 140,
    h: 100,
    y0: 205,
    dx: 7,
    src:"./starter-code/images/obstacles/dalshimfly.png"
  },
  jumpingNinja: {
    name: "jumpingNinja",
    w: 120,
    h: 80,
    y0: 220,
    dx: 7,
    src:"./starter-code/images/obstacles/ninja.png"
  },
  ninjaCat: {
    name: "ninjaCat",
    w: 90,
    h: 50,
    y0: 335, //335
    dx: 7,
    src:"./starter-code/images/obstacles/ninjacat.png"
  },
  johnDoe: {
    name: "johnDoe",
    w: 45,
    h: 85,
    y0: 300,
    dx: 7,
    src:"./starter-code/images/obstacles/ugly.png"
  },
  fireFont: {
    name: "fireFont",
    w: 50,
    h: 70,
    y0: 310,
    dx: 6,
    src:"./starter-code/images/obstacles/firefont.png"
  },
}
//todo: put all this code inside a method which lives in the Game object (suggestion: generateDataModel())
  var obsLoad = {};
  var obsCount = 0;
  var obsTotal = Object.keys(imgObstacles);

  Object.keys(imgObstacles).forEach(function(e) {
    var image = new Image();

  Object.keys(imgObstacles[e]).forEach(function(y){
    image[y] = imgObstacles[e][y];
    image.onload = function(){
      obsCount++;

    if(obsCount === obsTotal.length) {
      console.log(obsLoad);
    }
  }
})
  obsLoad[e] = image;
});




  