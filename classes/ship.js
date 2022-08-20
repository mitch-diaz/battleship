class Ship {
  constructor(size, name) {
    this.health = size;
    this.shipName = name;
    this.damage = 0;
    this.isSunk = this.health - this.damage === 0
    this.location = [];
    this.water = []
  }

  setLocation(clickedDiv) {
    let availableDivs = [...document.querySelectorAll(".open")];
    let randomIndexAvailable = Math.floor(Math.random() * availableDivs.length);
    console.log(availableDivs);
    if (clickedDiv === "random") {
      console.log(clickedDiv);
      let randomDiv = availableDivs[randomIndexAvailable];
      clickedDiv = randomDiv;
    }
    console.log(clickedDiv);
    const clickedDivId = {x:clickedDiv.dataset["positionX"],y:clickedDiv.dataset["positionY"]}
    const idX = parseInt(clickedDivId.x);
    const idY = parseInt(clickedDivId.y);
    console.log(idX);

    let lastDiv = document.getElementById(`${idX}-${idY + this.health - 1}`);
    console.log(lastDiv);
    if (!availableDivs.includes(clickedDiv)) {
      console.log('nope next');
      console.log(clickedDiv);
      randomIndexAvailable = Math.floor(Math.random() * availableDivs.length);
      console.log(availableDivs);
      clickedDiv = availableDivs[randomIndexAvailable];
      console.log(clickedDiv);
      this.setLocation(clickedDiv)
    }
   
    // randomly select h or v
    // const orientation = "H"; //prompt("V or H?: ").toUpperCase
    const orientation = "H"; //prompt("V or H?: ").toUpperCase
    let tempLocation = [];
    
      // PLace ships horizontal (x-axis)
      if (orientation === "H") {
        if (lastDiv) {
          clickedDiv.classList.add("ship")
          clickedDiv.classList.remove("open")
          tempLocation.push(clickedDiv);
          for (let i = 0; i < this.health - 1; i++) {
            let nextDiv = document.getElementById(`${idX}-${idY + i + 1}`);
            nextDiv.classList.add("ship");
            nextDiv.classList.remove("open");
            tempLocation.push(nextDiv);
          }
        }


        let water = []
        tempLocation.forEach((div) => {
          const idX = parseInt(div.dataset["positionX"]);
          const idY = parseInt(div.dataset["positionY"]);

          const topLeft = document.getElementById(`${idX - 1}-${idY - 1}`);
          const topCenter = document.getElementById(`${idX}-${idY - 1}`);
          const topRight = document.getElementById(`${idX+1}-${idY - 1}`);
          
          const right = document.getElementById(`${idX+1}-${idY}`);
          const left = document.getElementById(`${idX-1}-${idY}`);
                    
          const bottomLeft = document.getElementById(`${idX - 1}-${idY + 1}`);
          const bottomCenter = document.getElementById(`${idX}-${idY + 1}`);
          const bottomRight = document.getElementById(`${idX+1}-${idY + 1}`);

          let divsAround = [topCenter,topRight,right,bottomRight,bottomCenter,bottomLeft,left,topLeft]

          divsAround.forEach((div) => {
            if (!tempLocation.includes(div) && !water.includes(div)) {
              water.push(div)
            }
          })
        });
          
        water.forEach((div) => {
          if (div){
            div.classList.remove("open");
            div.classList.add("water");
            this.water.push(div);
          }
        })

          //  Place ships vertical (y-axis)
      } else if (orientation === "V") {
          let lastDiv = document.getElementById(`${idX + this.health - 1}-${idY}`);
          if (!availableDivs.includes(lastDiv)) {
            console.log('check for last dive VERTICAL FALSE')
            randomIndexAvailable = Math.floor(Math.random() * availableDivs.length);
            clickedDiv = availableDivs[randomIndexAvailable];
            this.setLocation(clickedDiv)
          }


        if (lastDiv) {
          tempLocation.push(clickedDiv);
          for (let i = 0; i < this.health - 1; i++) {
            let nextDiv = document.getElementById(`${idX + i + 1}-${idY}`);
            tempLocation.push(nextDiv);
          }
        }

        let water = []
        tempLocation.forEach((div) => {
          const idX = parseInt(div.dataset["positionX"]);
          const idY = parseInt(div.dataset["positionY"]);


          const topLeft = document.getElementById(`${idX - 1}-${idY - 1}`);
          const topCenter = document.getElementById(`${idX}-${idY - 1}`);
          const topRight = document.getElementById(`${idX+1}-${idY - 1}`);
          
          const right = document.getElementById(`${idX+1}-${idY}`);
          const left = document.getElementById(`${idX-1}-${idY}`);
                    
          const bottomLeft = document.getElementById(`${idX - 1}-${idY + 1}`);
          const bottomCenter = document.getElementById(`${idX}-${idY + 1}`);
          const bottomRight = document.getElementById(`${idX+1}-${idY + 1}`);

          let divsAround = [topCenter,topRight,right,bottomRight,bottomCenter,bottomLeft,left,topLeft]

          divsAround.forEach((div) => {
            if (!tempLocation.includes(div) && !water.includes(div)) {
            // if (!tempLocation.includes(div)) {
              water.push(div)
              console.log(div);
              
            }
          })
        });
          
        water.forEach((div) => {
          if (div){
            div.classList.remove("open");
            div.classList.add("water");
            this.water.push(div);
          }
        })
      } 

    tempLocation.forEach((div) => {
      div.classList.remove('open');
      div.classList.add('ship');
    })

    this.location = tempLocation;
  }

  receiveDamage() {
    this.damage++;
  }
}