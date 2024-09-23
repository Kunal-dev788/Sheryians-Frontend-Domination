let imgOne = document.querySelector("#imgOne")
let imgTwo = document.querySelector("#imgTwo")
let btn = document.querySelector("button")

btn.addEventListener("click",()=>{
    let imgOneSrc = imgOne.src
    let imgTwoSrc = imgTwo.src

    imgOne.src = imgTwoSrc
    imgTwo.src = imgOneSrc
})