class Gameboard {
  constructor() {
    this.ships = []
    
  }

    addGameBoard() {
    let boardCode = ""
    const gridSize = 10;
    for (let x = 1; x <= gridSize; x++) {
      for (let y = 1; y <= gridSize; y++) {
        boardCode += `<div class="square open" id=${x}-${y} data-position-x="${x}" data-position-y="${y}">X=${x}
            Y=${y}</div>`;
      }
    }
    return boardCode
  }

  addShip(coordinates) {
    // get coordinates
    // pick direction H or V
    // count horizontally or vertically if enough space
    // collision check
    // if all good add ship
  }

    addPlayer() {

    }

    displayScoreboard() {
        // display scoreboard info:
        // Hits, Sunk ships, Total points
    }

    displayFiringReport() {
        
    }

    displaySunkShips() {

    }
}