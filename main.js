//Global variables

//Query Selectors
gridItem = document.querySelector("#grid");
indGridItem = document.querySelector(".grid-item");
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
gridItem.addEventListener("click", changeHeader);
// gridItem.addEventListener("click", fillSpace);
//Functions

var game = new Game();
game.restartGame();
function changeHeader(event) {
  eventTarget = event.target.id;
  game.newGame = false;
  if (header.innerText === "It's ❌'s turn") {
    header.innerText = "It's ⭕️'s turn";
    addPlayerX();
    game.whichTurn();
    game.iconTrack();
  } else {
    header.innerText = "It's ❌'s turn";
    addPlayerO();

    game.iconTrack();
  }
  eventTargetHTML = event.target.innerHTML;
  draw();
  winner();
}

function addPlayerX(event) {
  if ((eventTarget === "one" && gridItemOneText = "")) {
    gridItemOneText.innerHTML = "❌";
  } else if ((eventTarget === "two" && gridItemTwoText = "")) {
    gridItemTwoText.innerHTML = "❌";
  } else if ((eventTarget === "three" && gridItemThreeText = "")) {
    gridItemThreeText.innerHTML = "❌";
  } else if ((eventTarget === "four" && gridItemFourText = "")) {
    gridItemFourText.innerHTML = "❌";
  } else if ((eventTarget === "five" && gridItemFiveText = "")) {
    gridItemFiveText.innerHTML = "❌";
  } else if ((eventTarget === "six" && gridItemSixText = "")) {
    gridItemSixText.innerHTML = "❌";
  } else if ((eventTarget === "seven" && gridItemSevenText = "")) {
    gridItemSevenText.innerHTML = "❌";
  } else if ((eventTarget === "eight" && gridItemEightText = "")) {
    gridItemEightText.innerHTML = "❌";
  } else if ((eventTarget === "nine" && gridItemNineText = "")) {
    gridItemNineText.innerHTML = "❌";
  }
}

function addPlayerO(event) {
  if ((eventTarget === "one" && gridItemOneText = "")) {
    gridItemOneText.innerHTML = "⭕️";
  } else if ((eventTarget === "two" && gridItemTwoText = "")) {
    gridItemTwoText.innerHTML = "⭕️";
  } else if ((eventTarget === "three" && gridItemThreeText = "")) {
    gridItemThreeText.innerHTML = "⭕️";
  } else if ((eventTarget === "four" && gridItemFourText = "")) {
    gridItemFourText.innerHTML = "⭕️";
  } else if ((eventTarget === "five" && gridItemFiveText = "")) {
    gridItemFiveText.innerHTML = "⭕️";
  } else if ((eventTarget === "six" && gridItemSixText = "")) {
    gridItemSixText.innerHTML = "⭕️";
  } else if ((eventTarget === "seven" && gridItemSevenText = "")) {
    gridItemSevenText.innerHTML = "⭕️";
  } else if ((eventTarget === "eight" && gridItemEightText = "")) {
    gridItemEightText.innerHTML = "⭕️";
  } else if ((eventTarget === "nine" && gridItemNineText = "")) {
    gridItemNineText.innerHTML = "⭕️";
  }
}

function winner(event) {
  if (
    (gridItemOneText.innerHTML === gridItemTwoText.innerHTML &&
      gridItemOneText.innerHTML === gridItemThreeText.innerHTML) ||
    (gridItemOneText.innerHTML === gridItemFourText.innerHTML &&
      gridItemOneText.innerHTML === gridItemSevenText.innerHTML) ||
    (gridItemTwoText.innerHTML === gridItemFiveText.innerHTML &&
      gridItemTwoText.innerHTML === gridItemEightText.innerHTML) ||
    (gridItemThreeText.innerHTML === gridItemSixText.innerHTML &&
      gridItemThreeText.innerHTML === gridItemNineText.innerHTML) ||
    (gridItemFourText.innerHTML === gridItemFiveText.innerHTML &&
      gridItemFourText.innerHTML === gridItemSixText.innerHTML) ||
    (gridItemSevenText.innerHTML === gridItemEightText.innerHTML &&
      gridItemSevenText.innerHTML === gridItemNineText.innerHTML) ||
    (gridItemOneText.innerHTML === gridItemFiveText.innerHTML &&
      gridItemOneText.innerHTML === gridItemNineText.innerHTML) ||
    (gridItemThreeText.innerHTML === gridItemFiveText.innerHTML &&
      gridItemThreeText.innerHTML === gridItemSevenText.innerHTML)
  ) {
    game.winner = eventTargetHTML;
    console.log("sup");
    console.log(game);
    game.displayScore();
    header.innerHTML = `${eventTargetHTML} wins!`;
    setTimeout(restart, 4000);
  }
}
function draw() {
  if (game.dataTrack === 9) {
    header.innerHTML = "It's a draw!";
    console.log(game);
    game.draw = true;
    setTimeout(restart, 4000);
  }
}

function restart() {
  if (game.winner === "❌") {
    header.innerHTML = "It's ⭕️'s turn";
    game.restartGame("⭕️");
  } else {
    header.innerHTML = "It's ❌'s turn";
    game.restartGame("❌");
  }
  indGridItem.innerHTML = "";
  console.log(game);
}

//   else if (
//     ((gridItemOneText.innerHTML === gridItemTwoText.innerHTML) ===
//       gridItemThreeText.inneHTML) ===
//       "⭕️" ||
//     ((gridItemOneText.innerHTML === gridItemFourText.innerHTML) ===
//       gridItemSevenText.inneHTML) ===
//       "⭕️" ||
//     ((gridItemTwoText.innerHTML === gridItemFiveText.innerHTML) ===
//       gridItemEightText.inneHTML) ===
//       "⭕️" ||
//     ((gridItemThreeText.innerHTML === gridItemSixText.innerHTML) ===
//       gridItemNineText.inneHTML) ===
//       "⭕️" ||
//     ((gridItemFourText.innerHTML === gridItemFiveText.innerHTML) ===
//       gridItemSixText.inneHTML) ===
//       "⭕️" ||
//     ((gridItemSevenText.innerHTML === gridItemEightText.innerHTML) ===
//       gridItemNineText.inneHTML) ===
//       "⭕️" ||
//     ((gridItemOneText.innerHTML === gridItemFiveText.innerHTML) ===
//       gridItemNineText.inneHTML) ===
//       "⭕️" ||
//     ((gridItemThreeText.innerHTML === gridItemFiveText.innerHTML) ===
//       gridItemSevenText.inneHTML) ===
//       "⭕️"
//   ) {
//     game.winner = "⭕️";
//   } else {
//     game.draw = true;
//   }
