let humanScore = 0;
let computerScore = 0;

//randomly return a value of rock, paper or scissors for the computer player
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// console.log(getComputerChoice())

//return the human players choice
function getHumanChoice() {
  let choice;
  do {
    choice = prompt("Rock, Paper, or Scissors? Choose wisely!").toLowerCase();
    if (choice === "scissors" || choice === "rock" || choice === "paper") {
      return choice;
    } else {
      alert(`That isn't an option, you silly goose! Try again.`);
    }
  } while (true);
}

//capitalize
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// console.log(getHumanChoice())

//create function that takes human and players choices as arguments, plays a single round, and increments the round winner's score and logs a winner announcement
function playRound(humanChoice, computerChoice) {
  let result;
  if (humanChoice === computerChoice) {
      result = "draw";
      document.querySelector("#round-result").textContent = "It's a tie!";
  } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
  ) {
      result = 'win';
      document.querySelector("#round-result").textContent = `You won! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
  } else {
      result = 'lose';
      document.querySelector("#round-result").textContent = `You lost! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
  }
  return result;
}



function displayResult(result) {
  document.querySelector("#game-result").textContent = result;
}

function updateScore(humanScore, computerScore) {
  document.querySelector("#human-score").textContent = humanScore;
  document.querySelector("#computer-score").textContent = computerScore;
}

function checkRoundWinner() {

}

function checkGameWinner(humanScore, computerScore) {
  if (humanScore === 5) {
    displayResult("Congratulations! You won the game.");
  } else if (computerScore === 5) {
    displayResult("Sorry, you lost the game.");
  }
}

function playGame() {
  //create and initialize player score variables
  let humanScore = 0;
  let computerScore = 0;

  // Helper function to handle common logic
  function handleButtonClick(choice) {
    let result = playRound(choice, getComputerChoice());
    if (result === "win") humanScore++;
    else if (result === "lose") computerScore++;
    updateScore(humanScore, computerScore);
    checkGameWinner(humanScore, computerScore);
  }

  // Add event listeners to the buttons
  document.querySelector("#rock").addEventListener("click", function () {
    handleButtonClick("rock");
  });
  document.querySelector("#paper").addEventListener("click", function () {
    handleButtonClick("paper");
  });
  document.querySelector("#scissors").addEventListener("click", function () {
    handleButtonClick("scissors");
  });
}

playGame();
