//Global variables

//Query Selectors
gridItem = document.querySelector("#grid");
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
//Event Listeners
gridItem.addEventListener("click", changeHeader);
// gridItem.addEventListener("click", fillSpace);
//Functions
function changeHeader(event) {
  var gameOne = new Game();
  eventTarget = event.target.id;
  console.log(eventTarget);
  // gridItemText = event.target.id;
  console.log(gridItemOneText);
  if (header.innerText === "It's ❌'s turn") {
    header.innerText = "It's ⭕️'s turn";
    !gameOne.xTurn;
    addPlayerX();
  } else {
    header.innerText = "It's ❌'s turn";
    gameOne.yTurn = true;
    addPlayerO();
  }
  console.log(Game);
}
function addPlayerX(event) {
  if (eventTarget === "one") {
    gridItemOneText.innerHTML = "❌";
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

function winner() {
  if (
    ((gridItemOneText.innerHTML === gridItemTwoText.innerHTML) ===
      gridItemThreeText.inneHTML) ===
    "❌"
  )
    player = new Player(true);
}
