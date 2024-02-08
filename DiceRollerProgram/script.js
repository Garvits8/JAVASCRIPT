function DICEROLL(){
    const numofdice = document.getElementById("dices").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    
    const values = [];
    const images =[];

    for(let i=0;i<numofdice;i++){
        const value = (Math.floor(Math.random()*6))+1;
        values.push(value);
        // diceresult.textContent=values;
        images.push(`<img src ="dice_images/${value}.png">`)
    
    }
     diceresult.textContent=`dice: ${values.join(" ")}`;
     diceimages.innerHTML= images.join(" ");
}