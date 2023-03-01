class Game {
  constructor() {
    this.players = []
  }

  addGameBoard() {
    return boardCode
  }

  takeShot (playerIn) {
    this.players.forEach((player) => {
      if (playerIn.name === player.name) {
        player.attempts++
      }
    })
  }
  
  addPlayer(player) {
    this.players.push(player)
  }
};
