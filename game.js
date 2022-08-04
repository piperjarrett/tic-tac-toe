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
      var playerOne = new Player("one", "❌");
      playerOne.increaseWins();
      playerXWins.innerHTML = `${playerOne.wins} Wins`;
    } else {
      var playerTwo = new Player("two", "⭕️");
      playerTwo.increaseWins();
      playerOWins.innerHTML = `${playerTwo.wins} Wins`;
    }
    console.log(game);
  }
  restartGame(turn) {
    game = new Game(turn);
    changeHeader();
  }
}
