let cancelId;
let startTime;
const countdown = 25 * 60 * 1000


function startTimer () {
    let startTime = Date.now()
    cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer() {
 cancelAnimationFrame(cancelId)
}

function resetTimer() {

}

function updateTimer() {
    let millisElapsed = Date.now() - startTime
    let timeLeft = countdown - millisElapsed
   cancelId = requestAnimationFrame(updateTimer)
}







export default Timer 