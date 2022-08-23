class Player {
  constructor(name) {
    this.name = name;
    this.ships = [];
    this.shipsToHit = 2;
    this.attempts = 0;
    this.board = [];
    this.gameBoard = "";
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

        this.gameBoard.players.forEach((player) => {
          console.log(this.name);

          let currentPlayerIndex;
          for (let i = 0; i < this.gameBoard.players.length; i++) {
            if (this.gameBoard.players[i].name === this.name) {
              currentPlayerIndex = i;
            }
          }

          console.log(currentPlayerIndex);
          let lastPlayerIndex = this.gameBoard.players.length - 1;
          console.log(this.gameBoard.players[lastPlayerIndex].name);
          if (this.gameBoard.players[lastPlayerIndex].name !== this.name) {
            console.log(this.gameBoard.players[currentPlayerIndex + 1]);
            this.gameBoard.players[currentPlayerIndex + 1].displayBoard();
            document.getElementById("currentPlayer").innerText =
              this.gameBoard.players[1].name;
            document.getElementById("player1Attempts").innerText =
              this.attempts;
            $("#endPlayer1Modal").modal("show");
          } else if (
            this.gameBoard.players[lastPlayerIndex].name === this.name
          ) {

            console.log(this.name);
            console.log(this.board);
            console.log(this.gameBoard);

            let GameOverTitle = document.getElementById("endOfGame");
            GameOverTitle.innerText = ` is the winner!`;

            let p1Summary = document.getElementById("player1Summary");
            p1Summary.innerText = `Player 1 sank all battleships in ${this.attempts} attempts.`;

            let p2Summary = document.getElementById("player2Summary");
            p2Summary.innerText = `Player 2 sank all battleships in ${this.attempts} attempts.`;

            $("#endPlayer2Modal").modal("show");
          }
        });
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
    let gameBoardView = document.getElementById("game-board");
    gameBoardView.innerHTML = "";
    this.board.forEach((div) => {
      gameBoardView.appendChild(div);
    });
  }
}
