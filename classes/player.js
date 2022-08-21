class Player {
  constructor(name) {
    this.name = name;
    this.ships = [];
    this.shipsToHit = 22;
    this.attempts = 0;
    this.board = [];
    this.gameBoard = ""
  }

  checkIfhit(coordinates) {
    let hitShip = this.ships.filter((ship) =>
      ship.location.includes(coordinates)
    );
    console.log("hitShip");
    console.log(hitShip);
    if (coordinates.classList.contains("ship")) {
      // console.log(hitShip);
      this.shipsToHit--;
      coordinates.classList.add("hit");
      // console.log('hit');

      let theMsg = document.querySelector("#messageArea");
      theMsg.innerText = `It's a hit!`;
      hitShip[0].receiveDamage();
      if (this.shipsToHit === 0) {
        let theMsg = document.querySelector("#messageArea, span");
        theMsg.innerText = `You sank all my battleships in ${this.attempts} attempts.`;
        // setTimeout(function () {
        //   alert("game over");
        // }, 500);
        let player2 = this.gameBoard.players[1]

        console.log(player2);

        player2.displayBoard();
        document.getElementById("currentPlayer").innerText = player2.name;
        let t2ModalTitle = document.querySelector('.modal-title');
        t2ModalTitle.innerText = `Well done player 1!`;
        let t2ModalText = document.querySelector('.modal-body');
        t2ModalText.innerHTML = `<p>You sank all battleships in ${this.attempts} attempts. <br> <br> Ready player 2?</p>`;
        let t2ModalButton = document.querySelector('#bsButton');
        t2ModalButton.innerText = `Start player 2 game`;
        $('#exampleModal').modal('show');
      }
    } else {
      coordinates.classList.add("miss");
      console.log("miss");
      let theMsg = document.querySelector("#messageArea, span");
      theMsg.innerText = `It's a miss.`;
    }
  }

  displayBoard() {
    // console.log(this.board);
    let gameBoardView = document.getElementById('game-board');
    gameBoardView.innerHTML = ""
    this.board.forEach((div) => {
        gameBoardView.appendChild(div)
    })
  }

}
