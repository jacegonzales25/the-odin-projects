function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomizer = Math.floor(Math.random() * (choices.length));
    console.log(choices.length);
    console.log(choices);
    console.log(randomizer);
    console.log(choices[randomizer]);
    return choices[randomizer];
}   

getComputerChoice()