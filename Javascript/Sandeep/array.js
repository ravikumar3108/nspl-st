
let arr = [1, 2, 3, 5, 6, 89, 34, 6, 6, 7, 7, 8, 8,]

console.log(arr)

// Array is used to store multiple values.
// Array works n index number. 0,1,2,......

// length 
let len = arr.length
console.log(len)

// Access the values
let ac = arr[5]
console.log(ac)

// change the value 
arr[5] = "Sandeeep"
console.log(arr)

// Methods :- 
// pop :- which is used to remove last index value
arr.pop()
arr.pop()
arr.pop()
arr.pop()
console.log(arr)


// push :- which is used to add value in last index
arr.push("heloo")
arr.push(23)
console.log(arr)


// shift :- which is remove staring index value
// unshift :- which is add a value in starting index..

arr.shift()
console.log(arr)


// slice:- cut a piece of array
// 2 , 5 index (note :- last index is not include 5)
let sl = arr.slice(2, 5)
console.log(sl)


// Splice :- 3 Parameters
// 1. index number 
// 2. Remove items
// 3. Add Items / values

arr.splice(5, 0, true)
console.log(arr)

arr.splice(6, 2, 1, 2, 3)
console.log(arr)

// Accesss
console.log(arr.at(3))

// delete 
delete arr[3]
console.log(arr)

// sort : arrange data into ascending 
let arr2 = ["a", "z", "c", "b", "A", "Heloo", "Ram", "Hallo"]
arr2.sort()
console.log(arr2)

