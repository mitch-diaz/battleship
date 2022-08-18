class Ship {
  constructor(size, name) {
    this.health = size;
    this.shipName = name;
    this.damage = 0;
    this.location = [];
  }

  setLocation(clickedDivID) {
    // console.log(clickedDivID);
    const idX = parseInt(clickedDivID.x);
    const idY = parseInt(clickedDivID.y);

    // randomly select h or v

    const orientation = "V"; //prompt("V or H?: ").toUpperCase
    let tempLocation = [];
    // console.log("line 13");

    let clickedDiv = document.getElementById(`${idX}-${idY}`);
    clickedDiv.classList.add("ship")
    tempLocation.push(clickedDiv);
    if (orientation === "H") {
      console.log(clickedDivID);
      for (let i = 0; i < this.health - 1; i++) {
        let nextDiv = document.getElementById(`${idX}-${idY + i + 1}`);
        console.log({nextDiv});
        nextDiv.classList.add("ship");
        tempLocation.push(nextDiv);
      }

      console.log(tempLocation);
    } else if (orientation === "V") {
      // console.log(clickedDivID);
      for (let i = 0; i < this.health - 1; i++) {
        let nextDiv = document.getElementById(`${idX + i + 1}-${idY}`);
        nextDiv.classList.add("ship");
        tempLocation.push(nextDiv);
      }

      // console.log(tempLocation);
    }

    this.location = tempLocation;
    // console.log(this.location);
  }

  receiveDamage() {
    this.damage++;
  }
}