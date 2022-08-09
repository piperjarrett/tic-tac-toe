//Query Selectors
var gridItem = document.querySelector("#grid");
var indGridItem = document.querySelectorAll("div");
var header = document.querySelector("#header");
var gridItemOneText = document.querySelector("#one");
var gridItemTwoText = document.querySelector("#two");
var gridItemThreeText = document.querySelector("#three");
var gridItemFourText = document.querySelector("#four");
var gridItemFiveText = document.querySelector("#five");
var gridItemSixText = document.querySelector("#six");
var gridItemSevenText = document.querySelector("#seven");
var gridItemEightText = document.querySelector("#eight");
var gridItemNineText = document.querySelector("#nine");
var playerXWins = document.querySelector("#playerXWins");
var playerOWins = document.querySelector("#playerOWins");

//Event Listeners
gridItem.addEventListener("click", changeDom);

//Global variables
var game = new Game("❌");
var playerOne = new Player("one", "❌");
var playerTwo = new Player("two", "⭕️");

//Functions
function changeDom(event) {
  eventTarget = event.target.id;
  game.newGame = false;
  eventTargetText = event.target.innerText;
  if (game.turn === "❌" && eventTargetText === "") {
    header.innerText = "It's ⭕️'s turn";
    addPlayerIcon("❌", eventTarget);
    game.whichTurn();
    game.iconTrack();
  } else if (game.turn === "⭕️" && eventTargetText === "") {
    header.innerText = "It's ❌'s turn";
    addPlayerIcon("⭕️", eventTarget);
    game.whichTurn();
    game.iconTrack();
  }
  eventTargetText = event.target.innerText;
  draw();
  winner();
}

function addPlayerIcon(icon, eventTarget) {
  for (var i = 0; i < indGridItem.length; i++) {
    if (eventTarget === indGridItem[i].id) {
      indGridItem[i].innerText = icon;
    }
  }
}

function winner() {
  if (
    (gridItemOneText.innerText === gridItemTwoText.innerText &&
      gridItemOneText.innerText === gridItemThreeText.innerText &&
      gridItemOneText.innerText != "") ||
    (gridItemOneText.innerText === gridItemFourText.innerText &&
      gridItemOneText.innerText === gridItemSevenText.innerText &&
      gridItemOneText.innerText != "") ||
    (gridItemTwoText.innerText === gridItemFiveText.innerText &&
      gridItemTwoText.innerText === gridItemEightText.innerText &&
      gridItemTwoText.innerText != "") ||
    (gridItemThreeText.innerText === gridItemSixText.innerText &&
      gridItemThreeText.innerText === gridItemNineText.innerText &&
      gridItemThreeText.innerText != "") ||
    (gridItemFourText.innerText === gridItemFiveText.innerText &&
      gridItemFourText.innerText === gridItemSixText.innerText &&
      gridItemFourText.innerText != "") ||
    (gridItemSevenText.innerText === gridItemEightText.innerText &&
      gridItemSevenText.innerText === gridItemNineText.innerText &&
      gridItemSevenText.innerText != "") ||
    (gridItemOneText.innerText === gridItemFiveText.innerText &&
      gridItemOneText.innerText === gridItemNineText.innerText &&
      gridItemOneText.innerText != "") ||
    (gridItemThreeText.innerText === gridItemFiveText.innerText &&
      gridItemThreeText.innerText === gridItemSevenText.innerText &&
      gridItemThreeText.innerText != "")
  ) {
    game.winner = eventTargetText;
    header.innerText = `${eventTargetText} wins!`;
    displayScore();
    setTimeout(restartDom, 2000);
  }
}

function draw() {
  if (game.dataTrack === 9) {
    header.innerText = "It's a draw!";
    game.draw = true;
    setTimeout(restartDom, 2000);
  }
}

function displayScore() {
  if (game.winner === "❌") {
    playerOne.increaseWins();
    playerXWins.innerText = `${playerOne.wins} Wins`;
  } else {
    playerTwo.increaseWins();
    playerOWins.innerText = `${playerTwo.wins} Wins`;
  }
}

function restartDom() {
  if (game.winner === "❌") {
    header.innerText = "It's ⭕️'s turn";
    game.restartGame("⭕️");
  } else if (game.winner === "⭕️") {
    header.innerText = "It's ❌'s turn";
    game.restartGame("❌");
  } else if (game.winner === "") {
    header.innerText = `It's ${game.turn}'s turn`;
    game.restartGame(game.turn);
  }
  for (var i = 0; i < indGridItem.length; i++) {
    indGridItem[i].innerText = " ";
  }
}
