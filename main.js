function currentTime() {

var clock = new Date();
var hours = clock.getHours();
var newHours = hours % 12;
var mins = clock.getMinutes();
var secs = clock.getSeconds();
mins = mins < 10 ? '0' + mins : mins;
secs = secs < 10 ? '0' + secs : secs;	

document.getElementById("time").innerHTML = newHours + ":" + mins + ":" + secs;
t=setTimeout("currentTime()", 500);
}
