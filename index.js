window.addEventListener("load", (event) => {
    // console.log(event);
    
    let gameBoard = new Gameboard;
    
    let html = gameBoard.addGameBoard();


    // console.log('shipTest');
    let shipTest = new Ship(4);
    console.log({shipTest});
    
    // Add all the divs to the HTML
    document.querySelector("#game-board").innerHTML = html;

    document.querySelectorAll(".square").forEach((square) => {
    
    square.addEventListener("click", () => {
      // TODO: write some code here
      console.log({square});
      const clickedSquare = {x:square.dataset["positionX"],y:square.dataset["positionY"]}
      // console.log({clickedSquare});
      // console.log('setting');
      shipTest.setLocation(clickedSquare)
      

    });
  }); 
    
    
    
    // console.log("done");
});