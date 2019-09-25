let typeOfImages = "hand";
const imgPath = "assets/images/"
let isGameActive = false;

function changeImgAndText(entity, move) {
  if (typeOfImages == "hand") {
    document.getElementById(`${entity}Image`).src = `${imgPath}${move}-hand-emoji.png`;
  } else {
    document.getElementById(`${entity}Image`).src = `${imgPath}${move}-obj-emoji.png`;
  
  }
  document.getElementById(`${entity}ImageLabel`).innerHTML = move.substring(0, 1).toUpperCase() + move.substring(1, move.length);
}

function applySettings() {
  var optionHand = document.getElementById("radio-hands");
  var optionLiteral = document.getElementById("radio-literal");
  if (optionHand.checked) {
    typeOfImages = "hand";
  } else {
    typeOfImages = "literal"
  }
  console.log(`Image Settings: ${typeOfImages.toUpperCase()}`);
  if (isGameActive) {
    changeImgAndText("player", document.getElementById("playerImageLabel").innerHTML.toLowerCase().trim());
    changeImgAndText("computer", document.getElementById("computerImageLabel").innerHTML.toLowerCase().trim());
  }
}

function loadSettingsButtons() {
  if (typeOfImages == "hand") {
    document.getElementById("radio-hands").checked = "checked";
  } else {
    document.getElementById("radio-literal").checked = "checked";
  }
}

function getComputerTurn() {
  isGameActive = true;
  const probability = Math.floor(Math.random() * 100);
  console.log(`Computer probability: ${probability}`);
  if (probability < 33) {
    return "rock";
  } else if (probability < 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function incrementPlayerScore() {
  let playerScore = parseInt(document.getElementById("playerScore").innerHTML);
  document.getElementById("playerScore").innerHTML = `${playerScore + 1}`;
}

function incrementComputerScore() {
  let computerScore = parseInt(document.getElementById("computerScore").innerHTML);
  document.getElementById("computerScore").innerHTML = `${computerScore + 1}`;
}

function win() {
  document.getElementById("result").style.color = "rgb(32, 255, 32)";
  document.getElementById("result").innerHTML = "Player wins this round!";
}

function tie() {
  document.getElementById("result").style.color = "black";
  document.getElementById("result").innerHTML = "This round is a tie!";
}

function lose() {
  document.getElementById("result").style.color = "red";
  document.getElementById("result").innerHTML = "Computer wins this round!";
}

function resetBoard() {
  console.log("Resetting...");
  isGameActive = false;
  document.getElementById("playerScore").innerHTML = "0";
  document.getElementById("computerScore").innerHTML = "0";
  document.getElementById("result").innerHTML = "";
  console.log("Resetting... 33%");
  document.getElementById("resetBtn").style.visibility = "hidden";
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
  console.log("Resetting... 66%");
  document.getElementById("playerImage").src = "assets/images/player-head.png";
  document.getElementById("computerImage").src = "assets/images/computer-head.png";
  document.getElementById("playerImageLabel").innerHTML = "";
  document.getElementById("computerImageLabel").innerHTML = "";
  console.log("Reset Complete");
}

function initGameEndMessage(playerScore, computerScore) {
  if (playerScore >= 25) {
    win();
    document.getElementById("result").innerHTML = "Player wins the game!";
  } else {
    lose();
    document.getElementById("result").innerHTML = "Computer wins the game... :(";
  }
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
  document.getElementById("resetBtn").style.visibility = "visible";
}

function isGameDone() {
  const playerScore = parseInt(document.getElementById("playerScore").innerHTML);
  const computerScore = parseInt(document.getElementById("computerScore").innerHTML);
  if (playerScore >= 25 || computerScore >= 25) {
    initGameEndMessage(playerScore, computerScore);
  }
  console.log(`Checked if game is done. Score -> [ ${playerScore} : ${computerScore} ]`);
}

function chooseRock() {
  changeImgAndText("player", "rock");
  const computerMove = getComputerTurn();
  if (computerMove == "scissors") {
    // Condition for a win
    changeImgAndText("computer", "scissors");
    win();
    incrementPlayerScore();
  } else if (computerMove == "paper") {
    // Condition for a loss
    changeImgAndText("computer", "paper");
    lose();
    incrementComputerScore();
  } else {
    // Condition for tie
    changeImgAndText("computer", "rock");
    tie();
  }
  isGameDone();
}

function choosePaper() {
  changeImgAndText("player", "paper");
  const computerMove = getComputerTurn();
  if (computerMove == "rock") {
    // Condition for a win
    changeImgAndText("computer", "rock");
    win();
    incrementPlayerScore();
  } else if (computerMove == "scissors") {
    // Condition for a loss
    changeImgAndText("computer", "scissors");
    lose();
    incrementComputerScore();
  } else {
    // Condition for tie
    changeImgAndText("computer", "paper");
    tie();
  }
  isGameDone();
}

function chooseScissors() {
  changeImgAndText("player", "scissors");
  const computerMove = getComputerTurn();
  if (computerMove == "paper") {
    // Condition for a win
    changeImgAndText("computer", "paper");
    win();
    incrementPlayerScore();
  } else if (computerMove == "rock") {
    // Condition for a loss
    changeImgAndText("computer", "rock");
    lose();
    incrementComputerScore();
  } else {
    // Condition for tie
    changeImgAndText("computer", "scissors");
    tie();
  }
  isGameDone();
}