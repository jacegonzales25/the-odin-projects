


function playRound(playerSelection, computerSelection) {
    
    
    try {
        let playerSelection = prompt("Enter a choice: rock, paper, scissors").toLowerCase();
        if (playerSelection != 'rock' || playerSelection != 'paper' || playerSelection != 'scissors') {
            playerSelection = prompt("Please choose one of the following: rock, paper, or scissors");
            let done = false;
            
            while (!done) {
                playerSelection = prompt("Please choose one of the following: rock, paper, or scissors").toLowerCase();
                if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
                    done = true;
                }
            }
            console.log(playerSelection);
            alert(playerSelection);
        }
        console.log(playRound(playerSelection, computerSelection));
    } catch (error) {
        console.log(error)
    }
}




function getComputerChoice() {
    const randomizer = Math.floor(Math.random() * (choices.length));
    // console.log(choices)
    // console.log(choices[randomizer]);
    return choices[randomizer];
}   

const choices = ['rock', 'paper', 'scissors']

const computerSelection = getComputerChoice();


getComputerChoice()