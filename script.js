function getHumanChoice() {
    const humanChoice = prompt("Choose rock, paper or scissors");
    return humanChoice;
}

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Human Won");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Computer Won");
        computerScore++;
    }
    else {
        console.log("Tie");
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log("Round: ", i);
        console.log("Player choice: ", humanChoice);
        console.log("Computer choice: ", computerChoice);
        playRound(humanChoice, computerChoice);
        console.log("Player score: ", humanScore);
        console.log("Computer score: ", computerScore, "\n\n");
    }
    if (computerScore > humanScore) {
        console.log("Computer won the game");
    } else if (computerScore < humanScore) {
        console.log("Human won the game");
    }
    else {
        console.log("Draw!");
    }
}

playGame();