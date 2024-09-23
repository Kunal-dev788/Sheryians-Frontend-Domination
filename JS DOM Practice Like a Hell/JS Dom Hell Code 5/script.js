var h1 = document.querySelector("h1")
// var btn = document.querySelector("button")
let ctr = 0;

function countNumber(){
    setInterval(() => {
        h1.textContent = ctr
        ctr++
    }, 1000);
}
