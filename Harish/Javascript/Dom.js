
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()


let h1 = document.getElementById("head")
h1.innerHTML = "Heloo this is my heading."

let div = document.getElementsByClassName("cl")[0].innerHTML = "This is div"


let p = document.createElement("p")
let div1 = document.getElementById("ff")

div1.appendChild(p)

// div1.removeChild(p)

h1.style.color = "red"
h1.style.backgroundColor = "green"

p.setAttribute("class","cl1")
p.removeAttribute("class")


