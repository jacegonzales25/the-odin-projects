function playRound(playerSelection, computerSelection) {

    console.log(playerSelection, computerSelection)

  
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

const choices = ["rock", "paper", "scissors"];

const computerSelection = getComputerChoice();

const playerSelection = getPlayerChoice();

playRound(playerSelection, computerSelection)
