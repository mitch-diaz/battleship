class Player {
  constructor(playerName) {
    this.name = playerName;
    this.shotAttempts = 0;
  }

  countBoardClicks() {
    this.gameBoard[x][y];
    this.shotAttempts++
  }

}


//   displayTopMsg() {
//     let clickOnDiv = document.querySelector('.square');
//     clickOnDiv.addEventListener('click', () => {
//       let topMsg = document.querySelector('#clickResultMsg, span');
//       topMsg.innerText = "It's a miss.";
//       console.log(clickOnDiv);
//     })
//   }
  
// }

// const missedMsg = "It's a miss.";
// const hitMsg = "It's a hit!";
// const alreadyHitMsg = "You hit this ship before.";
// const sunkMsg = "You sunk my ${shipName}";
// const allSunkMsg = "You sank all of my battleships in ${shotAttempts} attempts."