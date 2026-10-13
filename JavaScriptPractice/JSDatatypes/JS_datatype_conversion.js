// 1. implicit conversion: when we convert one data type
//  to another data type automatically by JS engine, 
// then it is called implicit conversion.

// when we add string with number, then JS engine convert number
//  into string and then perform addition operation.
var n1 = 100
var s1 = "200"
var result = n1 + s1
console.log("result :", result, typeof result) // result : 100200 string

//Example 2: implicit conversion
// Number - string.
// in below example it will convert string into number
var result2 = 400 - "200"
console.log(result2, typeof result2)
// 200 number


console.log("#############################")
// Add boolean with number
let bresult = true + 10 // true = 1, false = 0
console.log(bresult, typeof bresult) // 11 number



console.log("#############################")
// implicit conversion.

// string into number
var str1 ="654"
var n1 = Number(str1)
console.log(n1,":",  typeof n1) // 654 : number


var str2 = "abc"
var n2 = Number(str2)
console.log(n2, typeof n2) // NaN number


console.log("##############################")
num1 = 8978897
s1 = String(num1)
console.log(s1, typeof s1)
console.log(s1 + "Hello")
// 8978897 string // 8978897Hello

// covert boolean into string.
v1 = true
s11 = String(v1)
console.log(s11, typeof s11, s11[1])
// true string r

