let startStopButton = document.getElementById('startStop');
let resetButton = document.getElementById('reset');
let timeDisplay = document.getElementById('time');

let startTime, updatedTime, difference, tInterval;
let running = false;

function startStop() {
    if (running) {
        clearInterval(tInterval);
        startStopButton.innerHTML = "Start";
    } else {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 1);
        startStopButton.innerHTML = "Stop";
    }
    running = !running;
}

function reset() {
    clearInterval(tInterval);
    running = false;
    startStopButton.innerHTML = "Start";
    difference = 0;
    timeDisplay.innerHTML = "00:00:00";
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    timeDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
