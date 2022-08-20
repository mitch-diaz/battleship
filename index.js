window.addEventListener("load", (event) => {
  let gameBoard = new Game();
  let html = gameBoard.addGameBoard();

  const ships = [
    { name: "Aircraft Carrier", health: 5 },
    { name: "Battleship", health: 4 },
    { name: "Cruiser", health: 3 },
    { name: "Frigate", health: 3 },
    { name: "Destroyer", health: 2 },
  ];

  // Add all the divs to the HTML
  document.querySelector("#game-board").innerHTML = html;

  document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("click", () => {
      console.log(square);
      
    });
  });

  ships.forEach((elem) => {
    let newShip = new Ship(elem.health, elem.name);
    newShip.setLocation("random");
    gameBoard.ships.push(newShip);
  });

  let shipLocationCounter = 0
  gameBoard.ships.forEach((elem) => {
    elem.location.forEach((loc) => {
      shipLocationCounter++
    });
  });


 
});
