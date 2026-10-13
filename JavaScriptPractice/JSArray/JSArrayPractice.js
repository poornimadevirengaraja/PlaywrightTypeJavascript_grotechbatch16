// array contains multiple values or data type.
// array follows indexing as like string.
// array is mutable is nature, we can modify value any point of time.

//             0   1    2       3          4                 5    6
var JSArray = [3, 5.6, 'Hello', [4, 6, 7], {a: 123, b: 456}, true, 3]

// get value from array using indexing
console.log("JSArray[3] :", JSArray[3])
// JSArray[3] : [ 4, 6, 7 ]

console.log("JSArray[3][1] :", JSArray[3][1]) // JSArray[3][1] : 6

console.log(JSArray)
// [ 3, 5.6, 'Hello', [ 4, 6, 7 ], { a: 123, b: 456 }, true, 3 ]

// Object property value.
console.log("JSArray[4] :", JSArray[4])
// JSArray[4] : { a: 123, b: 456 }
console.log("JSArray[4]['b']  value:", JSArray[4]['b'])
// JSArray[4]['b'] value: 456



console.log("################################")
// Apply loop on array values.
var Arr3 = [5, 7, 8, 12, 15, 17, 13, 56]
console.log(Arr3)

for(var a of Arr3) {
    console.log(a, ":", a**2)
}

/*
5 : 25
7 : 49
8 : 64
12 : 144
15 : 225
17 : 289
13 : 169
56 : 3136
*/

console.log("######################")
// read each value of array using indexing.
for(var b in Arr3) {
    console.log(b, Arr3[b])
}

/*
0 5
1 7
2 8
3 12
4 15
5 17
6 13
7 56
*/

console.log("######################")
for(var i=0; i<Arr3.length; i++) {
    console.log("i:", i, "value :", Arr3[i])
}

/*
i: 0 value : 5
i: 1 value : 7
i: 2 value : 8
i: 3 value : 12
i: 4 value : 15
i: 5 value : 17
i: 6 value : 13
i: 7 value : 56
*/

console.log("##################### Array Methods #################################")

// push() method : push method help to add value at the end of array.

var A1 = [4, 6, 7]
A1.push(100)
console.log("A1 :", A1) // A1 : [ 4, 6, 7, 100 ]

//Add multiple value to array
A1.push(55, 77, 88, 99)
console.log("A1 :", A1)
/*
A1 : [
   4,  6,  7, 100,
  55, 77, 88,  99
]
*/

A1.push(true, "Hello", [4, 5, 6])
console.log("A1 :", A1)
//  [ 4, 6, 7, 100, 55, 77, 88, 99, true, 'Hello', [ 4, 5, 6 ] ]

console.log("############################")
// unshift method : Inserts new elements at the start of an array, and returns the new length of the array.

var B1 = [4, 5, 6, 7]
B1.unshift(50)
console.log("B1 :", B1)
// B1 : [ 50, 4, 5, 6, 7 ]

B1.unshift(true, 'JavaScript')
console.log("B1 :", B1) 
//  [ true, 'JavaScript', 50, 4, 5, 6, 7 ]

function addition(n1, n2){
    return n1+n2
}

B1.unshift(addition(50, 10))
 
// [ 60, true, 'JavaScript', 50, 4, 5, 6, 7 ]


console.log("############################")
// pop() method : Method help to remove values from end of the array and return the value
var C1= [30, 50, 60, 70]
var val = C1.pop()
console.log("removed value :", val) // removed value : 70
console.log("C1 :", C1) // C1 : [ 30, 50, 60 ]


console.log("############################")
// shift() method  : Removes the first element from an array and returns it. 
// If the array is empty, undefined is returned and the array is not modified.

var D1= ['a', 'b', 'c', 'd']
var v1 = D1.shift()
console.log("Removed value :", v1) // a
console.log("Update Array :", D1) // [ 'b', 'c', 'd' ]

console.log("############################")
// splice() method : This method help to remove values from array using index position.
// User Can add value at specific index position.
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// splice(start: number, deleteCount?: number, value)

