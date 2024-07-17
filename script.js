
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const round = document.querySelector("#round");
const playerChoice = document.querySelector("#player-choice");
const compuChoice = document.querySelector("#computer-choice");
const winner = document.querySelector("#winner");
const playerScore = document.querySelector("#player-score");
const compuScore = document.querySelector("#computer-score");
const finalWinner = document.querySelector("#final-winner");

rock.addEventListener('click', () => {
    playGame(rock.textContent);
});

paper.addEventListener('click', () => {
    playGame(paper.textContent);
});

scissors.addEventListener('click', () => {
    playGame(scissors.textContent);
});

function getComputerChoice() {
    let choice;
    let compChoice = Math.floor(Math.random() * 3);
    switch (compChoice) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            break;
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        winner.textContent = "Human Won";
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
        winner.textContent = "Computer Won";
        computerScore++;
    }
    else {
        winner.textContent = "Draw";
    }
}

function playGame(humanChoice) {
    currentRound++;
    let computerChoice = getComputerChoice();
    round.textContent = "Round: " + currentRound;
    playerChoice.textContent = "Human choice: " + humanChoice;
    compuChoice.textContent = "Computer choice: " + computerChoice;
    playRound(humanChoice, computerChoice);
    playerScore.textContent = "Human score: " + humanScore;
    compuScore.textContent = "Computer score: " + computerScore;
    
    if(currentRound === 5){
        if (computerScore > humanScore) {
        finalWinner.textContent = "Computer won the game";
    } else if (computerScore < humanScore) {
        finalWinner.textContent = "Human won the game";
    }
    else {
        finalWinner.textContent = "Draw";
    }
    currentRound = 0;
    humanScore = 0;
    computerScore = 0;
    }
}
