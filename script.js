const choices = ["rock", "paper", "scissors"];
const gameLength = 5;
let results = 0;
let roundsPlayed = 0;
const rockButton = document.querySelector("button.rock");
const paperButton = document.querySelector("button.paper");
const scissorsButton = document.querySelector("button.scissors");
const message = document.querySelector("div.message");
const resultsDisplay = document.querySelector("div.results");
const container = document.querySelector("div.container");
let isGameOver = false;

rockButton.addEventListener("click", function () {
  playRound("rock");
});
paperButton.addEventListener("click", function () {
  playRound("paper");
});
scissorsButton.addEventListener("click", function () {
  playRound("scissors");
});

function getComputerChoice(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerSelection) {
  roundsPlayed++;
  const computerSelection = getComputerChoice(choices);
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return tieRound();
    } else if (computerSelection == "paper") {
      return lostRound();
    } else {
      return wonRound();
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "paper") {
      return tieRound();
    } else if (computerSelection == "scissors") {
      return lostRound();
    } else {
      return wonRound();
    }
  } else {
    if (computerSelection == "scissors") {
      return tieRound();
    } else if (computerSelection == "rock") {
      return lostRound();
    } else {
      return wonRound();
    }
  }
}

function wonRound() {
  results++;
  if (roundsPlayed == 5) {
    gameOver();
  } else {
    message.textContent = "You won this one!";
    resultsDisplay.textContent = results;
  }
}

function lostRound() {
  results--;
  if (roundsPlayed == 5) {
    gameOver();
  } else {
    message.textContent = "Haha, I won this round!";
    resultsDisplay.textContent = results;
  }
}

function tieRound() {
  if (roundsPlayed == 5) {
    gameOver();
  } else {
    message.textContent = "A tie!";
    resultsDisplay.textContent = results;
  }
}

function gameOver() {
  if (!isGameOver) {
    isGameOver = true;
    message.textContent = "Game Over!";
    resultsDisplay.textContent = "Final result: " + resultsDisplay.textContent;
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", () => {
      window.location.reload();
    });
    container.appendChild(resetButton);
  } else {
    message.textContent = "Yo, stop clicking buttons, game is over!";
  }
}
