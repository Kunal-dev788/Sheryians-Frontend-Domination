var inp = document.querySelector("input")
var addbtn = document.querySelector("#add")


addbtn.addEventListener("click" , ()=>{
    var li = document.createElement("li")
    let inpValue = inp.value
    li.textContent = inpValue
    document.querySelector("ul").appendChild(li)
    var edtBtn = document.createElement("button")
    edtBtn.textContent = "Edit Item"
    edtBtn.onclick = function edtItem(){
        inp.focus();
        inp.value = li.textContent
        addbtn.onclick = function(){
            li.remove()
            edtBtn.remove()
            delBtn.remove()
            li.textContent = inpValue
        }
    }
    document.querySelector("ul").appendChild(edtBtn)
    var delBtn = document.createElement("button")
    delBtn.textContent = "Delete Item"
    delBtn.onclick = function delItem(){
        document.querySelector("ul").removeChild(li)
        document.querySelector("ul").removeChild(delBtn)
        document.querySelector("ul").removeChild(edtBtn)
    }
    document.querySelector("ul").appendChild(delBtn)

    inp.value = ""
})

