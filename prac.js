
// console.log(btns)


// for(i = 0; i < btns.length; i++){
//         btns[i].addEventListener("click", function playerChoice (e){
//         });
//         let playerChoice = e.target.id;
//         console.log(playerChoice);
        
//     } 
let playerChoice
const btns = document.querySelectorAll("button");

btns.forEach((button)=>{button.addEventListener('click',()=>{
    playerChoice = button.id;
    game(playerChoice);
})});

function game(){
    console.log(playerChoice);

}
    

    
    