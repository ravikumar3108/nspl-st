// Dom:- Document object Model : Dom is used to create , delete , add and styling

// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

console.log("heloo")
// select the id name div:- 
let div = document.getElementById("head")
document.getElementById("demo").innerHTML = "Hello World!";

// document.getElementsByTagName("div")[0].innerHTML = "helooo"

let h1 = document.createElement("h1")

div.appendChild(h1)
// div.removeChild(h1)

// SetAttribute 
h1.setAttribute("class", "sandeep")
h1.removeAttribute("class")

document.getElementsByTagName("h1")[0].innerHTML = "Heading"
// document.getElementsByClassName("sandeep")[0].innerHTML = "Sandeep "

div.style.color = "red"
div.style.border = "1px solid black"




