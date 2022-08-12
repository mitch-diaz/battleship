window.addEventListener("load", (event) => {
    // console.log(event);
    let html = "";

    const gridSize = 10
    for (let x = 1; x <= gridSize; x ++) {
        for (let y = 1; y <= gridSize; y ++) {
            html += `<div class="square" id=${x}-${y} data-position-x="${x}" data-position-y="${y}">X=${x}
            Y=${y}</div>`;
        }
        
    }

    // console.log('shipTest');
    let shipTest = new Ship(4);
    console.log({shipTest});
    
    // Add all the divs to the HTML
    document.querySelector("#game-board").innerHTML = html;

    document.querySelectorAll(".square").forEach((clickedDiv) => {
      
  

  
    clickedDiv.addEventListener("click", () => {
      // TODO: write some code here
      console.log({clickedDiv});
      console.log(clickedDiv.id);

      let divIdParse = clickedDiv.id.split('-')
      console.log('divIdParse');
      console.log(divIdParse);

      // const idX = parseInt(divIdParse[0])
      // const idY = parseInt(divIdParse[1])

      // console.log(idX);
      // console.log(idY);

      let findDiv = document.querySelectorAll(".square");
      console.log({findDiv});

      // const clickedclickedDiv = {x:clickedDiv.dataset["positionX"],y:clickedDiv.dataset["positionY"]}
      // console.log({clickedclickedDiv});
      // console.log('setting');

      shipTest.setLocation(divIdParse)

      console.log(shipTest.location);

      let restDivs = findDiv - shipTest.location

      console.log(restDivs);
      

    });
  }); 
    
    
    
    console.log("done");
});