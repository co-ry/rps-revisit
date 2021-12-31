// Function that gets computer choice 

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let computerChoice
let playerChoice
const btns = document.querySelectorAll("button");

zeroScore = playerScore = 0, computerScore = 0;


function computerSelect() {
    return computerChoice = choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerChoice, computerChoice) {
    if ( playerChoice == computerChoice) {
        alert(`Tie!!\nBoth Played: ${playerChoice}\nPlayer Score: ${playerScore} Computer Score: ${computerScore}`)
    }
    else if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "paper") || 
            (playerChoice == "paper" && computerChoice == "rock")) {
                playerScore++
                alert(`You Played: ${playerChoice}\nThey Played: ${computerChoice}
                        \nGreat Job!!! Player Score: ${playerScore} Computer Score: ${computerScore} `);
    }  
    else if ((playerChoice == "scissors" &&computerChoice == "rock") || (playerChoice == "paper" &&computerChoice == "scissors")|| 
            (playerChoice == "rock" &&computerChoice == "paper")) {
                computerScore++
                alert(`You Played: ${playerChoice}\nThey Played: ${computerChoice}
                        \nYou Lose!!! Player Score: ${playerScore} Computer Score: ${computerScore} `);
    }
    else {
        alert ("not and option, dude!")
    }
}


btns.forEach((button)=>{button.addEventListener('click',()=>{
    playerChoice = button.id;
    computerSelect();
    if  (playerScore < 3 && computerScore < 3) {
        playRound(playerChoice,computerChoice);
        return;
    }
    else {
        zeroScore;
        return;
    }

    if (playerScore > computerScore) {
        alert(`Victory is YOURS!!!\nPlayer Score: ${playerScore} Computer Score: ${computerScore} `);
        zeroScore;
        return "Winner"
    }
    else if (computerScore > playerScore) {
        alert(`You were beaten by Superior Performance!!!\nPlayer Score: ${playerScore} Computer Score: ${computerScore} `);
        zeroScore;
        return "Loser"
    }

    // playGame(playRound(playerChoice,computerChoice))
    console.log(playerChoice);
    console.log(computerChoice);
})});


// console.log(playSelect())
// console.log(playRound(playSelect(), computerSelect()))
// console.log(playGame())
// console.log(playerScore)
// console.log(computerScore)
// console.log(playerChoice)
// console.log(computerChoice)



