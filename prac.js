
const options = ["paper", "rock", "lizard", "spock", "scissors"];
const result = [" tied ", " defeated ", " were vanquished by "];

let choiceComputer;
let choicePlayer;

let playerScore = 0;
let computerScore = 0;

function compareScore(difference){
    if (difference === 1 && playerScore < 3 && computerScore < 3){
        playerScore++
        scores()
    }
    else if(difference === 2 && playerScore < 3 && computerScore < 3){
        computerScore++
        scores()
    }
    else {
        alert(`You: ${playerScore}\n Computer:${computerScore}`)
        scores()
        newGame.style.backgroundColor = 'blue'
    }
}



function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 5);
    return choiceComputer = options[randomNum];
} 


playRound = function(choicePlayer, choiceComputer) {
    if (choicePlayer === undefined){
        return
    }
     indexPlayer = options.indexOf(choicePlayer), //rock = 1
     indexComputer = options.indexOf(choiceComputer), //paper = 0
    difference = indexComputer - indexPlayer; // 0 - 1 = -1

    if(difference < 0) { // -1 < 0 = true
        difference += options.length; // -1 + 5 = 4
    }
    while(difference > 2) { //4 > 2 = true
        difference -= 2; // 4 - 2 = 2. you lose.
    }
    return difference;
};

// Function to refresh page
function refreshPage() {
    window.location.reload(true);
}

const btns = document.querySelectorAll('.btn');
const para = document.querySelector('p')
const showPlayerScore = document.querySelector('#player-score')
const showComputerScore = document.querySelector('#computer-score')
const btnWrapper = document.querySelector('#btn-wrapper');

// Creating a button to refresh page
const newGame = document.getElementById('refresh')
newGame.textContent = `Play again`;
newGame.classList.add('refresh');
newGame.addEventListener('click',()=> {
    refreshPage();
});

function scores () {
    showPlayerScore.textContent = playerScore;
    showComputerScore.textContent = computerScore;      
}

btns.forEach((button)=>{button.addEventListener('click',()=>{
    choicePlayer = button.id
    getComputerChoice();  
    godDamn(playerScore, computerScore)
    return
    });
});

function godDamn (playerScore, computerScore){
    playRound(choicePlayer,choiceComputer);
    compareScore(difference);
    console.log(`You played ${choicePlayer} and ${result[difference]} ${choiceComputer}`);  
    return

}













