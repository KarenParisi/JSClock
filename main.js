var clock = new Date();
var hours = clock.getHours();
var newHours = hours % 12;
var mins = clock.getMinutes();
var secs = clock.getSeconds();
mins = mins < 10 ? '0' + mins : mins;
secs = secs < 10 ? '0' + secs : secs;	

document.getElementById("time").innerHTML = newHours + ":" + mins + ":" + secs




// function addZero (i) {
// 	return (i < 10) ? "0" + i : i;
// 	}
	
// function getTime () {
// 	var time = newDate();
// 		hours = time.getHours();
// 		newHours = hours % 12;
// 		mins = time.getMinutes();
// 		secs = time.getSeconds();
	
// document.getElementById("time").innerHTML = newHours + ":" + mins + ":" + secs; timer = setTimeout (function(){
// getTime() }, 500);
// }
// getTime();

// })();