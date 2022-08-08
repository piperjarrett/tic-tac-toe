//Query Selectors
gridItem = document.querySelector("#grid");
indGridItem = document.querySelectorAll("div");
header = document.querySelector("#header");
gridItemOneText = document.querySelector("#one");
gridItemTwoText = document.querySelector("#two");
gridItemThreeText = document.querySelector("#three");
gridItemFourText = document.querySelector("#four");
gridItemFiveText = document.querySelector("#five");
gridItemSixText = document.querySelector("#six");
gridItemSevenText = document.querySelector("#seven");
gridItemEightText = document.querySelector("#eight");
gridItemNineText = document.querySelector("#nine");
playerXWins = document.querySelector("#playerXWins");
playerOWins = document.querySelector("#playerOWins");

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
  if (header.innerText === "It's ❌'s turn" && eventTargetText === "") {
    header.innerText = "It's ⭕️'s turn";
    addPlayerXIcon();
    game.whichTurn();
    game.iconTrack();
  } else if (header.innerText === "It's ⭕️'s turn" && eventTargetText === "") {
    header.innerText = "It's ❌'s turn";
    addPlayerOIcon();
    game.whichTurn();
    game.iconTrack();
  }
  eventTargetText = event.target.innerText;
  draw();
  winner();
}

function addPlayerXIcon(event) {
  if (eventTarget === "one") {
    gridItemOneText.innerText = "❌";
  } else if (eventTarget === "two") {
    gridItemTwoText.innerText = "❌";
  } else if (eventTarget === "three") {
    gridItemThreeText.innerText = "❌";
  } else if (eventTarget === "four") {
    gridItemFourText.innerText = "❌";
  } else if (eventTarget === "five") {
    gridItemFiveText.innerText = "❌";
  } else if (eventTarget === "six") {
    gridItemSixText.innerText = "❌";
  } else if (eventTarget === "seven") {
    gridItemSevenText.innerText = "❌";
  } else if (eventTarget === "eight") {
    gridItemEightText.innerText = "❌";
  } else if (eventTarget === "nine") {
    gridItemNineText.innerText = "❌";
  }
}

function addPlayerOIcon(event) {
  if (eventTarget === "one") {
    gridItemOneText.innerText = "⭕️";
  } else if (eventTarget === "two") {
    gridItemTwoText.innerText = "⭕️";
  } else if (eventTarget === "three") {
    gridItemThreeText.innerText = "⭕️";
  } else if (eventTarget === "four") {
    gridItemFourText.innerText = "⭕️";
  } else if (eventTarget === "five") {
    gridItemFiveText.innerText = "⭕️";
  } else if (eventTarget === "six") {
    gridItemSixText.innerText = "⭕️";
  } else if (eventTarget === "seven") {
    gridItemSevenText.innerText = "⭕️";
  } else if (eventTarget === "eight") {
    gridItemEightText.innerText = "⭕️";
  } else if (eventTarget === "nine") {
    gridItemNineText.innerText = "⭕️";
  }
}

function winner(event) {
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
    console.log(game);
    displayScore();
    console.log(playerOne);
    console.log(playerTwo);
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

function restartDom() {
  if (game.winner === "❌") {
    header.innerText = "It's ⭕️'s turn";
    game.restartGame("⭕️");
  } else if (game.winner === "⭕️") {
    header.innerText = "It's ❌'s turn";
    game.restartGame("❌");
  } else if (game.winner === "") {
    header.innerText = `It's ${game.turn}'s turn`;
    game.restartGame();
  }
  for (var i = 0; i < indGridItem.length; i++) {
    indGridItem[i].innerText = " ";
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
