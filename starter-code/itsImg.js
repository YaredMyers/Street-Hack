var imgItems = {
  item1: {
    name: "item1",
    w: 40,
    h: 20,
    y0: 310,
    dx: 6,
    src:"./starter-code/images/items/sushi1.png"
  },
  sushiSp: {
    name: "sushiSp",
    w: 40,
    h: 20,
    y0: 310,
    dx: 6,
    src:"./starter-code/images/items/happysushi.png"
  },
  jumpingNinja: {
    name: "jumpingNinja",
    w: 40,
    h: 20,
    y: 310,
    dx: 6,
    src:"./starter-code/images/items/sushi3.png"
  },
}

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