const ships = [
  { name: "USS Impulse (PG-68)", model: "Aircraft Carrier", health: 5 },
  { name: "USS Alacrity (PG-87)", model: "Battleship", health: 4 },
  { name: "USS Haste (PG-92)", model: "Cruiser", health: 3 },
  { name: "USS Leader (PYc-42)", model: "Frigate", health: 3 },
  { name: "USS Ossipee (WPG-50)", model: "Frigate", health: 3 },
  { name: "USS Winnemucca (PC-1145)", model: "Destroyer", health: 2 },
  { name: "USS Alacrity (PG-87)", model: "Destroyer", health: 2 },
];

const cleanBoard = () => {
  let boardCode = "";
  const gridSize = 10;
  for (let x = 1; x <= gridSize; x++) {
    for (let y = 1; y <= gridSize; y++) {
      boardCode += `<div class="square open" id=${x}-${y} data-position-x="${x}" data-position-y="${y}"></div>`;
    }
  }

  // Add all the divs to the HTML
  document.querySelector("#game-board").innerHTML = boardCode;
};

window.addEventListener("load", (event) => {
  let gameBoard = new Game();
  let player1 = new Player("Mitch");
  let player2 = new Player("Zequi");

  document.getElementById('p1Name').innerText = player1.name
  document.getElementById('p2Name').innerText = player2.name


  gameBoard.players.push(player1);
  gameBoard.players.push(player2);

  // let boardCode = "";
  // const gridSize = 10;
  // for (let x = 1; x <= gridSize; x++) {
  //   for (let y = 1; y <= gridSize; y++) {
  //     boardCode += `<div class="square open" id=${x}-${y} data-position-x="${x}" data-position-y="${y}"></div>`;
  //   }
  // }
  cleanBoard();

  // Add all the divs to the HTML
  // document.querySelector("#game-board").innerHTML = boardCode;

  
  ships.forEach((elem) => {
    let newShip = new Ship(elem.health, elem.name, elem.model);
    player1.ships.push(newShip);
    newShip.player = player1;
    newShip.setLocation("random");
  });

  document.querySelectorAll(".square").forEach((square) => {
    player1.board.push(square);
  });

  cleanBoard();

  ships.forEach((elem) => {
    let newShip = new Ship(elem.health, elem.name, elem.model);
    player2.ships.push(newShip);
    newShip.player = player2;
    newShip.setLocation("random");
  });

  document.querySelectorAll(".square").forEach((square) => {
    player2.board.push(square);
  });

  
  
  
  document.getElementById("playerOne").addEventListener("click", () => {
    player1.displayBoard();

    setTimeout(function () {
          
      document.querySelectorAll(".square").forEach((square) => {
        square.addEventListener("click", () => {
          // console.log(square);
          gameBoard.takeShot(player1);
          player1.checkIfhit(square);
          document.getElementById('p1Attempts').innerText = player1.attempts
        });
      });
        }, 500);

  });

 
 
 
 
 
 
  document.getElementById("playerTwo").addEventListener("click", () => {
    player2.displayBoard();

    setTimeout(function () {
          
      document.querySelectorAll(".square").forEach((square) => {
        square.addEventListener("click", () => {
          // console.log(square);
          gameBoard.takeShot(player2);
          player2.checkIfhit(square);
          document.getElementById('p2Attempts').innerText = player2.attempts
        });
      });
        }, 500);

  });

  cleanBoard();

  console.log("modal opens");
});
