const choices = ["rock","paper","scissors"]

function getComputerChoice (choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return results = "Tie!";
        }
        else if (computerSelection == "paper") {
            return results = "You lose! Paper beats Rock";
        }
        else {
            return results = "You win!"
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return results = "Tie!";
        }
        else if (computerSelection == "scissors") {
            return results = "You lose! Scissors beats Paper";
        }
        else {
            return results = "You win!"
        }
    }
    else {
        if (computerSelection == "scissors") {
            return results = "Tie!";
        }
        else if (computerSelection == "rock") {
            return results = "You lose! Rock beats Scissors";
        }
        else {
            return results = "You win!"
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
}

console.log(game());