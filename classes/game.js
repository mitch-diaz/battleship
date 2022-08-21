class Game {
  constructor() {
    this.players = []
    // this.shipsToHit = 0
    
  }

    addGameBoard() {
    
    return boardCode
  }

  
  takeShot (playerIn) {
    this.players.forEach((player) => {
      if (playerIn.name === player.name) {
        player.attempts++
      }
    })
  }
  

    addPlayer() {

    }

    displayScoreboard() {
        // display scoreboard info:
        // Hits, Sunk ships, Total points
    }

    displayFiringReport() {
        
    }

    // displayModal() {
    //   if (this.shipsToHit === 0) {
    //     let T3GameOverTitle = document.querySelector('.modal-title');
    //     T3GameOverTitle.innerText = `Player 2 is the winner!`;
    //     let T3GameOverText = document.querySelector('.modal-body');
    //     T3GameOverText.innerHTML = `<p>Player 1 sank all battleships in ${this.attempts} attempts.
    //     <br>
    //     Player 2 sank all battleships in ${this.attempts} attempts.
    //     <br>
    //     </p>`;
    //     t2ModalButton = document.querySelector('#bsButton');
    //     t2ModalButton.innerText = `Start new game?`;
    //   }
    // }
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


