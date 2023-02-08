const choices = ["rock","paper","scissors"]

function getComputerChoice (choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return results = 0;
        }
        else if (computerSelection == "paper") {
            return results = -1;
        }
        else {
            return results = 1;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return results = 0;
        }
        else if (computerSelection == "scissors") {
            return results = -1;
        }
        else {
            return results = 1;
        }
    }
    else {
        if (computerSelection == "scissors") {
            return results = 0;
        }
        else if (computerSelection == "rock") {
            return results = -1;
        }
        else {
            return results = 1;
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice(choices);
        console.log("You picked " + playerSelection + " and Computron picked " + computerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }
    if (results > 0) {
        console.log("You beat the computer!");
    }
    else if (results === 0) {
        console.log("A tie!")
    }
    else console.log("You lost to the computer!");
}

console.log(game());