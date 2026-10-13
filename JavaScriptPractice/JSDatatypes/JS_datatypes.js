var a= 20

// javascript data types
// 1. Premitive data types : This data type is immutable (cannot be changed) and store on value at time.
// -> number
// -> string
// -> boolean
// -> undefined
// -> null


// 2. Non-premitive data types : These data types are mutable (can be changed) and store a reference to the value.
//                                we can store multiple values in non-premitive data types.
// -> array
// -> object
// -> function



// ####################################################

// 1. Number : Number data type hold all type of number values 
var n1 = 3.45
var n2 = 45677
var n3 = -5674
console.log("n1 value:", n1, ":", typeof n1) // n1 value: 3.45 : number
console.log("n2 value:", n2, ":", typeof n2) // n2 value: 45677 : number
console.log("n3 value:", n3, ":", typeof n3) // n3 value: -5674 : number



//2. string data: when we want to store character, sentenses, words, substring, then it is consider as string data type.

var s1 = ''
var s2 = "Hello"
var s3 = "We are Learning JavaScript"
var s4 = "Programming 1234"

console.log("s1 value :", s1, typeof s1)
console.log("s2 value :", s2, typeof s2)
console.log("s3 value :", s3, typeof s3)
console.log("s4 value :", s4, typeof s4)

// string follows indexing.

var str1 = "JavaScript"

//  0   1   2  3  4  5  6  7  8  9  +ve indexing
//  J   a   v  a  S  c  r  i  p  t
// -10 -9  -8  -7 -6 -5 -4 -3 -2 -1  -ve indexing

console.log(str1[4]) // S
console.log(str1[8]) // P
console.log(str1[3], str1[4]) // a S

console.log("################ Boolean #######################")
// Boolean has only 2 values : true and false.
// Boolean data is output of condition of any program.

var a1 = 100
var b1 = 200
var c1 = 100
console.log("a1 == c1:", a1 == c1) // a1 == c1: true
console.log("a1 == b1:", a1 == b1) // a1 == b1: false
console.log("b1 > c1:", b1 > c1) // b1 > c1: true



console.log("################ Undefined #######################")
// Declare A variable but not assign a value.

let xyz
console.log("xyz :", xyz) // xyz : undefined


console.log("################ Null #######################")
// Declare A variable but keep absense of value assign as null value.

let username = null
console.log("username :", username) // username : null


console.log("################### Non-premitive Datatype ##########################")
// Array :
// array can contains multiple values at a time.
// we can update, modify, delete values from array.
// array also follows the same indexing as like string.

//          0    1    2    3    4    5      6     7
var arr1 = [10, 'a', 'b', 'c', true, false, null, [4, 6, 7]]
//          -8  -7  -6    -5    -4   -3    -2     -1

console.log(arr1) // [ 10, 'a', 'b', 'c', true, false, null, [ 4, 6, 7 ] ]
// get the value of array using indexing.
console.log(arr1[5]) // false
console.log(arr1[7][1]) // 6


console.log("##################### Object data type ########################")
// object data type store values in key value pair.
// duplicate keys are not allowed on object data type.
// It is mutable data type, we can modify values as per requirements.
// {key :value}

var obj1 = {username: 'rahul', email: "rahul@gmail.com", phone: 67867687676687}
console.log("Username :", obj1['username'])
console.log("object name :", typeof obj1)

obj1.address = "Pune, Baner"
console.log("Obj1 :", obj1['address']) // Obj1 : Pune, Baner
console.log(obj1)
// {
//   username: 'rahul',
//   email: 'rahul@gmail.com',
//   phone: 67867687676687,
//   address: 'Pune, Baner'
// }

const school = { 
    teacher : [{a: 123, b: 456}],
    students : {
        9: [{stid: 'st_001', email: 'student1@gmail.com', phone: 987987987987}],
        10: [{stid: 'st_002', email: 'student2@gmail.com', phone: 987987987987}],
        11: [{stid: 'st_003', email: 'student3@gmail.com', phone: 987987987987}],
    
    }
}

console.log(school)
console.log(school.students[9][0])