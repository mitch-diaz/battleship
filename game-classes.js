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
        this.location = []
    }

    setLocation(clickedDivID){
        const idX = parseInt(clickedDivID[0]);
        const idY = parseInt(clickedDivID[1]);

        const orianetation = "H" //prompt("V or H?: ").toUpperCase
        let tempLocation = [];
        // console.log("line 13");

        let clickedDiv = document.getElementById(`${idX}-${idY}`);
        tempLocation.push(clickedDiv)
        if (orianetation === 'H') {
            console.log(clickedDivID)
            for (let i = 0; i < this.health - 1; i++) {
                let nextDiv = document.getElementById(`${idX}-${idY + i + 1}`);
                tempLocation.push(nextDiv)
            }

            console.log(tempLocation);

        } else if (orianetation === 'V') {
            console.log(clickedDivID)
            for (let i = 0; i < this.health - 1; i++) {
                let nextDiv = document.getElementById(`${idX + i + 1}-${idY}`);
                tempLocation.push(nextDiv)
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
    constructor(theAmmo,) {
        this.ammo = theAmmo;
    }

    attack() {
        return this.health;
    }


}




