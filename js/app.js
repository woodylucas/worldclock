function clock () {
//ES6 of Clock
const fullDate = new Date();
var hours = fullDate.getHours();
var mins = fullDate.getMinutes();
var secs = fullDate.getSeconds();

egypt = hours + 6 - 24 + 24;
var china = hours - 12 ;
var australia = hours + 14;
var brazil = hours + 1 ;
var uk = hours + 5;




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
if (egypt < 10 ) {
  egypt = "0" + egypt;
}
if (egypt === 24) {
  egypt = 0;
}
if (china < 10 ) {
  china = "0" + china;
}
if (china === 24) {
  china = 0;
}
if (australia < 10 ) {
  australia = "0" + australia;
}
if (australia === 24) {
  australia = 0;
}
if (brazil < 10 ) {
   brazil = "0" + brazil;
}
if (brazil === 24) {
  brazil = 0;
}
if (uk < 10 ) {
   uk = "0" + uk;
}
if (uk === 24) {
  uk = 0;
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
