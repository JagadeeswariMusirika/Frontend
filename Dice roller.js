function rollDice(){
    
    const numofdice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceresult");
    const values=[];


for(let i=0;i<numofdice;i++){
    const value=Math.floor(Math.random()*6)+1;
    values.push(value);
    
}
diceresult.textContent=`Dice: ${values.join(", Dice: ")}`;

}