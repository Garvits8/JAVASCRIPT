let Counter = 0;
//increasebutton
document.getElementById("increasebtn").onclick = function(){
 Counter += 1;
 document.getElementById("id2").textContent= Counter;
}
//decresasebutton
document.getElementById("decreasebtn").onclick = function(){
    Counter -= 1;
    document.getElementById("id2").textContent=`${Counter}`;
   }
   //resetbutton
   document.getElementById("reset").onclick = function(){
    Counter =0;
    document.getElementById("id2").textContent= Counter;
   }