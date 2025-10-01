

// Function :- it is a block of codee which is run when our function is call. 
// Function are reusable.
// Create a function

console.log("Outer Function")

function Funname() {
    let x = 10
    let b = 30
    console.log(x + b)
    console.log("Function is running")

}

// Call the function 
Funname()
// Funname()
// Funname()
// Funname()
// Funname()

// Parameters and arguments :- 

function Username(x, b) {

    console.log(x + b)

}

Username(20, 40)
Username(201, 40)
Username(203, 40)
Username(204, 40)
Username(202, 40)


// Default parameters :- always declare into last in parameters

function Username1(x, b = 20) {

    console.log(x + b)

}

Username1(10)
// default arguments 
Username1(b = 10, x = 30)

// return value ...

function Sum(x, y) {
    return x + y

}

let a = Sum(10, 29)
console.log(a + 3000)
a *= 30
console.log(a)