class Player {
  constructor(name) {
    this.name = name;
    this.ships = [];
    this.shipsToHit = 22;
    this.attempts = 0;
    this.board = [];
    this.gameBoard = "";
  }

  checkIfhit(coordinates) {
    let hitShip = this.ships.filter((ship) =>
      ship.location.includes(coordinates)
    );
    
    if (coordinates.classList.contains("ship")) {
      // console.log(hitShip);
      this.shipsToHit--;
      coordinates.classList.add("hit");
      // console.log('hit');

      let theMsg = document.querySelector("#messageArea");
      theMsg.innerText = `It's a hit!`;
      hitShip[0].receiveDamage();
      this.playSound('hit');
      if (this.shipsToHit === 0) {
        let theMsg = document.querySelector("#messageArea");
        theMsg.innerText = `You sank all my battleships in ${this.attempts} attempts.`;

        this.gameBoard.players.forEach((player) => {
          
          let currentPlayerIndex;
          for (let i = 0; i < this.gameBoard.players.length; i++) {
            if (this.gameBoard.players[i].name === this.name) {
              currentPlayerIndex = i;
            }
          }
          
          let lastPlayerIndex = this.gameBoard.players.length - 1;
          if (this.gameBoard.players[lastPlayerIndex].name !== this.name) {
            this.gameBoard.players[currentPlayerIndex + 1].displayBoard();
            document.getElementById("currentPlayer").innerText =
              this.gameBoard.players[1].name;
            document.getElementById("player1Attempts").innerText =
              this.attempts;
            
              setTimeout(function () {
            document.getElementById("messageArea").innerText = '';
          }, 2000);

             
              
            $("#endPlayer1Modal").modal("show");
          } else if (
            this.gameBoard.players[lastPlayerIndex].name === this.name
          ) {

            
            let player1 = this.gameBoard.players[0];
            let player2 = this.gameBoard.players[1];

            if(player1.attempts === player2.attempts) {

            let gameTied = document.getElementById('endOfGameTie');
            gameTied.innerText = `This game ends in a tie. Play again?`;
            $("#tiedGameModal").modal("show");

            } else {
              let winner = player1.attempts < player2.attempts ? player1.name : player2.name;

              let GameOverTitle = document.getElementById("endOfGame");
              GameOverTitle.innerText = `${winner} is the winner!`;

              let p1Summary = document.getElementById("player1Summary");
              p1Summary.innerText = `${player1.name} sank all battleships in ${player1.attempts} attempts.`;

              let p2Summary = document.getElementById("player2Summary");
              p2Summary.innerText = `${player2.name} sank all battleships in ${player2.attempts} attempts.`;

            $("#endPlayer2Modal").modal("show");
            }
            
            
          }
        });
      }
    } else {
      coordinates.classList.add("miss");
      let theMsg = document.querySelector("#messageArea");
      theMsg.innerText = `It's a miss.`;
      this.playSound('miss');
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

  playSound(event) {
    let audio;
    let miss = new Audio('/assets/mixkit-sea-mine-deep-explosion-1186.wav');
    let hit = new Audio('/assets/mixkit-explosive-impact-from-afar-2758.wav');
    switch (event) {
      case 'miss':
        audio = miss;
        break;
      case 'hit':
        audio = hit;
        break;
    }
console.log(audio);
   audio.play();
  }

  

}


  