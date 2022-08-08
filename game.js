class Game {
  constructor(turn) {
    this.dataTrack = 0;
    this.turn = turn || "";
    this.winner = "";
    this.draw = false;
    this.newGame = true;
  }
  whichTurn() {
    if (header.innerText === "It's ⭕️'s turn") {
      this.turn = "⭕️";
    } else {
      this.turn = "❌";
    }
  }
  iconTrack() {
    this.dataTrack++;
  }
  displayScore() {
    if (this.winner === "❌") {
      playerOne.increaseWins();
      playerXWins.innerText = `${playerOne.wins} Wins`;
    } else {
      playerTwo.increaseWins();
      playerOWins.innerText = `${playerTwo.wins} Wins`;
    }
  }
  restartGame(turn) {
    game = new Game(turn);
  }
}
