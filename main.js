setInterval(setClock, 1000)

function setClock(){
	const currentDate = new Date()
	const secondsRatio = currentDate.getSeconds() / 60
	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
}

setClock()


function showTime(){
var date = new Date();
var h = date.getHours(); // 0 - 23
var m = date.getMinutes(); // 0 - 59
var s = date.getSeconds(); // 0 - 59
			

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

var time = h + " hours " + m + " minutes and " + s + " seconds";
document.getElementById("MyClock").innerText = time;
document.getElementById("MyClock").textContent = time;

setTimeout(showTime, 1000);
}

showTime();


var color = [ "#4158a3", "#1a174d", "#36174d", "#703f73", "#06535c" ]
var i = 0;
document.querySelector("button").addEventListener("click", function(){
i = i < color.length ? ++i : 0;
document.querySelector("body").style.background = color[i]
})


