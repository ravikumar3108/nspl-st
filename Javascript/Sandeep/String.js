
// String :-  it  is used to store character values...
// In single quotes and double quotes.
// String works on index number.
// And also countable white space

let strr = "My name is  Sandeep. Sandeep is Very good boy."
let strr1 = 'My name is Sandeep'
let strr2 = 'My name is Sandeep'

// String lemgth 


console.log(strr)
console.log(strr.length)

// Access the value 
let a = strr[3]
let a1 = strr.at(4)
console.log(a1)

// slice 
let c = strr.slice(2, 10)
console.log(c)

// replace and replaceAlll
let name1 = strr.replace("Sandeep", "Ravi")
let name2 = strr.replaceAll("Sandeep", "Ravi")
console.log(name1)
console.log(name2)
console.log(strr)

// conact :- merge two and more string. 
let cl = strr.concat(strr1, strr2)
console.log(cl)

// 
let st = "                  my name is sandeep. my brother name is                  "
let st1 = "my name is SANDEEP. my brother name is ...."
let n = st.toUpperCase()
let n1 = st1.toLowerCase()
console.log(n)
console.log(n1)

// Trim :- remove whitesapces from left amd right

console.log(st.length)
let tr = st.trim()
// let tr = st.trimStart()
// let tr = st.trimEnd()
console.log(tr.length)