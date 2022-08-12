class Ship {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Game {
    constructor() {
        this.players = [];
    }
}

class Player {
    constructor(name) {
        this.playerGameBoard = [];
        this.name = name
    }
}


// **************************************


class Gameboard {
    constructor(theDivs) {

    }

    addGameBoard() {

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

    setLocation(clickedDivCoordinates){
        let tempX = clickedDivCoordinates.x
        let tempY = clickedDivCoordinates.y
        const orianetation = "V" //prompt("V or H?: ").toUpperCase
        let tempLocation = [];
        // console.log("line 13");
        tempLocation.push(clickedDivCoordinates)
        if (orianetation === 'H') {
            console.log(clickedDivCoordinates)
            for (let i = 0; i < this.health - 1; i++) {
                let tempDivCoordinates = {x: parseInt(tempX), y: parseInt(tempY) + i+1};
                tempLocation.push(tempDivCoordinates)
            }
            console.log(tempLocation);
        } else if (orianetation === 'V') {
            console.log(clickedDivCoordinates)
            for (let i = 0; i < this.health - 1; i++) {
                let tempDivCoordinates = {x: parseInt(tempX) + i+1, y: parseInt(tempY)};
                tempLocation.push(tempDivCoordinates)
            }
            console.log(tempLocation);
        }
        this.location.push(clickedDivCoordinates);

        // We need the logic that will keep the ships confined to the gameboard when placed (collision detection?).
    }

    receiveDamage() {
        this.damage++;
    }
}

class Player {
    constructor(name, color, theAmmo) {
        this.playerName = name;
        this.playerColor = color;
        this.ammo = theAmmo;
    }

    fireRound() {
        
    }

    
}

// let player1 = new Player ('Triangle', 'red', 34);
// console.log(player1);