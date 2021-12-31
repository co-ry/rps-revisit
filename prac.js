
const options = ["paper", "rock", "lizard", "spock", "scissors"];
const result = [" ties ", " beats ", " loses to "];

let playerScore = 0;
let computerScore = 0;

function zeroScore() {
    playerScore = 0;
    computerScore = 0;
}



let choiceComputer;
let choicePlayer;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 5);
    return choiceComputer = options[randomNum];
} 


playRound = function(choicePlayer, choiceComputer) {
    if (choicePlayer === undefined){
        return
    }
     indexPlayer = options.indexOf(choicePlayer), //spock => 3
     indexComputer = options.indexOf(choiceComputer), //rock=> 1
    dif = indexComputer - indexPlayer; // 1 - 3 => -2

    if(dif < 0) { // -2 < 0 => truthy
        dif += options.length; // -2 + 5 => 3
    }
    while(dif > 2) { //3 > 2 => truthy
        dif -= 2; // 3 - 2 => 1
    }
    console.log(choicePlayer + result[dif] + choiceComputer)
    return choicePlayer + result[dif] + choiceComputer;//spock beats rock
};

const btns = document.querySelectorAll("button");
btns.forEach((button)=>{button.addEventListener('click',()=>{
    choicePlayer = button.id
    if  (playerScore < 3 && computerScore < 3) {
        getComputerChoice();
        playRound(choicePlayer,choiceComputer);
        return;
    }
    else {
        zeroScore;
        return;
    }

    console.log(bigBang(choicePlayer, choiceComputer));

});
});


console.log(getComputerChoice());  // spock losses to paper 

