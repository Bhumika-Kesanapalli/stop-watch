let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapNumber = 0;
const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', function() {
    if (!running) {
        startTime = new Date().getTime() - difference;
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
});

document.getElementById('pause').addEventListener('click', function() {
    if (running) {
        clearInterval(tInterval);
        difference = new Date().getTime() - startTime;
        running = false;
    }
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(tInterval);
    running = false;
    display.textContent = "00:00:00";
    difference = 0;
    lapNumber = 0;
    laps.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', function() {
    if (running) {
        const lapTime = document.createElement('li');
        lapTime.textContent = `Lap ${++lapNumber}: ${display.textContent}`;
        laps.appendChild(lapTime);
    }
});

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.textContent = `${hours}:${minutes}:${seconds}`;
}
