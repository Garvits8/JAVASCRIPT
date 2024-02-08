const submit = document.getElementById("submit");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max=10;
let randomnum1;
let randomnum2;
let randomnum3;
submit.onclick= function(){
    randomnum1 =Math.floor(Math.random() * max);
    randomnum2=Math.floor(Math.random() * max) +min;
    randomnum3 =Math.floor(Math.random() * max) +min;
    label1.textContent = randomnum1;
    label2.textContent = randomnum2;
    label3.textContent = randomnum3;




}