const textbox = document.getElementById("textbox");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
//const submit = document.getElementById("submit");
const result = document.getElementById("result");


function convert(){
    let temp;
    console.log("Function called!!!!");
    if(toF.checked){
        temp =Number(textbox.value);
        temp = (temp * 9/5) + 32;
        result.textContent= `${temp.toFixed(1)} in farhenite`;
    }
    else if (toC.checked){
        temp =Number(textbox.value);
        temp = (temp - 32) * 5/9;
        result.textContent= `${temp.toFixed(1)} in celcius`;
        console.log(temp)

    }
    else{
        result.textContent="Please select a conversion option";
    }

}
