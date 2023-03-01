const ships = [
  { model: "Aircraft Carrier", health: 5 },
  { model: "Battleship", health: 4 },
  { model: "Cruiser", health: 3 },
  { model: "Frigate", health: 3 },
  { model: "Frigate", health: 3 },
  { model: "Destroyer", health: 2 },
  { model: "Destroyer", health: 2 },
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

  // -=-=-=-=-=- PLAYER 1 SET UP -=-=-=-=-=-
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
      gameBoard.takeShot(player1);
      player1.checkIfhit(square);
      document.getElementById("p1Attempts").innerText = player1.attempts;
    });
  });

  // -=-=-=-=-=- PLAYER 2 SET UP -=-=-=-=-=-
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
      gameBoard.takeShot(player2);
      player2.checkIfhit(square);
      document.getElementById("p2Attempts").innerText = player2.attempts;
    });
  });

  // -=-=-=-=-=- CURRENT PLAYER NAME DISPLAY -=-=-=-=-=-
  document.getElementById("playerOne").addEventListener("click", () => {
    player1.displayBoard();
    document.getElementById("currentPlayer").innerText = `${player1.name} is playing`;
  });

  document.getElementById("playerTwo").addEventListener("click", () => {
    player2.displayBoard();
    document.getElementById("currentPlayer").innerText = `${player2.name} is playing`;
  });

  cleanBoard();

  document.querySelectorAll(".square").forEach((square) => {
    square.style.backgroundColor = 'blue'
  });

    $('#introModal').modal('show');

  document.getElementById('introModalButton').addEventListener('click', () => {
    player1.displayBoard();
    document.getElementById("currentPlayer").innerText = `${player1.name} is playing`;
  });

  document.getElementById("startNewGameButton").addEventListener("click", () => {
    location.reload();
  });

  document.getElementById("startNewGameButtonTie").addEventListener("click", () => {
    location.reload();
  });
});
