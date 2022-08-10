window.addEventListener("load", (event) => {
    console.log(event);
    let html = "";

    const gridSize = 10
    for (let x = 1; x <= gridSize; x ++) {
        for (let y = 1; y <= gridSize; y ++) {
            html += `<div class="square" id=x${x}y${y} data-position-x="${x}" data-position-y="${y}">X=${x}
            Y=${y}</div>`;
        }
        
    }

    // console.log('shipTest');
    let shipTest = new Ship(4);
    console.log({shipTest});
    
    // Add all the divs to the HTML
    document.querySelector("#game-board").innerHTML = html;

    document.querySelectorAll(".square").forEach((square) => {
      
  

  
    square.addEventListener("click", () => {
      // TODO: write some code here
      console.log({square});

      let findDiv = document.querySelectorAll(".square");
      // console.log({findDiv});

        const clickedSquare = {x:square.dataset["positionX"],y:square.dataset["positionY"]}
        // console.log({clickedSquare});
        // console.log('setting');
        shipTest.setLocation(clickedSquare)
      

    });
  }); 
    
    
    
    console.log("done");
});