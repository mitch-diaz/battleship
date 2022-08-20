class Game {
  constructor() {
    this.ships = []
    this.shipsToHit = 0
    this.attempts = 0
    
  }

    addGameBoard() {
    let boardCode = ""
    const gridSize = 10;
    for (let x = 1; x <= gridSize; x++) {
      for (let y = 1; y <= gridSize; y++) {
        boardCode += `<div class="square open" id=${x}-${y} data-position-x="${x}" data-position-y="${y}"></div>`;
      }
    }
    return boardCode
  }

  takeShot () {
    this.attempts++
    document.getElementById('p1Attempts').innerText = this.attempts
  }

  checkIfhit(coordinates) {
    let hitShip = this.ships.filter(ship => ship.location.includes(coordinates));
    if (coordinates.classList.contains('ship')) {
      // console.log(hitShip);
      this.shipsToHit--
      coordinates.classList.add('hit')
      // console.log('hit');
      
      let theMsg = document.querySelector('#messageArea, span');
      theMsg.innerText = `It's a hit!`;
      hitShip[0].receiveDamage()
      if (this.shipsToHit === 0) {
        let theMsg = document.querySelector('#messageArea, span');
        theMsg.innerText = `You sank all my battleships in ${this.attempts} attempts.`;
        setTimeout(function () {
            alert('game over');
          }, 500);
      }
    } else {
      coordinates.classList.add('miss')
      console.log('miss');
      let theMsg = document.querySelector('#messageArea, span');
      theMsg.innerText = `It's a miss.`;
    }
  }

    addPlayer() {

    }

    displayScoreboard() {
        // display scoreboard info:
        // Hits, Sunk ships, Total points
    }

    displayFiringReport() {
        
    }

    displaySunkShips() {

    }
}