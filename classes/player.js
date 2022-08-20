class Player {
  constructor(name) {
    this.name = name;
    this.ships = [];
    this.shipsToHit = 22;
    this.attempts = 0;
    this.board = [];
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
        setTimeout(function () {
          alert("game over");
        }, 500);
      }
    } else {
      coordinates.classList.add("miss");
      console.log("miss");
      let theMsg = document.querySelector("#messageArea, span");
      theMsg.innerText = `It's a miss.`;
    }
  }

  displayBoard() {
    document.querySelector("#game-board").innerHTML = ""
    this.board.forEach((div) => {
      document.querySelector("#game-board").appendChild(div);
    });
    
  }

  

}
