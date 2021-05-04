function startTime() {
    let time = document.getElementById("time")
    let nTime = 100
    time.innerHTML = nTime
    setInterval(function () {
            nTime = nTime - 1
            time.innerHTML = nTime
        }, 
        1000)
}
