const mybtn = document.getElementById("mybtn");
const mylabel1 = document.getElementById("mylabel1");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");
const min=1;
const max=100;
let randomNo1;
let randomNo2;
let randomNo3;
mybtn.onclick= function(){
    randomNo1=Math.floor(Math.random()*max)+ min;
    randomNo2=Math.floor(Math.random()*max)+ min;
    randomNo3=Math.floor(Math.random()*max)+ min;
    mylabel1.textContent=randomNo1;
    mylabel2.textContent=randomNo2;
    mylabel3.textContent=randomNo3;
}