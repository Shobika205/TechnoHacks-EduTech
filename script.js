let countdown;
let timerDisplay = document.getElementById('timer-display');
let isRunning = false;

function startTimer() {
    if (isRunning) return; // Prevent multiple timers from running

    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    let totalTime = minutes * 60 + seconds;

    if (totalTime <= 0) {
        alert("Please set a valid time.");
        return;
    }

    isRunning = true;
    timerDisplay.innerHTML = formatTime(totalTime);

    countdown = setInterval(() => {
        totalTime--;

        if (totalTime < 0) {
            clearInterval(countdown);
            alert("Time's up!");
            isRunning = false;
            return;
        }

        timerDisplay.innerHTML = formatTime(totalTime);
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    timerDisplay.innerHTML = "00:00:00";
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
}

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


