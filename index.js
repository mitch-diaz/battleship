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

  document.querySelector("#game-board").innerHTML = boardCode;
};

window.addEventListener("load", (event) => {
  let gameBoard = new Game();
  let player1 = new Player(" Godzilla");
  let player2 = new Player(" Monkey");

  document.getElementById("p1Name").innerText = player1.name;
  document.getElementById("p2Name").innerText = player2.name;

  gameBoard.addPlayer(player1);
  player1.gameBoard = gameBoard
  gameBoard.addPlayer(player2);
  player2.gameBoard = gameBoard

  // DELETE THIS IF IT IS NOT NEEDED
  // document.querySelector("#game-board").style.display = "inline-block";
  // document.querySelector("#game-board").style.height = "720px";
  // document.querySelector("#game-board").style.width = "720px";
  // document.querySelector("#game-board").style.margin = "40px 0 40px 0";

  //// player 1 set up

  cleanBoard();
  ships.forEach((elem) => {
    let newShip = new Ship(elem.health, elem.name, elem.model);
    player1.ships.push(newShip);
    newShip.player = player1;
    newShip.setLocation("random");
  });

  document.querySelectorAll(".square").forEach((square) => {
    player1.board.push(square);
  });

  player1.displayBoard();

  document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("click", () => {
      // console.log(square);
      gameBoard.takeShot(player1);
      player1.checkIfhit(square);
      document.getElementById("p1Attempts").innerText = player1.attempts;
    });
  });

  /// player 2 set up

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

  player2.displayBoard();

  document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("click", () => {
      // console.log(square);
      gameBoard.takeShot(player2);
      player2.checkIfhit(square);
      document.getElementById("p2Attempts").innerText = player2.attempts;
    });
  });

  //// ----------------------------------------------------------

  document.getElementById("playerOne").addEventListener("click", () => {
    player1.displayBoard();
    document.getElementById("currentPlayer").innerText = player1.name;
  });

  document.getElementById("playerTwo").addEventListener("click", () => {
    player2.displayBoard();

    document.getElementById("currentPlayer").innerText = player2.name;
  });

  cleanBoard();

  document.querySelectorAll(".square").forEach((square) => {
    square.style.backgroundColor = 'blue'
  });

  // console.log("modal opens");
    $('#introModal').modal('show');

  document.getElementById('introModalButton').addEventListener('click', () => {
    player1.displayBoard();
    document.getElementById("currentPlayer").innerText = player1.name;
  });

  document.getElementById("startNewGameButton").addEventListener("click", () => {

    location.reload();
  });

  

  document.getElementById("startNewGameButtonTie").addEventListener("click", () => {

    location.reload();
  });


});




