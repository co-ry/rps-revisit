// Function that gets computer choice 

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


function computerSelect() {
    return computerChoice = choices[Math.floor(Math.random() * choices.length)]
}

function playSelect() {
    let playerInput = prompt("Choose Rock Paper or Scissors.");
    return playerChoice = playerInput.toLowerCase();
}

function playRound() {
    if ( playerChoice == computerChoice) {
        alert("tie")
    }
    else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "rock")) {
        alert("you win")
        playerScore++
    }  
    else if ((playerChoice == "scissors" &&computerChoice == "rock") || (playerChoice == "paper" &&computerChoice == "scissors")|| (playerChoice == "rock" &&computerChoice == "paper")) {
        alert ("you lose")
        computerScore++
    }
    else {
        alert ("not and option, dude!")
    }
}

function playGame(){
    while (playerScore < 3 && computerScore < 3) {
        playSelect();
        computerSelect();
        playRound();
    }
    if (playerScore < computerScore) {
        alert("Beaten!!!")
    }
    else if (computerScore < playerScore) {
        alert("victorious!!!")
    }
}

// console.log(playSelect())
// console.log(playRound(playSelect(), computerSelect()))
console.log(playGame())
console.log(playerScore)
console.log(computerScore)
console.log(playerChoice)
console.log(computerChoice)


