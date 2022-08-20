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

    displayModal() {
      if (this.shipsToHit === 0) {
        let T3GameOverTitle = document.querySelector('.modal-title');
        T3GameOverTitle.innerText = `Player 2 is the winner!`;
        let T3GameOverText = document.querySelector('.modal-body');
        T3GameOverText.innerHTML = `<p>Player 1 sank all battleships in ${this.attempts} attempts.
        <br>
        Player 2 sank all battleships in ${this.attempts} attempts.
        <br>
        </p>`;
        t2ModalButton = document.querySelector('#bsButton');
        t2ModalButton.innerText = `Start new game?`;
      }
    }
}


// ********** DOM manipulation for modal transitions *************

// >>>>> starter code for transition 2

// let t2ModalTitle = document.querySelector('.modal-title');
// t2ModalTitle.innerText = `Well done player 1!`;
// let t2ModalText = document.querySelector('.modal-body');
// t2ModalText.innerHTML = `<p>You sank all battleships in ${this.attempts} attempts. <br> <br> Ready player 2?</p>`;

// let t2ModalButton = document.querySelector('#bsButton');
// t2ModalButton.innerText = `Start player 2 game`;
// console.log({t2ModalButton});
// console.log({text: t2ModalButton});


// >>>>> starter code for end of game

// let T3GameOverTitle = document.querySelector('.modal-title');
// T3GameOverTitle.innerText = `Player 2 is the winner!`;
// let T3GameOverText = document.querySelector('.modal-body');
// T3GameOverText.innerHTML = `<p>Player 1 sank all battleships in ${this.attempts} attempts.
// <br>
// Player 2 sank all battleships in ${this.attempts} attempts.
// <br>
// </p>`;
// t2ModalButton = document.querySelector('#bsButton');
// t2ModalButton.innerText = `Start new game?`;


