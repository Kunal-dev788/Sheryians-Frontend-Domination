var textarea = document.querySelector("textarea")
var h1 = document.querySelector("h1")

textarea.addEventListener("input", function () {
    let textWithoutSpaces = textarea.value.split(' ').join('');
    h1.textContent = "Counter Word: "+textWithoutSpaces.length
})
