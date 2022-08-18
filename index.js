window.addEventListener("load", (event) => {
  
  let gameBoard = new Gameboard;
  let html = gameBoard.addGameBoard();

  let shipTest = new Ship(4);
  
  // Add all the divs to the HTML
  document.querySelector("#game-board").innerHTML = html;
  
  document.querySelectorAll(".square").forEach((square) => {
  
    square.addEventListener("click", () => {
    // TODO: write some code here
      // console.log({square});
      const clickedSquare = {x:square.dataset["positionX"],y:square.dataset["positionY"]}
      shipTest.setLocation(clickedSquare)
      let theMsg = document.querySelector('#messageArea, span');
      theMsg.innerText = `You sank my battleship!`;
    });
  }); 
});

