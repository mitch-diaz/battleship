class Gameboard {
  constructor() {
    
  }

    addGameBoard() {
    let boardCode = ""
    const gridSize = 10;
    for (let x = 1; x <= gridSize; x++) {
      for (let y = 1; y <= gridSize; y++) {
        boardCode += `<div class="square" id=${x}-${y} data-position-x="${x}" data-position-y="${y}">X=${x}
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

class Ship {
  constructor(size, name) {
    this.health = size;
    this.shipName = name;
    this.damage = 0;
    this.location = [];
  }

  setLocation(clickedDivID) {
    console.log(clickedDivID);
    const idX = parseInt(clickedDivID.x);
    const idY = parseInt(clickedDivID.y);

    const orientation = "H"; //prompt("V or H?: ").toUpperCase
    let tempLocation = [];
    // console.log("line 13");

    let clickedDiv = document.getElementById(`${idX}-${idY}`);
    tempLocation.push(clickedDiv);
    if (orientation === "H") {
      console.log(clickedDivID);
      for (let i = 0; i < this.health - 1; i++) {
        let nextDiv = document.getElementById(`${idX}-${idY + i + 1}`);
        tempLocation.push(nextDiv);
      }

      console.log(tempLocation);
    } else if (orientation === "V") {
      console.log(clickedDivID);
      for (let i = 0; i < this.health - 1; i++) {
        let nextDiv = document.getElementById(`${idX + i + 1}-${idY}`);
        tempLocation.push(nextDiv);
      }

      console.log(tempLocation);
    }

    this.location = tempLocation;
    console.log(this.location);
  }

  receiveDamage() {
    this.damage++;
  }
}

class Player {
  constructor(theAmmo) {
    this.ammo = theAmmo;
  }

    attack() {
        return this.health;
    }


}




