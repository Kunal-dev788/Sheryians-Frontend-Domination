let form = document.querySelector("form")
let inps = document.querySelectorAll('input[type="text"]')


form.addEventListener("submit", function(ev) {
    ev.preventDefault()

    for (let i = 0; i < inps.length; i++) {
        if(inps[i].value.trim() === ''){
            let h4 = document.createElement("h4")
            h4.textContent = "Some filed blank"
            h4.style.color = "red";
            document.querySelector("div").appendChild(h4)
            break;
        }
    }

})
