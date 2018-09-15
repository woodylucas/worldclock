function clock () {
//ES6 of Clock
const fullDate = new Date();
var hours = fullDate.getHours();
var mins = fullDate.getMinutes();
var secs = fullDate.getSeconds();
var egypt = hours + 6 - 24;
var china = hours + 12 - 24;
var australia = hours + 14 - 24;
var brazil = hours + 1 - 24;
var uk = hours + 5 - 24;


//To place a zero in front of the clock, conditional statment.
if (hours < 10 ) {
  hours = "0" + hours;
}
if (mins < 10 ) {
  mins = "0" + mins;
}
if (secs < 10 ) {
  secs = "0" + secs;
}


//Use of DOM to make a HTML Reference point.
document.getElementById('hour').innerHTML = hours;
document.getElementById('minute').innerHTML = ":" + mins;
document.getElementById('second').innerHTML = ":" + secs;
document.getElementById('hour-2').innerHTML = egypt;
document.getElementById('minute-2').innerHTML = ":" + mins;
document.getElementById('second-2').innerHTML = ":" + secs;
document.getElementById('hour-3').innerHTML = china;
document.getElementById('minute-3').innerHTML = ":" + mins;
document.getElementById('second-3').innerHTML = ":" + secs;
document.getElementById('hour-4').innerHTML = australia;
document.getElementById('minute-4').innerHTML = ":" + mins;
document.getElementById('second-4').innerHTML = ":" + secs;
document.getElementById('hour-5').innerHTML = brazil;
document.getElementById('minute-5').innerHTML = ":" + mins;
document.getElementById('second-5').innerHTML = ":" + secs;
document.getElementById('hour-6').innerHTML = uk;
document.getElementById('minute-6').innerHTML = ":" + mins;
document.getElementById('second-6').innerHTML = ":" + secs;

}

setInterval(clock, 100);
