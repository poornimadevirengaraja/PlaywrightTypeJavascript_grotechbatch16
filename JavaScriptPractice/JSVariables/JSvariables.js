
// var, let, const variables.


// var variable types
// -> it can be redeclare
// -> it can be re-assign
// -> it has function scope.

var a = 10
console.log("value of a :", a)
// var : keyword
// a : variable name
// 10 : value store in a variable.

var a = 20 // re-declare a variable44
console.log("value of a :", a)


// re-assign a value
a = 30
console.log("value of a :", a)


console.log("#############################################")
//##############################################
// let variables 
// -> It can not be re-declare
// -> we can re-assign value to let variable
// -> it has block scope

// declare let variable
let num = 100
console.log("value of num :", num)

//re-decalre let variable : Its not allowed
// let num = 20
// console.log("value of num:", num)
// SyntaxError: Identifier 'num' has already been declared

// re-assign value
num = 500
console.log("value of num :", num)


// it has block scope
if (true) {
    let username = "Rahul"
    var email = "rahul@gmail.com"
    console.log("value of username :", username)
    console.log("value of email :", email)
    // var username = "Nakul"
    // console.log("value of username :", username)

}


console.log("outside of block, value of email :", email)
// ReferenceError: username is not defined
// console.log("outside of block, value of username :", username)


console.log("#############################################")
// const variables
// -> It can not re-declare or re-assign
// -> we have to initialize the const variable
// -> it has block scope.

const AccNum = 67868787687
console.log("Account Number :", AccNum)

// TypeError: Assignment to constant variable.
// AccNum = 79879878
console.log("Account Number :", AccNum)

if(true) {
    var name = "Rohit"
    let age = 100
    const address = "Pune, Baner"
    console.log(name, age, address)
}
console.log("var name :", name)
//console.log("let age :", age) // ReferenceError: age is not defined
//console.log("const address :", address) // ReferenceError: address is not defined