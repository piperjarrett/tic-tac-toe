//Global variables

//Query Selectors
gridItem = document.querySelector("#grid");
indGridItem = document.querySelectorAll(".grid-item");
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
var game = new Game("❌");

function changeHeader(event) {
  eventTarget = event.target.id;
  eventTargetHTML = event.target.innerHTML;
  console.log(eventTargetHTML);
  game.newGame = false;
  eventTargetHTML = event.target.innerHTML;
  if (header.innerText === "It's ❌'s turn" && eventTargetHTML === "") {
    header.innerText = "It's ⭕️'s turn";
    addPlayerX();
    game.whichTurn();
    game.iconTrack();
  } else if (header.innerText === "It's ⭕️'s turn" && eventTargetHTML === "") {
    header.innerText = "It's ❌'s turn";
    addPlayerO();
    game.iconTrack();
  }
  eventTargetHTML = event.target.innerHTML;
  draw();
  console.log(game.dataTrack);
  winner();
}

function addPlayerX(event) {
  if (eventTarget === "one") {
    gridItemOneText.innerText = "❌";
  } else if (eventTarget === "two") {
    gridItemTwoText.innerHTML = "❌";
  } else if (eventTarget === "three") {
    gridItemThreeText.innerHTML = "❌";
  } else if (eventTarget === "four") {
    gridItemFourText.innerHTML = "❌";
  } else if (eventTarget === "five") {
    gridItemFiveText.innerHTML = "❌";
  } else if (eventTarget === "six") {
    gridItemSixText.innerHTML = "❌";
  } else if (eventTarget === "seven") {
    gridItemSevenText.innerHTML = "❌";
  } else if (eventTarget === "eight") {
    gridItemEightText.innerHTML = "❌";
  } else if (eventTarget === "nine") {
    gridItemNineText.innerHTML = "❌";
  }
}

function addPlayerO(event) {
  if (eventTarget === "one") {
    gridItemOneText.innerHTML = "⭕️";
  } else if (eventTarget === "two") {
    gridItemTwoText.innerHTML = "⭕️";
  } else if (eventTarget === "three") {
    gridItemThreeText.innerHTML = "⭕️";
  } else if (eventTarget === "four") {
    gridItemFourText.innerHTML = "⭕️";
  } else if (eventTarget === "five") {
    gridItemFiveText.innerHTML = "⭕️";
  } else if (eventTarget === "six") {
    gridItemSixText.innerHTML = "⭕️";
  } else if (eventTarget === "seven") {
    gridItemSevenText.innerHTML = "⭕️";
  } else if (eventTarget === "eight") {
    gridItemEightText.innerHTML = "⭕️";
  } else if (eventTarget === "nine") {
    gridItemNineText.innerHTML = "⭕️";
  }
}

function winner(event) {
  if (
    (gridItemOneText.innerHTML === gridItemTwoText.innerHTML &&
      gridItemOneText.innerHTML === gridItemThreeText.innerHTML &&
      gridItemOneText.innerHTML != "") ||
    (gridItemOneText.innerHTML === gridItemFourText.innerHTML &&
      gridItemOneText.innerHTML === gridItemSevenText.innerHTML &&
      gridItemOneText.innerHTML != "") ||
    (gridItemTwoText.innerHTML === gridItemFiveText.innerHTML &&
      gridItemTwoText.innerHTML === gridItemEightText.innerHTML &&
      gridItemTwoText.innerHTML != "") ||
    (gridItemThreeText.innerHTML === gridItemSixText.innerHTML &&
      gridItemThreeText.innerHTML === gridItemNineText.innerHTML &&
      gridItemThreeText.innerHTML != "") ||
    (gridItemFourText.innerHTML === gridItemFiveText.innerHTML &&
      gridItemFourText.innerHTML === gridItemSixText.innerHTML &&
      gridItemFourText.innerHTML != "") ||
    (gridItemSevenText.innerHTML === gridItemEightText.innerHTML &&
      gridItemSevenText.innerHTML === gridItemNineText.innerHTML &&
      gridItemSevenText.innerHTML != "") ||
    (gridItemOneText.innerHTML === gridItemFiveText.innerHTML &&
      gridItemOneText.innerHTML === gridItemNineText.innerHTML &&
      gridItemOneText.innerHTML != "") ||
    (gridItemThreeText.innerHTML === gridItemFiveText.innerHTML &&
      gridItemThreeText.innerHTML === gridItemSevenText.innerHTML &&
      gridItemThreeText.innerHTML != "")
  ) {
    game.winner = eventTargetHTML;
    game.displayScore();
    header.innerHTML = `${eventTargetHTML} wins!`;

    setTimeout(restart, 4000);
  }
}
function draw() {
  if (game.dataTrack === 9) {
    header.innerHTML = "It's a draw!";
    game.draw = true;
    setTimeout(restart, 4000);
  }
}

function restart() {
  for (var i = 0; i < indGridItem.length; i++) {
    indGridItem[i].innerHTML = " ";
    indGridItem[i].innerText = " ";
  }
  if (game.winner === "❌") {
    header.innerHTML = "It's ⭕️'s turn";
    game.restartGame("⭕️");
  } else {
    header.innerHTML = "It's ❌'s turn";
    game.restartGame("❌");
  }
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
