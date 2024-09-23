var cap = document.querySelector("#downloadCap")
var prog = document.querySelector("#progress")
ctr = 0

const a = setInterval(function () {
    if (ctr === 100) {
        clearInterval(a)
    }
    ctr++
    prog.style.width = ctr + "%"
}, 100)