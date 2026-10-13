// 1. Arithmetic Operators
var num1 = 20
var num2 = 30
// Addition (+)
console.log("Addition of values:", num1+num2)

//subtraction (-)
console.log("Subtraction of values :", 100-num2)

// Multiplication (*)
console.log("Multiplication of values :", num1*num2)

//Division(/)
console.log("Division of values :", num1/5)

// Modulus(remainder) (%)
console.log("Remainder value :",num1%3)

// Exponential operator( Power operator)
console.log("square of num1 :", num1**2)
console.log("cube of 4 : 4*4*4 :", 4**3)


// (a+b)^2 = a^2 + b^2 + 2ab
var a = 10
var b = 20
var lhs = (a+b)**2
var rhs = a**2 + b**2 + 2*a*b
console.log("lhs output:", lhs) // lhs output: 900
console.log("rhs output :", rhs) // rhs output : 900


// 2. Assignment operators
// = : Assignment operator
var x = 3

// increase current value by 3
x += 3 // x = x + 3
console.log("x += 3  :", x) // x += 3  : 6


// decrease current value by 2
x -= 2 // x = x -2
console.log("x -= 2:", x) // x -= 2: 4

// multiply current value by 5
x *= 5 // x = x*5
console.log("x *= 5:", x) // x *= 5: 20

// divide current value 2
x /= 2 // x = x/2
console.log("x /= 2 :", x) // x /= 2 : 10

console.log("#######################################")
// logical operators

var a = 10
var b = 20
var c = "10"
var d = 20
// == (equal operator) : compare 2 variable value only and return output as true or false
console.log("a == b:",a == b) // a==b: false
console.log("a == c :", a == c) // a==c : true
console.log("b == d:", b == d) // b == d: true

// === strict equal operator (value + type of data)
console.log(" a=== b :", a === b) //  a === b : false
console.log(" a===c :", a === c) //   a === c : false
console.log("b === d:", b === d) //   b === d: true

// != : not equal operator
// !== : strict checking (value + type)
var p = 20
var q = 30
var r = "20"
var s = 30
console.log("p != r:", p != r) // p != r: false
console.log("p !== r:", p !== r) // p !== r: true
