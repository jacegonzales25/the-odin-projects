function playRound(playerSelection, computerSelection, scores) {
  console.log(scores.playerScore, scores.computerScore);
  if (playerSelection === computerSelection) {
    console.log("Tie: " + playerSelection + " " + computerSelection);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(
      "You lost! Your choice was: " +
        playerSelection +
        " vs computer choice: " +
        computerSelection
    );
    scores.computerScore += 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(
      "You win! Your choice was: " +
        playerSelection +
        " vs computer choice: " +
        computerSelection
    );
    scores.playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(
      "You win! Your choice was: " +
        playerSelection +
        " vs computer choice: " +
        computerSelection
    );
    scores.playerScore += 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(
      "You lost! Your choice was: " +
        playerSelection +
        " vs computer choice: " +
        computerSelection
    );
    scores.computerScore += 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(
      "You lost! Your choice was: " +
        playerSelection +
        " vs computer choice: " +
        computerSelection
    );
    scores.computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(
      "You win! Your choice was: " +
        playerSelection +
        " vs computer choice: " +
        computerSelection
    );
    scores.playerScore += 1;
  }
  console.log(playerSelection, computerSelection);
}

function getComputerChoice() {
  const randomizer = Math.floor(Math.random() * choices.length);
  // console.log(choices)
  // console.log(choices[randomizer]);
  return choices[randomizer];
}

function getPlayerChoice() {
  let playerChoice = prompt(
    "Enter a choice: rock, paper, scissors"
  ).toLowerCase();
  console.log(playerChoice);
  if (
    playerChoice != "rock" &&
    playerChoice != "paper" &&
    playerChoice != "scissors"
  ) {
    playerChoice = prompt(
      "Please choose one of the following: rock, paper, or scissors"
    );
    if (
      playerChoice != "rock" &&
      playerChoice != "paper" &&
      playerChoice != "scissors"
    ) {
      let done = false;
      while (!done) {
        playerChoice = prompt(
          "Please choose one of the following: rock, paper, or scissors"
        ).toLowerCase();
        if (
          playerChoice === "rock" ||
          playerChoice === "paper" ||
          playerChoice === "scissors"
        ) {
          done = true;
        }
      }
    }
    //   console.log(playerChoice);
    //   alert(playerChoice);
  }
  return playerChoice;
}

function determineWinner(scores) {
    if (scores.playerScore > scores.computerScore) {
        console.log("You won! Your score: " + scores.playerScore + " computer score: " + scores.computerScore);
    } else {
        console.log("You lost! Your score: " + scores.playerScore + " computer score: " + scores.computerScore)
    }
}

const choices = ["rock", "paper", "scissors"];
let scores = { playerScore: 0, computerScore: 0 };

for (let i = 0; i < 5; i++) {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice();

  playRound(playerSelection, computerSelection, scores)

  console.log(scores.playerScore, scores.computerScore);

}

determineWinner(scores);


