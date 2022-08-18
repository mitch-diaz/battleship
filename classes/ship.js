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
    let allShipsLocations = [...document.querySelectorAll(".square.ship")];
    let availableDivs = [...document.querySelectorAll(".square.open")];
    // console.log(availableDivs);
    let randomIndexAvailable = Math.floor(Math.random() * availableDivs.length);

    if (clickedDiv === "random") {
      console.log(clickedDiv);
      let randomDiv = availableDivs[randomIndexAvailable];
      clickedDiv = randomDiv;
      console.log(clickedDiv);
    }
    const clickedDivID = {x:clickedDiv.dataset["positionX"],y:clickedDiv.dataset["positionY"]}
    const idX = parseInt(clickedDivID.x);
    const idY = parseInt(clickedDivID.y);

    let lastDiv = document.getElementById(`${idX}-${idY + this.health - 1}`);

    if (!availableDivs.includes(clickedDiv)) {
      console.log('nope next');
      console.log(clickedDiv);
      randomIndexAvailable = Math.floor(Math.random() * availableDivs.length);
      clickedDiv = availableDivs[randomIndexAvailable];
      console.log(clickedDiv);
      this.setLocation(clickedDiv)
    }
   
    


    // console.log(clickedDivID);
    
    
    // randomly select h or v

    // const orientation = "H"; //prompt("V or H?: ").toUpperCase
    const orientation = "V"; //prompt("V or H?: ").toUpperCase
    let tempLocation = [];
    // console.log("line 13");
    // let clickedDiv = document.getElementById(`${idX}-${idY}`);
    
    // let availableDivs = [...document.querySelectorAll(".square.open")]; 

    // const randomIndexAvailable = Math.floor(Math.random() * availableDivs.length);
    
    
    
    
    

      if (orientation === "H") {
        
        // console.log(lastDiv);
        // if (!availableDivs.includes(lastDiv)) {
        //     console.log('nope')
        //     return false
        //    }

        if (lastDiv) {
          // clickedDiv.classList.add("ship")
          tempLocation.push(clickedDiv);
          // console.log(clickedDivID);
          for (let i = 0; i < this.health - 1; i++) {
            let nextDiv = document.getElementById(`${idX}-${idY + i + 1}`);
            // console.log({nextDiv});
            // nextDiv.classList.add("ship");
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
              console.log(div);
            }
          })

          
          
          
          
          
          // console.log(idX);
          // console.log(idY);
          // let topCenter = 
          // if () {
            
            // }
          });
          
        
        // console.log('line 85');
        water.forEach((div) => {
          if (div){
            div.classList.remove("open");
            div.classList.add("water");
            this.water.push(div);
          }
            // console.log({div});
            // console.log({allShipsLocations});

          }
        )



        // console.log(tempLocation);
        // console.log(water);

      } else if (orientation === "V") {
          let lastDiv = document.getElementById(`${idX + this.health - 1}-${idY}`);
        // console.log(lastDiv);
        if (!availableDivs.includes(lastDiv)) {
            console.log('check for last dive VERTICAL FALSE')
            randomIndexAvailable = Math.floor(Math.random() * availableDivs.length);
            clickedDiv = availableDivs[randomIndexAvailable];
            console.log(clickedDiv);
            
            this.setLocation(clickedDiv)
           }


        if (lastDiv) {
          // clickedDiv.classList.add("ship")
          tempLocation.push(clickedDiv);
          // console.log(clickedDivID);
          for (let i = 0; i < this.health - 1; i++) {
            let nextDiv = document.getElementById(`${idX + i + 1}-${idY}`);
            // console.log({nextDiv});
            // nextDiv.classList.add("ship");
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

          
          
          
          
          
          // console.log(idX);
          // console.log(idY);
          // let topCenter = 
          // if () {
            
            // }
        });
          
        
        // console.log('line 85');
        water.forEach((div) => {
          if (div){
            div.classList.remove("open");
            div.classList.add("water");
            this.water.push(div);
          }
            // console.log({div});
            // console.log({allShipsLocations});

          }
        )

      } 
    tempLocation.forEach((div) => {
      div.classList.remove('open');
      div.classList.add('ship');
    })

    this.location = tempLocation;
    // console.log(this.location);
    // console.log(availableDivs);
  }

  receiveDamage() {
    this.damage++;
  }
}