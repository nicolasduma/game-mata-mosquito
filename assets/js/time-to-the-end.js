let timeToTheEnd = document.getElementById("time-to-the-end")

function timerToEnd(seconds) {
    timeToTheEnd.innerHTML = seconds
    setInterval(function () {
            seconds--
            timeToTheEnd.innerHTML = seconds
            if (seconds === 0) {
                location.href="victory.html"
            }
        }, 
        1000)
}
