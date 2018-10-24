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
  }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
