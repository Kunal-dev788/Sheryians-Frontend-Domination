var inp = document.querySelector("input");

var data = [
    {userName:"Kunal",src : "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {userName:"Harsh", src : "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {userName:"Harshita", src : "https://images.unsplash.com/photo-1617059322001-a61ce9551e08?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

var pers = "";

data.forEach(function(elem){
    pers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h3>${elem.userName}</h3>
                </div>`
})

document.querySelector(".people").innerHTML = pers;

inp.addEventListener("input", function(){
    var matching = data.filter(function(e){
        return e.userName.startsWith(inp.value)
    })

    var filterPersons = "";

matching.forEach(function(elem){
    filterPersons += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h3>${elem.userName}</h3>
                </div>`
})

document.querySelector(".people").innerHTML = filterPersons;
})