function updateDate(){
    setInterval(function(){ document.getElementById("hour").innerHTML = new Date().getHours(); }, 1000);
    setInterval(function(){ document.getElementById("minutes").innerHTML =new Date().getMinutes(); }, 1000);
    setInterval(function(){ document.getElementById("seconds").innerHTML = new Date().getSeconds();}, 1000);
}
updateDate();