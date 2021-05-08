function stringsSeparetor(element, stringInit, stringEnd) {
    element.split('')
    let filtedElement = element.slice(stringInit, stringEnd)
    let newElement = ""
    for (index in filtedElement) {
        newElement = newElement + filtedElement[index]
    }
    return newElement
}

function innerPoints() {
    document.getElementById("user-points").innerHTML = stringsSeparetor(location.search, 8, location.search.length)
}
