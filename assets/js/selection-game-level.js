function changeLevel () {
    let gameLevel = document.getElementById("game-level").value
    let gameButton = document.getElementById("btn-start-game")
    if (gameLevel === "l1") {
        gameButton.setAttribute("href", "assets/pages/game-easy.html")
    }

    if (gameLevel === "l2") {
        gameButton.setAttribute("href", "assets/pages/game-normal.html")
    }

    if (gameLevel === "l3") {
        gameButton.setAttribute("href", "assets/pages/game-difficult.html")
    }
}
