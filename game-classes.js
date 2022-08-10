class Ship {
    constructor(size) {
        this.health = size;
        this.damage = 0;
        this.location = []
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




class Carrier extends Ship {
    constructor(shipHealth) {
        super(shipHealth);
    }

}

class Battleship extends Ship {
    constructor(shipHealth) {
        super(shipHealth);
    }
}

class Cruiser extends Ship {
    constructor(shipHealth) {
        super(shipHealth);
    }
}

class Destroyer extends Ship {
    constructor(shipHealth) {
        super(shipHealth);
    }
}