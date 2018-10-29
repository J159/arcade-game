// Contructor for Player and Enemy classes
class PlayerEnemyConstruct {
  constructor() {
    // note: asign correct image path per Player/Enemy class
    this.sprite = 'images/';
    this.x = 0;
    this.y = 0;
  }

  // Provided render function, draws image on canvas
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Player class
class Player extends PlayerEnemyConstruct {
  constructor() {
    super();
    this.sprite += 'char-boy.png';
    // x and y block in reference to ctx.drawImage coordinates
    this.xBlock = 101;
    this.yBlock = 83;
    this.startX = this.xBlock * 2;
    this.startY = (this.yBlock * 4) + 55;
    this.x = this.startX;
    this.y = this.startY;
    this.win = false;
  }

  // Direction keys adjust Player movement
  // if statements prevents player from moving off canvas
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

  // Resets player to starting position
  reset() {
    this.y = this.startY;
    this.x = this.startX;
  }

  // Checks player/enemy collisions
  update() {
    for(let enemy of allEnemies) {
      // When Player x and y coordinates match Enemy class, execute reset function
      if (this.y === enemy.y && (enemy.x + enemy.xBlock/2 > this.x && enemy.x < this.x + this.xBlock/2)) {
        this.reset();
      }
    }
    // Check if player reached final tile. If so, set win property to true.
    if (this.y < 1) {
      this.win = true;
    }
    // If game is won, display modal
    if (player.win === true) {
      modal.style.display = 'block';
    }
  }
}

// Enemy class
class Enemy extends PlayerEnemyConstruct {
  constructor(x, y, speed) {
    super();
    this.sprite += 'enemy-bug.png';
    this.x = x;
    this.y = y + 55;
    this.speed = speed;
    this.xBlock = 101;
    this.boundary = this.xBlock * 5;
    this.resetPos = -this.xBlock;
  }

  // When Enemy moves fully off canvas, resets back to original starting position, loops indefinitely
  update(dt) {
    if (this.x < this.boundary) {
      this.x += this.speed * dt;
    }
    else {
      this.x = this.resetPos;
    }
  }
}

// Player variable
const player = new Player();

// bug variables
const bug1 = new Enemy(-101, 0, 200);
const bug2 = new Enemy(-101, 83, 300);
const bug3 = new Enemy((-101 * 2.5), 166, 100);

// array to hold bug variables
const allEnemies = [];
// push bugs into array
allEnemies.push(bug1, bug2, bug3);

// Modal variables
const modal = document.getElementsByClassName('modal')[0];
const replay = document.querySelector('button');

// Event Listener for modal "Play Again" button
replay.addEventListener('click', function() {
  modal.style.display = 'none';
  player.reset();
  player.win = false;
})

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
