//create and initialize player score variables
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
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `You win! ${capitalize(humanChoice)} beats ${capitalize(
        computerChoice
      )}.`
    );
    humanScore++;
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    console.log(
      `You lost! ${capitalize(computerChoice)} beats ${capitalize(
        humanChoice
      )}.`
    );
    computerScore++;
  }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playGame() {
  //create and initialize player score variables
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game.");
  } else if (humanScore < computerScore) {
    console.log("Sorry, you've lost the game.");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();