

function clock () {
const fullDate = new Date();
var hours = fullDate.getHours();
const mins = fullDate.getMinutes();
const secs = fullDate.getSeconds();

if (hours < 10 ) {
  hours = "0" + hours;
}
if (hours < 10 ) {
  hours = "0" + mins;
}
if (hours < 10 ) {
  hours = "0" + secs;
}

document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML = ":" + mins;
document.getElementById('second').innerHTML = ":" + secs;
}

setInterval(clock,100);