var H1 = [4, 5, 6, 7, 'p', 'q', 'r']
// Add 1 value to specific position without delete any value
H1.splice(2, 0, 50)
console.log("H1 :", H1)
/*
[
  4, 5,   50,  6,
  7, 'p', 'q', 'r'
]
*/

// Add 2 values at index 3 and remove 2 values.
H1.splice(3, 2, 100, 200)
console.log("H1 :", H1)
/*

[
  4,   5,   50,  100,
  200, 'p', 'q', 'r'
]

*/

// delete 3 value from 1 index and dont add any value
var r1 = H1.splice(1, 3)
console.log("removed values :", r1) // [ 5, 50, 100 ]
console.log("H1 :", H1) // [ 4, 200, 'p', 'q', 'r' ]


H1.splice(1, 0, 5, 50, 100)
// console.log("H1 :", H1)
// H1 : [
//   4,   5,   50,  100,
//   200, 'p', 'q', 'r'
// ]

console.log("##############################")
//Q : write a program to read value user userdetails object and store in array.

var UserDetails = {name: "Rohit", age: 39, email: 'rohit@gmail.com'}
console.log(UserDetails.name)

var Arr1 = []
for (var [key, value] of Object.entries(UserDetails)) {
    console.log([key, value])
    Arr1.push([key, value])
}

console.log(Arr1)
// [ [ 'name', 'Rohit' ], [ 'age', 39 ], [ 'email', 'rohit@gmail.com' ] ]


console.log("##############################")
// concat() : this method combine multiple array and create new array.

const a1 = ['a', 'b', 'c']
const b1 = ['p', 'q', 'r']
var result = a1.concat(b1)
console.log("result :", result) // [ 'a', 'b', 'c', 'p', 'q', 'r' ]

const c1 = ['M', 'n', 'o']

var result2 = a1.concat(b1, c1)
console.log("result2 :", result2)

// result2 : [
//   'a', 'b', 'c',
//   'p', 'q', 'r',
//   'M', 'n', 'o'
// ]


console.log("##############################")
// slice method : this method help to get partial array values
// slice(start, end) : output will contain start value and exclude the end index value.

var y2 = [ 'a', 'b', 'c', 'p', 'q', 'r', 'M', 'n', 'o']

 //
var r2 = y2.slice(2, 7)
console.log("result2 :", r2)
// [ 'c', 'p', 'q', 'r', 'M' ]

var r3 = y2.slice(7)
console.log("r3 :", r3) // r3 : [ 'n', 'o' ]

console.log(y2.slice(-5, -1))
// [ 'q', 'r', 'M', 'n' ]

console.log([y2[0], y2[5], y2[7]])
// [ 'a', 'r', 'n' ]


console.log("##############################")
// indexOf : this method return index position of any value.
var arr1 = [20, 30, 40, 50]
// index of available value
console.log(arr1.indexOf(40)) // 2

// index of non available value, it will return -1, if value is not available.
console.log(arr1.indexOf(60)) // -1

console.log("##############################")
// includes method: this method true if value is available or return false if value is not available.

console.log("check 20 is available :", arr1.includes(20))
// check 20 is available : true

console.log("check 70 is available :", arr1.includes(70))
// check 70 is available : false


console.log("##############################")
// sort() method : This method return sorted value from array.
var arr3 = [5, 1, 7, 2, 8, 3, 9]
// ascending order sort()
console.log(arr3.sort())


// [
//   1, 2, 3, 5,
//   7, 8, 9
// ]


// descending order sort()
var r3 = arr3.sort()
// reverse method will help to reverse the array values.
console.log(r3.reverse())
// [
//   9, 8, 7, 5,
//   3, 2, 1
// ]

var arr4 = ['A', 'L', 'M', 'B', 'D']
console.log(arr4.sort()) // [ 'A', 'B', 'D', 'L', 'M' ]


console.log("##############################")
// Join method : join method help us to create a string from array of string.

var arr = ['hello', 'good', 'morning', 'How', 'are', 'you']
var result = arr.join(" ")
console.log("join result :", result)
// hello good morning How are you