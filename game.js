const welcomer = document.getElementById('welcomer');
const btnOne = document.getElementById('btn1');
const btnTwo = document.getElementById('btn2');
const btnThree = document.getElementById('btn3');
let prompter = prompt("Hello, what's your name, sir?");
let playerSelection;
let playerWin = 0;
let computerWin = 0;

window.onload = function () {
    welcomer.textContent = "Welcome to my Rock-Paper-Scissors game, " + prompter + "!";
}

// Buttons
btnOne.addEventListener('click', () => {
    playerSelection = 'rock';
    console.log(playerSelection);
})

btnTwo.addEventListener('click', () => {
    playerSelection = 'paper';
    console.log(playerSelection);
})

btnThree.addEventListener('click', () => {
    playerSelection = 'scissors';
    console.log(playerSelection);
})

function computerPlay() {
    let comp = Math.floor(Math.random() * 3);
    let computerChoice;
    if (comp == 0) {
       return computerChoice = 'rock';
    } else if (comp == 1) {
        return computerChoice = 'paper';
    } else {
        return computerChoice = 'scissors';
    }

}

computerPlay();


let computerSelection = computerPlay();
function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log("It's a tie!");
        welcomer.textContent = "It's a tie! Go again.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lost! Paper beats rock.");
        computerWin++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You won! Rock beats scissors.");
        playerWin++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You won! Paper beats rock.");
        playerWin++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lost! Scissors beat paper.");
        computerWin++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lost! Rock beats scissors.");
        computerWin++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You won! Scissors beat paper.")
        playerWin++;
    }
}

play();