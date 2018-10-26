// Contructor function for Player and Enemy classes
class PlayerEnemyConstruct {
  constructor() {
    // note: asign correct image path per Player/Enemy class
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
    this.startY = (this.yBlock * 5) - 20;
    this.x = this.startX;
    this.y = this.startY;
  }

  // Direction keys adjust Player movement
  // if statements prevent player from moving off canvas
  handleInput(input) {
    switch(input) {
      case 'left':
        if (this.x > 0) {
          this.x -= this.xBlock;
        }
        break;
      case 'up':
        if (this.y > 0) {
          this.y -= this.yBlock;
        }
        break;
      case 'right':
        if (this.x < this.yBlock * 4) {
          this.x += this.xBlock;
        }
        break;
      case 'down':
        if (this.y < this.yBlock * 4) {
          this.y += this.yBlock;
        }
        break;
    }
  }
}

class Enemy extends PlayerEnemyConstruct {
  constructor(x, y) {
    super();
    this.sprite += 'enemy-bug.png';
    this.x = 0;
    this.y = 55;
    this.xBlock = 101;
    this.boundary = this.xBlock * 5;
    this.resetPos = -this.xBlock;
  }

  update(dt) {
    if (this.x < this.boundary) {
      this.x += 200 * dt;
    }
    else {
      this.x = this.resetPos;
    }
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player();

// bug variables and containing array
const bug1 = new Enemy();
const allEnemies = [];
allEnemies.push(bug1);


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
