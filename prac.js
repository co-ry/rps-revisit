
const options = ["paper", "rock", "lizard", "spock", "scissors"];
const result = [" tied ", " defeated ", " were vanquished by "];

let choiceComputer;
let choicePlayer;

let playerScore = 0;
let computerScore = 0;

const btns = document.querySelectorAll('img');
const para = document.querySelector('p')
const showPlayerScore = document.querySelector('#player-score')
const showComputerScore = document.querySelector('#computer-score')
const gameWrapper = document.querySelector('#game-wrapper');
const spockImage = document.querySelector('#spock-img')
const body = document.querySelector('body')
const textResults = document.querySelector('.text-results')

// spockImage.addEventListener('click', ()=> {
//     body.style.backgroundColor = 'red'
// })

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

function compareScore(difference){

    if (difference === 1 && playerScore < 3 && computerScore < 3){
        playerScore++
        scores();
    }
    else if (difference === 2 && playerScore < 3 && computerScore < 3){
        computerScore++
        scores();
    }
    else if (playerScore < 3 && computerScore < 3){
        scores();
    }
}

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 5);
    return choiceComputer = options[randomNum];
} 

function playRound (choicePlayer, choiceComputer) {
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
    compareScore(difference);
    textResults.textContent = `You played ${choicePlayer} and ${result[difference]} ${choiceComputer}`;  
};

function playGame (){
    if (playerScore < 2 && computerScore < 2){
        playRound(choicePlayer, choiceComputer)
    }
    else if (playerScore == 2 || computerScore == 2){
        playRound(choicePlayer, choiceComputer)
        scores()

        if (playerScore == 3 || computerScore == 3){
            newGame.style.width = '250px'
            newGame.style.height = '50px'
            newGame.style.backgroundColor = 'blue'
            document.body.removeChild(gameWrapper)
            return    
        }
    }
    else {
        alert(`I think you broke it`)
        scores()
        newGame.style.backgroundColor = 'green'
        document.body.removeChild(gameWrapper)
        return
    
    }
}

// Function to refresh page
function refreshPage() {
    window.location.reload(true);
}

btns.forEach((image)=>{image.addEventListener('click',()=>{
    choicePlayer = image.id
    getComputerChoice();  
    playGame()
    })
});














