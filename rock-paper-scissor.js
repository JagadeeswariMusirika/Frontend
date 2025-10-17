const choices=['rock','paper','scissor'];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()* 3)];
    let result="";
    if(playerChoice === computerChoice){
        result="IT'S A TIE";  }
    else{
        switch(playerChoice){
            case "rock":
                result= (computerChoice === "scissor")? "YOU WIN":"YOU LOSE";break;
            case "paper":
                result= (computerChoice === "rock")? "YOU WIN":"YOU LOSE";
                break;
            case "scissor":
                result= (computerChoice === "paper")? "YOU WIN":"YOU LOSE";
                break;}}
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${playerChoice}`;
    resultDisplay.textContent = result;}
//const playerScoreDisplay=document.getElementById("playerScoreDisplay");
//const computerScoreDisplay=document.getElementById("computerScoreDisplay");
//let playerscore=0;
//let computerscore=0;
/*
    resultdisplay.classList.remove("greenText","redText")
    switch(result){
        case "YOU WIN":
            resultdisplay.classList.add("greenText");
            playerscore++;
            playerdisplay.textContent=playerscore;
            break;
        case "YOU LOSE":
            resultdisplay.classList.add("redText");
            computerscore++;
            compterdisplay.textContent=computerscore;
            break;
    }
}*/
