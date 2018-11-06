var imgObstacles = {
  bat: {
    name: "bat",
    w: 70,
    h: 40,
    y0: 250,
    dx:
    src:"./starter-code/images/obstacles/flybat.png"
  },
  dalshim: {
    name: "dalshim",
    w: 140,
    h: 100,
    y0: 205,
    src:"./starter-code/images/obstacles/dalshimfly.png"
  },
  jumpingNinja: {
    name: "jumpingNinja",
    w: 120,
    h: 80,
    y0: 220,
    src:"./starter-code/images/obstacles/ninja.png"
  },
  ninjaCat: {
    name: "ninjaCat",
    w: 90,
    h: 50,
    y0: 335,
    src:"./starter-code/images/obstacles/ninjacat.png"
  },
  johnDoe: {
    name: "johnDoe",
    w: 45,
    h: 85,
    y0: 300,
    src:"./starter-code/images/obstacles/ugly.png"
  },
  fireFont: {
    name: "fireFont",
    w: 50,
    h: 70,
    y0: 310,
    src:"./starter-code/images/obstacles/firefont.png"
  },
}

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




  