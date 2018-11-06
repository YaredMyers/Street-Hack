var imgItems = {
  item1: {
    name: "item1",
    width: 70,
    height: 40,
    y: 250,
    src:"./starter-code/images/items/sushi1.png"
  },
  sushiSp: {
    name: "sushiSp",
    width: 140,
    height: 100,
    y: 205,
    src:"./starter-code/images/items/happysushi.png"
  },
  jumpingNinja: {
    name: "jumpingNinja",
    width: 120,
    height: 80,
    y: 220,
    src:"./starter-code/images/items/sushi3.png"
  },
}

var itsLoad = {};
var itsCount = 0;
var itsTotal = Object.keys(imgItems).length;

Object.keys(imgItems).forEach(function(e) {
  var image = new Image();

Object.keys(obj[e]).forEach(function(y){
  image[y] = imgItems[e][y];
  image.onload = function(){
    itsCount++;

  if(itsCount === itsTotal) {
    console.log(itsLoad);
  }
}
})
  itsLoad[e] = image;
});