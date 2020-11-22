'use strict';

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let minutesPrinted = 0;
let secondsPrinted = 0;
let millisecondsPrinted = 0;

let interval = null;
let status = "stopped";

reset();
startStop;

function cubeTimer() {
    milliseconds++;
    if(milliseconds/100 === 1) {
        milliseconds = 0;
        seconds++;

        if(seconds/60 === 1) {
            seconds = 0;
            minutes++
        }
    }
    if(milliseconds < 10) {
        millisecondsPrinted = "0" + milliseconds.toString();
    }
    else {
        millisecondsPrinted = milliseconds;
    }
    if(seconds < 10) {
        secondsPrinted = "0" + seconds.toString();
    }
    else {
        secondsPrinted = seconds;
    }
    if(minutes < 10) {
        minutesPrinted = "0" + minutes.toString();
    }
    else {
        minutesPrinted = minutes;
    }

    document.getElementById("numbers").innerHTML = minutesPrinted + ":" + secondsPrinted + ":" + millisecondsPrinted;
    
}

function startStop() {
    if(status === "stopped") {
        interval = window.setInterval(cubeTimer, 10);
        document.getElementById("start").innerHTML = "STOP";
        status = "started";
    }
    else {
        window.clearInterval(interval);
        document.getElementById("start").innerHTML = "START";
        status = "stopped";
    }
}

function reset() {
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    milliseconds = 0;
    document.getElementById("numbers").innerHTML = "00.00.00";
    document.getElementById("start").innerHTML = "START";
}
