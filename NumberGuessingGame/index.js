const minNUm=1;
const maxnum = 100;
const answer = Math.floor(Math.random() * (maxnum - minNUm + 1)+minNUm); 
console.log(answer)

let attemps = 0;
let guess;
let running = true;

while(running)
{
    guess= window.prompt(`guess a number between ${minNUm} - ${maxnum}`)
    guess= Number(guess); 
    
    if(isNaN(guess)){
        window.alert(`lodu number dal`);


    }else if (guess<minNUm || guess>maxnum){
        window.alert('out of range');
    }
    else{
        attemps++;
        if(guess > answer)
        {
            window.alert(`is high try again!!`);

        }
        else if (guess<answer)
        {
            window.alert(`its low try again!!!`);
        }
        else{
            window.alert(`congratulation you gussed the right number .it took you ${attemps} attempts.the actual answer was${answer}`);
            running = false;}
        }
   
}
