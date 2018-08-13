
//ES6 of Clock
function clock () {
var fullDate = new Date();
var hours = fullDate.getHours();
var mins = fullDate.getMinutes();
var secs = fullDate.getSeconds();


if (hours.length < 10 ) {
  hours = "0" + hours;
}
if (hours.length < 10 ) {
  hours = "0" + mins;
}
if (hours.length < 10 ) {
  hours = "0" + secs;
}

document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML = ":" + mins;
document.getElementById('second').innerHTML = ":" + secs;
document.getElementById('hour-2').innerHTML = hours - 1;
document.getElementById('minute-2').innerHTML = ":" + mins;
document.getElementById('second-2').innerHTML = ":" + secs;
document.getElementById('hour-3').innerHTML = hours - 3;
document.getElementById('minute-3').innerHTML = ":" + mins;
document.getElementById('second-3').innerHTML = ":" + secs;
document.getElementById('hour-4').innerHTML = hours - 2;
document.getElementById('minute-4').innerHTML = ":" + mins;
document.getElementById('second-4').innerHTML = ":" + secs;
document.getElementById('hour-5').innerHTML = hours - 6;
document.getElementById('minute-5').innerHTML = ":" + mins;
document.getElementById('second-5').innerHTML = ":" + secs;
document.getElementById('hour-6').innerHTML = hours + 5;
document.getElementById('minute-6').innerHTML = ":" + mins;
document.getElementById('second-6').innerHTML = ":" + secs;

}

setInterval(clock,100);
