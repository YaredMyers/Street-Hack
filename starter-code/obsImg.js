var imgObstacles = {
  bat: {
    name: "bat",
    width: 70,
    height: 40,
    y: 250,
    src:"./starter-code/images/obstacles/flybat.png"
  },
  dalshim: {
    name: "dalshim",
    width: 140,
    height: 100,
    y: 205,
    src:"./starter-code/images/obstacles/dalshimfly.png"
  },
  jumpingNinja: {
    name: "jumpingNinja",
    width: 120,
    height: 80,
    y: 220,
    src:"./starter-code/images/obstacles/ninja.png"
  },
  ninjaCat: {
    name: "ninjaCat",
    width: 90,
    height: 50,
    y: 335,
    src:"./starter-code/images/obstacles/ninjacat.png"
  },
  johnDoe: {
    name: "johnDoe",
    width: 45,
    height: 85,
    y: 300,
    src:"./starter-code/images/obstacles/ugly.png"
  },
  fireFont: {
    name: "fireFont",
    width: 50,
    height: 70,
    y: 310,
    src:"./starter-code/images/obstacles/flybat.png"
  },
}

  var obsLoad = {};
  var obsCount = 0;
  var obsTotal = Object.keys(imgObstacles).length;

  Object.keys(imgObstacles).forEach(function(e) {
    var image = new Image();

  Object.keys(obj[e]).forEach(function(y){
    image[y] = imgObstacles[e][y];
    image.onload = function(){
      obsCount++;

    if(obsCount === obsTotal) {
      console.log(obsLoad);
    }
  }
})
  obsLoad[e] = image;
});




  