class Gameboard {
    constructor(theDivs) {

        
    }

    addPlayer() {

    };

    addGameBoard() {
        
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

        // We need the logic to keep the ships confined to the gameboard.
    }

    receiveDamage() {
        this.damage++;
    }
}

class Player {
    constructor(playerName, theAmmo,) {
        this.theName = playerName;
        this.ammo = theAmmo;
    }

    attack() {
        return this.health;
    }


}


