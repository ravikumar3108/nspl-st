
// // Keywords
// // let var const
// //  Javascript comment //
// // Deaclare a variable

// let x = 10
// let _ram = 10
// let $sahil = 20
// let X = 20

// console.log(_ram)

// // let = keyword
// // x = varibale name
// // = ==> assignment operator
// // 10 = data
// console.log(x)
// //  re-assigmnet
// x = 20

// console.log(x)



// // let x  = 20

// //  block scope
// {
//     let y = 10
//     console.log("y = ", y)
// }

// var a = 19
// var a = 10

// {
//     var b = 10
// }

// console.log("b", b)


// // let x =


// let name1 = "sahil kumar"
// console.log(name1)



// let x1 = true
// console.log(x1)

// // let b = null

// let ram;
// console.log(ram)



// // array

// let arr = [1, 2, 3, "sahil", null, true]
// console.log(arr)


// let obj = {
//     name:"sahil",
//     age:23,
//     bloodgroup:"A+"
// }

// console.log(obj.age)



//  Operators :-

// 1.arithmetic Operatos :
// + = add
// -
//  *
//  /
// % = modulus = (remainder)
// ** = expontation = (power)
// ++ = increment
//  -- = decrement

// let x = 10
// let y = 20
// let c = x + y
// console.log(x+y)

// let z = 3
// console.log(x % z)
// console.log(x ** z)

// //  prefix
// let inc1 = ++x
// console.log("x",x)
// console.log("inc",inc1)


// postfix
// let inc = x++
// console.log("x",x)
// console.log("inc",inc)





// 2. Assignment Op
// = assignment operator
// +=
// -=
// *=
// /=
// %=
// **=

// let x = 10
// // let y = x + 10
// x += 10
// console.log(x)




// 3. comparision op  (Boolean)
// ==  => equal value
// === => equal value and equal type
// !=  => not equal
// !==  => not equal value and type
//  <  => greater than
//  > => less than
//  <=  => greatn and equal
// >=  => less equal

// let x = 20
// let y = 20
// let z = 30
// let x1 = "10"
// let y1 = "20"

// let cmp = x != y
// let cmp1 = y != z
// let cmp2 = y != y1
// let cmp22 = y === y1
// let cmp3 = y1 == x1
// console.log(cmp22)
// console.log("cmp", cmp)
// console.log("cmp1", cmp1)
// console.log("cmp2", cmp2)
// console.log(x <= y)


// 4. Logical op
// && and
// true && true = true
// true && false = false
// // false && true = false
// // false && false = false


// // || or
// // true || true = true
// // true || false = true
// // false || true = true
// // false || false = false


// //  !  vice versa


// let x = 10
// let y = 10
// let z = 20

// let cmp = (x == y) && (x === y) && (z == y)
// console.log(cmp)

// let cmp1 = (x == y) && (x === y) || (z == y)
// console.log(cmp1)

// let cmp2 = !(x == y)
// console.log(cmp2)


// let cmp3 = !((x == y) && (x === y) || (z == y))
// console.log(cmp3)



// // Conditions  statements :- it is a block of code which is run when our condition is true.

// // if
// // else if
// // else

// let ab = 9

// // if (condition){
// //     // code to be executed 
// // }

// // if (ab == 10){
// //     console.log("Conditon is true")
// // }
// // else{
// //    console.log("Condition is false") 
// // }


// if (ab == 10) {
//     console.log("Conditon is true")
// }
// else if (ab > 10) {
//     console.log("ab is greater than 10")
// }
// else if (ab < 10) {
//     console.log("ab is smaller than 10")
// }
// else {
//     console.log("Condition is false")
// }



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;


// for (let i = 0; i < fLen; i++) {
//     console.log(fruits[i])
// }



// let arr = [1, 2, 44, 4, 5, 5]

// // let x23 = arr.splice(3,2,"ram","Sahil")
// // console.log(arr)


// let x22 = arr.slice(0, 3)
// console.log(x22)




// const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)


// person.bloodgp = "A+"
// person.height = 5.4

// console.log(person)



// const obj1 = {
//     name: "sahil",
//     obj2: {
//         name: "ram"
//     }
// }

// console.log(obj1.obj2.name)


// let variab = "             sah           il                  "
// console.log(variab.length)
// console.log(variab)

// let vv = variab.trim()
// console.log(vv)
// console.log(vv.length)



//  create a function 
function Sum() {
    let a = 1
    let b = 20
    console.log(a + b)
}


//  call the function 
Sum()
Sum()
Sum()
Sum()
Sum()
Sum()


// Parameters :-
//  Arguments : - 

// function Sub(a, b) {
//     console.log(a * b)
// }


// Sub(12,34)
// Sub(12,4)
// Sub(2,34)
// Sub(22,4)


//  default parameters : always declare into the last 
function Sub(a, b = 20) {
    console.log(a * b)
}

Sub(12)


//  return value 
function getValue() {

    let x = 10
    let y = 20
    let z = x + y
    return z
}

let ab = getValue()

let a = 20
let bc = ab + a
console.log(bc)