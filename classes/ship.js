class Ship {
  constructor(size, name, model) {
    this.player = {}
    this.health = size;
    this.shipName = name;
    this.model = model;
    this.damage = 0;
    this.isSunk = false;
    this.location = [];
    this.water = [];
  }

  setLocation(clickedDiv) {
    const availableDivs = [...document.querySelectorAll(".square.open")];
  
    // console.log(availableDivs);
    let randomIndexAvailable = Math.floor(Math.random() * availableDivs.length);

    if (clickedDiv === "random") {
      let randomDiv = availableDivs[randomIndexAvailable];
      clickedDiv = randomDiv;
    }

    let clickedDivId = {
      x: clickedDiv.dataset["positionX"],
      y: clickedDiv.dataset["positionY"],
    };
    let idX = parseInt(clickedDivId.x);
    let idY = parseInt(clickedDivId.y);

    // randomly select h or v

    let orientationList = ["V", "H"];
    let randomOrientationIndex = Math.floor(
      Math.random() * orientationList.length
    );
    // const orientation = "H"; //prompt("V or H?: ").toUpperCase
    const orientation = orientationList[randomOrientationIndex]; //prompt("V or H?: ").toUpperCase
    let tempLocation = [];

    // PLace ships horizontal (x-axis)
    if (orientation === "H") {
      let lastDiv = document.getElementById(`${idX}-${idY + this.health - 1}`);
      while (
        !availableDivs.includes(clickedDiv) ||
        !availableDivs.includes(lastDiv)
      ) {
        randomIndexAvailable = Math.floor(Math.random() * availableDivs.length);
        clickedDiv = availableDivs[randomIndexAvailable];
        clickedDivId = {
          x: clickedDiv.dataset["positionX"],
          y: clickedDiv.dataset["positionY"],
        };
        idX = parseInt(clickedDivId.x);
        idY = parseInt(clickedDivId.y);
        lastDiv = document.getElementById(`${idX}-${idY + this.health - 1}`);
      }
      if (lastDiv) {
        clickedDiv.classList.add("ship");
        clickedDiv.classList.remove("open");
        tempLocation.push(clickedDiv);
        for (let i = 0; i < this.health - 1; i++) {
          let nextDiv = document.getElementById(`${idX}-${idY + i + 1}`);
          nextDiv.classList.add("ship");
          nextDiv.classList.remove("open");
          tempLocation.push(nextDiv);
        }
      }

      let water = [];
      tempLocation.forEach((div) => {
        const idX = parseInt(div.dataset["positionX"]);
        const idY = parseInt(div.dataset["positionY"]);

        const topLeft = document.getElementById(`${idX - 1}-${idY - 1}`);
        const topCenter = document.getElementById(`${idX}-${idY - 1}`);
        const topRight = document.getElementById(`${idX + 1}-${idY - 1}`);

        const right = document.getElementById(`${idX + 1}-${idY}`);
        const left = document.getElementById(`${idX - 1}-${idY}`);

        const bottomLeft = document.getElementById(`${idX - 1}-${idY + 1}`);
        const bottomCenter = document.getElementById(`${idX}-${idY + 1}`);
        const bottomRight = document.getElementById(`${idX + 1}-${idY + 1}`);

        let divsAround = [
          topCenter,
          topRight,
          right,
          bottomRight,
          bottomCenter,
          bottomLeft,
          left,
          topLeft,
        ];

        divsAround.forEach((div) => {
          if (!tempLocation.includes(div) && !water.includes(div)) {
            water.push(div);
          }
        });
      });

      water.forEach((div) => {
        if (div) {
          div.classList.remove("open");
          div.classList.add("water");
          this.water.push(div);
        }
      });

      //  Place ships vertical (y-axis)
    } else if (orientation === "V") {
      let lastDiv = document.getElementById(`${idX + this.health - 1}-${idY}`);
      while (
        !availableDivs.includes(clickedDiv) ||
        !availableDivs.includes(lastDiv)
      ) {
        randomIndexAvailable = Math.floor(Math.random() * availableDivs.length);
        clickedDiv = availableDivs[randomIndexAvailable];
        clickedDivId = {
          x: clickedDiv.dataset["positionX"],
          y: clickedDiv.dataset["positionY"],
        };
        idX = parseInt(clickedDivId.x);
        idY = parseInt(clickedDivId.y);
        lastDiv = document.getElementById(`${idX + this.health - 1}-${idY}`);
      }
      if (lastDiv) {
        clickedDiv.classList.add("ship");
        clickedDiv.classList.remove("open");
        tempLocation.push(clickedDiv);
        for (let i = 0; i < this.health - 1; i++) {
          let nextDiv = document.getElementById(`${idX + i + 1}-${idY}`);
          nextDiv.classList.add("ship");
          nextDiv.classList.remove("open");
          tempLocation.push(nextDiv);
        }
      }

      let water = [];
      tempLocation.forEach((div) => {
        const idX = parseInt(div.dataset["positionX"]);
        const idY = parseInt(div.dataset["positionY"]);

        const topLeft = document.getElementById(`${idX - 1}-${idY - 1}`);
        const topCenter = document.getElementById(`${idX}-${idY - 1}`);
        const topRight = document.getElementById(`${idX + 1}-${idY - 1}`);

        const right = document.getElementById(`${idX + 1}-${idY}`);
        const left = document.getElementById(`${idX - 1}-${idY}`);

        const bottomLeft = document.getElementById(`${idX - 1}-${idY + 1}`);
        const bottomCenter = document.getElementById(`${idX}-${idY + 1}`);
        const bottomRight = document.getElementById(`${idX + 1}-${idY + 1}`);

        let divsAround = [
          topCenter,
          topRight,
          right,
          bottomRight,
          bottomCenter,
          bottomLeft,
          left,
          topLeft,
        ];

        divsAround.forEach((div) => {
          if (!tempLocation.includes(div) && !water.includes(div)) {
            water.push(div);
          }
        });
      });

      water.forEach((div) => {
        if (div) {
          div.classList.remove("open");
          div.classList.add("water");
          this.water.push(div);
        }
      });

      //  Place ships vertical (y-axis)
    }

    tempLocation.forEach((div) => {
      div.classList.remove("open");
      div.classList.add("ship");
    });

    this.location = tempLocation;

  }

  receiveDamage() {
    this.damage++;
    // console.log(this.isSunk);
    if (this.health - this.damage === 0) {
      this.water.forEach((elem) => {
        // elem.classList.add('miss')
      });
      // console.log(`You sunk my ${this.model} ${this.shipName}`);
      let theMsg = document.querySelector('#messageArea');
      theMsg.innerText = `You sunk my ${this.model}
      ${this.shipName}`;
    }
  }
}
