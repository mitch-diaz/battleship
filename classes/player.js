class Player {
  constructor(playerName) {
    this.name = playerName;
    this.player1Attempts = 0;
    this.player2Attempts = 0;
  }

  countBoardClicks() {
    this.player1Attempts++
  }

  showTopMsg() {
    let squareDiv = document.querySelector('#game-board, .square');
    console.log({squareDiv});
    squareDiv.addEventListener('click', () => {
      let topMsg = document.querySelector('#clickResultMsg, span');
      topMsg.innerText = `You sank my battleship!`;
    })
  }

}


// Display top msg
// let squareDiv = document.querySelector('#game-board, .square');
// console.log({squareDiv});
// squareDiv.addEventListener('click', () => {
//   let topMsg = document.querySelector('#clickResultMsg, span');
//   topMsg.innerText = `You sank my battleship!`;
// })


//  Count player attempts
let countP1Attempts = document.querySelector('#p1Attempts');
// console.log({countP1Attempts});
squareDiv.addEventListener('click', () => {
  countP1Attempts.innerText = this.player1Attempts +=1;
})
console.log({countP1Attempts});


// const topMsg = document.querySelector('#clickResultMsg, span');
// console.log(topMsg);
// topMsg.innerText = `It's a miss.`;


// const missedMsg = "It's a miss.";
// const hitMsg = "It's a hit!";
// const alreadyHitMsg = "You hit this ship before.";
// const sunkMsg = "You sunk my ${shipName}";
// const allSunkMsg = "You sank all of my battleships in 25 attempts."