let typeOfImages = "hand";
const imgPath = "assets/images/"

function changeImages(imgType) {
  
}

function applySettings() {
  var optionHand = document.getElementById("radio-hands");
  var optionLiteral = document.getElementById("radio-literal");
  if (optionHand.checked) {
    typeOfImages = "hand";
  } else {
    typeOfImages = "literal"
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

function changeImg(entity, move) {
  if (typeOfImages == "hand") {
    document.getElementById(`${entity}Image`).src = `${imgPath}${move}-hand-emoji.png`;
  } else {
    document.getElementById(`${entity}Image`).src = `${imgPath}${move}-obj-emoji.png`;
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

function reset() {
  document.getElementById("playerScore") = "0";
  document.getElementById("computerScore") = "0";
  document.getElementById("result") = "";

  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
  document.getElementById("resetBtn").style.visibility = "visible";
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
  const playerScore = document.getElementById("playerScore");
  const computerScore = document.getElementById("computerScore");
  if (playerScore >= 25 || computerScore >= 25) {
    initGameEndMessage(playerScore, computerScore);
  }
}

function chooseRock() {
  changeImg("player", "rock");
  const computerMove = getComputerTurn();
  if (computerMove == "scissors") {
    // Condition for a win
    changeImg("computer", "scissors");
    win();
    incrementPlayerScore();
  } else if (computerMove == "paper") {
    // Condition for a loss
    changeImg("computer", "paper");
    lose();
    incrementComputerScore();
  } else {
    // Condition for tie
    changeImg("computer", "rock");
    tie();
  }
  isGameDone();
}

function choosePaper() {
  changeImg("player", "paper");
  const computerMove = getComputerTurn();
  if (computerMove == "rock") {
    // Condition for a win
    changeImg("computer", "rock");
    win();
    incrementPlayerScore();
  } else if (computerMove == "scissors") {
    // Condition for a loss
    changeImg("computer", "scissors");
    lose();
    incrementComputerScore();
  } else {
    // Condition for tie
    changeImg("computer", "paper");
    tie();
  }
  isGameDone();
}

function chooseScissors() {
  changeImg("player", "scissors");
  const computerMove = getComputerTurn();
  if (computerMove == "paper") {
    // Condition for a win
    changeImg("computer", "paper");
    win();
    incrementPlayerScore();
  } else if (computerMove == "rock") {
    // Condition for a loss
    changeImg("computer", "rock");
    lose();
    incrementComputerScore();
  } else {
    // Condition for tie
    changeImg("computer", "scissors");
    tie();
  }
  isGameDone();
}