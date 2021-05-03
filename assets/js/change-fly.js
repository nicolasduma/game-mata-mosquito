function draw(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var verify = {
    width: function (x) {
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

    turns: function (x) {
        if (x === 2) {
            fly.classList.add("fly-turns")
        }
    }
}

const fly = document.getElementById("fly")

function changeFly() {
    fly.classList.remove("fly-width-120")
    fly.classList.remove("fly-width-110")
    fly.classList.remove("fly-width-100")
    fly.classList.remove("fly-width-90")
    fly.classList.remove("fly-width-80")
    fly.classList.remove("fly-turns")

    verify.width(draw(1, 5))
    verify.turns(draw(1, 2))

    let flyLeft = draw(3, 1200)
    let flyTop = draw(3, 500)

    while (flyLeft > 1000 && flyTop < 200) {
        flyLeft = draw(3, 1200)
        flyTop = draw(3, 500)
    }

    fly.style.left = flyLeft + "px"
    fly.style.top = flyTop + "px"

    fly.classList.add("opacity-100")
}

