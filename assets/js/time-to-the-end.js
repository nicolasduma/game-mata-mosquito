const timeToTheEnd = document.getElementById("time-to-the-end")

function timerToEnd(seconds) {
    setInterval(function () {
            timeToTheEnd.innerHTML = seconds
            seconds--
            if (seconds === 0) {
                location.href="victory.html"
            }
        }, 
        1000)
}
