// Contructor function for Player and Enemy classes
class PlayerEnemyConstruct {
  constructor() {
    // note: asign correct image path per Player and Enemy class
    this.sprite = 'images/';
    this.x = 0;
    this.y = 0;
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

class Player extends PlayerEnemyConstruct {
  constructor() {
    super();
    this.sprite += 'char-boy.png';
    // x and y block in reference to ctx.drawImage coordinates
    this.xBlock = 101;
    this.yBlock = 83;
    this.startX = this.xBlock * 2;
    this.startY = this.yBlock * 5;
    this.x = this.startX;
    this.y = this.startY;
  }

  // Direction keys adjust Player movement
  handleInput(input) {
    switch(input) {
      case 'left':
        this.x -= this.xBlock;
        break;
      case 'up':
        this.y -= this.yBlock;
        break;
      case 'right':
        this.x += this.xBlock;
        break;
      case 'down':
        this.y += this.yBlock;
        break;
    }
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
