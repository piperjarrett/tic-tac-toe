class Game {
  constructor(turn) {
    this.dataTrack = 0;
    this.turn = turn;
    this.winner = "";
    this.draw = false;
    this.newGame = true;
  }

  whichTurn() {
    if (this.turn === "❌") {
      this.turn = "⭕️";
    } else {
      this.turn = "❌";
    }
  }

  iconTrack() {
    this.dataTrack++;
  }

  restartGame(turn) {
    game = new Game(turn);
  }
}
