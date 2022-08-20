window.addEventListener("load", (event) => {
  let gameBoard = new Game();
  let html = gameBoard.addGameBoard();

  const ships = [
    { name: "USS Impulse (PG-68)",model: "Aircraft Carrier", health: 5 },
    { name: "USS Alacrity (PG-87)",model: "Battleship", health: 4 },
    { name: "USS Haste (PG-92)",model: "Cruiser", health: 3 },
    { name: "USS Leader (PYc-42)",model: "Frigate", health: 3 },
    { name: "USS Ossipee (WPG-50)",model: "Frigate", health: 3 },
    { name: "USS Winnemucca (PC-1145)",model: "Destroyer", health: 2 },
    { name: "USS Alacrity (PG-87)",model: "Destroyer", health: 2 },
  ];

  // Add all the divs to the HTML
  document.querySelector("#game-board").innerHTML = html;

  document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("click", () => {
      // console.log(square);
      gameBoard.takeShot()
      gameBoard.checkIfhit(square)
    });
  });

  ships.forEach((elem) => {
    let newShip = new Ship(elem.health, elem.name, elem.model);
    newShip.setLocation("random");
    gameBoard.ships.push(newShip);
  });

  let shipLocationCounter = 0
  gameBoard.ships.forEach((elem) => {
    elem.location.forEach((loc) => {
      shipLocationCounter++
    });
  });

  gameBoard.shipsToHit = shipLocationCounter
  console.log(gameBoard.ships);
  console.log(shipLocationCounter);
  console.log(gameBoard.shipsToHit);


 
});
