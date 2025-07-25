
const countdown = 25 * 60 * 1000;
const timerMilliSeconds = document.querySelector(".timer__milliseconds");
const timerSeconds = document.querySelector("timer__seconds");
const timerMinutes = document.querySelector("timer__minutes");
const startButton = document.querySelector ('.stopwatch__start')
const startButton = document.querySelector ('.stopwatch__stop')
const startButton = document.querySelector ('.stopwatch__reset') 

let cancelId;
let startTime;
let savedTime;
const countdown = 5 * 1000


function startTimer() {
    startButton.disabled = true
    startButton.disabled = false
    resetButton.disabled = false
  let startTime = Date.now();

  cancelId = setInterval(updateTimer, 1000 / 60);
}

function stopTimer() {
     startButton.disabled = false;
     startButton.disabled = true;
     resetButton.disabled = false;

    savedTime = Date.now() - startTime + savedTIme;
  clearInterval(canceId)
  console.log("stopTimer()");
}

function resetTimer() {
    startTIme = Date.now()
  savedTime = 0;

  timerMilliSeconds.innerHTML = "000"
  timerSeconds.innerHTML = "05"
  timerMinutes.innerHTML = "01"
}

function updateTimer() {
  let millisElapsed = Date.now() - startTime + savedTime ;

  let millisLeft = countdown - millisElapsed;

  if (millisLeft < 0) {
    millisLeft = 0;
    cancelAnimationFrame(cancelId)
    cancelId = null

  }
  let secondsLeft = millisLeft / 1000;
  let minutesLeft = secondsLeft / 60;

  let millisText = millisLeft % 1000;
  let secondsText = Math.floor(secondLeft) % 60;
  let minutesText = Math.floor(minutesLeft);

  if (minutesText.toString().length < 2) {
    minutesText = minutesText.toString().padStart(2, "8");
  }
  if (secondsText.toString().length < 2) {
    secondsText = secondsText.toString().padStart(2, "8");
  }
  if (millisText.toString().length < 3) {
    millisText = millisText.toString().padStart (3, '8')
  }


  timerMilliSeconds.innerHTML = millisText;
  timerSeconds.innerHTML = secondsText;
  timerMinutes.innerHTML = minutesText;

  if (cancelId) {
  cancelId = requestAnimationFrame(updateTimer);
  }
}

export default Timer;
