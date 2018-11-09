 <img src="https://github.com/YaredMyers/Street-Hack/blob/master/starter-code/images/backgroundhtml/logo.png?raw=true" width="250" title="Logo"> 

### Ayuda a Sakura a llegar a tiempo a IronHack para entregar el DE!!
#### Street Hack es un plataformas en el que debes aguantar sin perder todas las vidas mientras recoges objetos y esquivas obstáculos.

## Características
* Uso de HTML5, CSS, JavaScript
* Uso de sprites
* Sonidos añadidos
* Favicon
* Imágenes "End-Game" añadidas

## Instrucciones
- Usa "Bar Space" para saltar
- Usa la flecha "down" para agacharte
- Recoge toda la comida que puedas

## 1. Prueba el juego
#### https://yaredmyers.github.io/Street-Hack/

## 2. Parte del código que me ha gustado :+1:
#### Ejemplo 1:
<img src="https://github.com/YaredMyers/Street-Hack/blob/master/starter-code/images/player/player1invert.png?raw=true" width="300">

```
 Player.prototype.animateSak = function() {
  if (this.game.framesCount % 8 === 0) {
    this.frameIndexX += 1;
// Dividimos en 3 el eje x para pintar todas las imágenes de ese eje y le decimos que una vez cubierto, 
// nos salte al eje y para hacer la misma repetición
    if (this.frameIndexX > 2) {
      this.frameIndexY += 1;
      this.frameIndexX = 0;
    if(this.frameIndexY > 1) {
      this.frameIndexY = 0;
      }
    }
  }
};
```

<img src="https://www.fightersgeneration.com/characters3/sakura-running.gif">

#### Ejemplo 2:
##### Antes
```
  this.imgGameOver = new Image();
  this.imgGameOver.src = "./starter-code/images/background/gameoverbg.png";
  this.imgWin = new Image();
  this.imgWin.src = "./starter-code/images/background/winnerbg.png";
```

##### Después
```
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
```
## 3. Si tuviese que volver atrás... ¿Que cambiar? ԅ(≖‿≖ԅ)
#### - Mejor planteamiento de necesidades (¿Qué necesito?)
#### - Mejor distribución del tiempo
#### - Tener claras las mecánicas a usar (Ganar tiempo ٩(^‿^)۶)

## 4. Futuras actualizaciones (⌐■_■) 
#### - Nuevos niveles
#### - Nuevos personales para seleccionar
#### - Ataques y Final Boss
#### - Ranking
#### - Refactorizar código (nivel interno)


## 5. Parte del código que mas problemas me causó (ノಠ益ಠ)ノ彡┻━┻
<a href="https://imgflip.com/i/2m3yqf"><img src="https://i.imgflip.com/2m3yqf.jpg" title="Collisions"/></a>

#### Colisiones
```
CoreLogic.prototype.itsColision = function() {
  this.items.forEach(function(its, i) {
    if(this.player.x + this.player.width - 20 >= its.x &&
        its.x + its.width >= this.player.x + 15&& 
        this.player.y + this.player.height - 15>= its.y &&
        its.y + its.height >= this.player.y) {
        this.score++;
        this.items.splice(i, 1);
        var itemMusic = new Audio("./starter-code/sound/item.mp3");
        itemMusic.play();
     }
    }.bind(this))
 ```
 
 <img src="https://i.gifer.com/origin/2a/2a297bb35373bf2df4e1a830c2f3bbe9_w200.gif">
 <img src="https://github.com/YaredMyers/Street-Hack/blob/master/starter-code/images/background/winnerbg.png?raw=true" width="800" title="hover text" position="center">
 

