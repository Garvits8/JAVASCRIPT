function updateclock(){
const now = new Date();
const Hour= now.getHours().toString().padStart(2,0);;
const minute = now.getMinutes().toString().padStart(2,0);
const sec = now.getSeconds().toString().padStart(2,0);
const timerString= `${Hour}:${minute}:${sec}`
document.getElementById("clock").textContent= timerString;
}

updateclock();
setInterval(updateclock,1000);