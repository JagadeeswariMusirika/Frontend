const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random() *( maxNum - minNum + 1)+ minNum);

let attempts=0;
let guess;
let running=true;

while(running){
guess=window.prompt(`guess a number btw ${minNum} and ${maxNum}`);
guess=Number(guess);
if(isNaN(guess)){
    window.alert("not a valid guess");
}
else if(!(guess > minNum && guess < maxNum)){
    window.alert("NOT a valid guess");
}
else{
    attempts++;
    if(guess < answer){
        window.alert("TOO LOW! Increase the number");
    }
    else if(guess > answer){
        window.alert("TOO HIGH! Decrease the number");
    }
    else{
        window.alert(`CORRECT GUESS! you got the answer in ${attempts} attempts`);
        running = false;
    }
}
}

