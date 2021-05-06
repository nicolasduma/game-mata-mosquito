const fly = document.getElementById("fly")

var change = {
    width: function(x) {
        if (x === 1) {
            fly.classList.add("fly-width-120")
        }

        if (x === 2) {
            fly.classList.add("fly-width-110")
        }

        if (x === 3) {
            fly.classList.add("fly-width-100")
        }

        if (x === 4) {
            fly.classList.add("fly-width-90")
        }

        if (x === 5) {
            fly.classList.add("fly-width-80")
        }
    },

    turns: function(x) {
        if (x === 2) {
            fly.classList.add("fly-turns")
        }
    }
}

function draw(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function changeFly() {
    fly.classList.remove("fly-width-120")
    fly.classList.remove("fly-width-110")
    fly.classList.remove("fly-width-100")
    fly.classList.remove("fly-width-90")
    fly.classList.remove("fly-width-80")
    fly.classList.remove("fly-turns")

    change.width(draw(1, 5))
    change.turns(draw(1, 2))

    let flyLeft = draw(3, 1200)
    let flyTop = draw(3, 500)

    while (flyLeft > 1000 && flyTop < 100) {
        flyLeft = draw(3, 1200)
        flyTop = draw(3, 500)
    }

    fly.style.left = flyLeft + "px"
    fly.style.top = flyTop + "px"

    fly.classList.add("opacity-100")
}

function stopIntervalByClick(element, interval) {
    element.addEventListener("click", function() {
        clearInterval(interval)
    })
}

function gameOver(x) {
    if (x === 1) {
        document.getElementById("life1").setAttribute("src", "../images/empty-heart.png")
    }
    
    if (x === 2) {
        document.getElementById("life2").setAttribute("src", "../images/empty-heart.png")
    }
    
    if (x === 3) {
        document.getElementById("life3").setAttribute("src", "../images/empty-heart.png")
        location.href = "game-over.html"
    }
}

function verificLevel() {
    const local = location.search
    let x = 0
    if (local === "?game-level=l1") {
        x = 2.25
    }

    if (local === "?game-level=l2") {
        x = 1.75
    }

    if (local === "?game-level=l3") {
        x = 1.25
    }
    return x * 1000
}

function bodyLoad() {
    changeFly()
    timerToEnd(100)
    startTimeChangeFly(verificLevel())
}

let lostLifes = 0
function startTimeChangeFly(time) {
    let timeChangeFly = setInterval(function() {
        changeFly()
        lostLifes++
        gameOver(lostLifes)
    }, time)
    stopIntervalByClick(fly, timeChangeFly)
}

fly.addEventListener("click", function() {
    startTimeChangeFly(verificLevel())
    changeFly()
})
