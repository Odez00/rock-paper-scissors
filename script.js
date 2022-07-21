//Generate computers choice
function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return(choice[random]);
}
console.log(getComputerChoice());

function game() {
    for(let i = 0; i < 5; i++) {
        playRound;
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "paper" && computerSelection === "scissors") {
        //computerScore++; 
        return("You lose! Scissors beat Paper");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        //playerScore++;
        return("You win! Rock beats Scissors");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        //playerScore++;
        return("You win! Paper beats Rock");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        //playerScore++;
        return("You win! Scissors beat Paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        //computerScore++;
        return("You lose! Rock beats Scissors");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        //computerScore++;
        return("You lose! Paper beats Rock");
    } else if (playerSelection === computerSelection){
        return("It's a draw!");
    }
}

let playerScore = 0;
let computerScore = 0;
playerSelection = "rock";
computerSelection = getComputerChoice;

console.log(game());
console.log(playRound(playerSelection, computerSelection()));
