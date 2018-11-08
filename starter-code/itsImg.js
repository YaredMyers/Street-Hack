//todo: please consider not polluting the window object. consider refactoring this code into a Game object (namespace)
var imgItems = {
  item1: {
    name: "item1",
    w: 50,
    h: 40,
    y0: 340,
    dx: 6,
    score: 1,
    src:"./starter-code/images/items/arroz.png"
  },
  sushiSp: {
    name: "sushiSp",
    w: 60,
    h: 45,
    y0: 250,
    dx: 5,
    // lifePoint: 1,
    score: 1,
    src:"./starter-code/images/items/happysushi.png"
  },
  item2: {
    name: "item2",
    w: 60,
    h: 30,
    y0: 350,
    dx: 6,
    score: 1,
    src:"./starter-code/images/items/food.png"
  },
}

//todo: put all this code inside a method which lives in the Game object (suggestion: generateDataModel())
var itsLoad = {};
var itsCount = 0;
var itsTotal = Object.keys(imgItems);

Object.keys(imgItems).forEach(function(e) {
  var image = new Image();

Object.keys(imgItems[e]).forEach(function(y){
  image[y] = imgItems[e][y];
  image.onload = function(){
    itsCount++;

  if(itsCount === itsTotal.length) {
    console.log(itsLoad);
  }
}
})
  itsLoad[e] = image;
});