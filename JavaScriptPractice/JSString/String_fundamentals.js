// Notes : Reference : https://sqatools.in/javascript-string/
// Program Practice : https://sqatools.in/python-string-programs-exercises-examples/

var str1 = 'Hello'
var str2 = "We are Learning JavaScript"
console.log(str1, typeof str1) // Hello string
console.log(str2, typeof str2) // We are Learning JavaScript string

// concatenate string with plus operator
var result = str1 +", "+str2
console.log("result :", result)
// Hello, We are Learning JavaScript

// concatenate string with back tic
var num1 = 7878789
var result2 = `${str1} ${str2}, Number : ${num1}`
console.log("result2 :", result2)
// result2 : Hello We are Learning JavaScript


console.log("############################")
// Apply loop on string value

var strA = "JavaScript ABC"
// Apply loop with for of loop
for (var x of strA) {
    console.log(x)
}

/*
J
a
v
a
S
c
r
i
p
t
*/
console.log("##########################")
var varB = "Morning"
// Apply loop using in operator
// in operator get index position of each character from string.
for (var y in varB) {
    console.log(y, varB[y])
}

// 0 M
// 1 o
// 2 r
// 3 n
// 4 i
// 5 n
// 6 g


console.log("#####################")
// get length of string.
var varC = "Cricket"
var strLen = varC.length
console.log("total length :", strLen) // total length : 7

for(var i=strLen-1; i>=0; i--) {
    console.log(i, varC[i])
}

console.log("####################################")
// string Methods.
// toUpperCase() : It converts complete string in Upper case characters.
// toLowerCase() : It converts completed string into Lower case characters.

var VarD = "India WoN FirSt ODI"
console.log("Upper case Result :", VarD.toUpperCase())
// INDIA WON FIRST ODI
console.log("Lower case Result :", VarD.toLowerCase())

console.log("################")
// trim : It helps to remove trailing (from beginning and end of string) spaces from given string.
// trimStart : remove space from beginning of string.
// trimEnd : remove space from end of the string.
var s1 = "  Javascript Programming  "
console.log(s1)
console.log(s1.trim())
console.log(s1.trimStart())
console.log(s1.trimEnd())


console.log("################")
// includes : this method verify does target string contains sub string.
var s2 = "We have best cricket team"
console.log("check 'best' is available in string :", s2.includes("best"))
console.log("check 'WE' is available in string :", s2.includes("WE"))

console.log("################")
// indexof() : This method return index value of given char/substring.
var s3 = "Learning Programming"
console.log("Index of 'g' :", s3.indexOf('g'))
// Index of 'g' : 7

console.log("index of 'gra' :", s3.indexOf('gra'))
// index of 'gra' : 12

// if given substring is not available then it will return -1
console.log("index of 'WD' :", s3.indexOf('WD')) // -1


console.log("################################")
// slice(start, end)
//  this method return substring from long string.
//  output include start index value and exclude end index value.

var StrZ = "Javascript String"
var output2 = StrZ.slice(0, 10)
console.log("output2 :", output2) 

// default end index is end of the string.
var output3 = StrZ.slice(11)
console.log("output3 :", output3) // String


var strK = "Hello"
// 0  1  2  3  4
// H  e  l  l  o
//-5 -4 -3 -2 -1
console.log("output :", strK.slice(-3)) // llo




console.log("################################")
// replace(word1, word2) : This method replace one word with another from target string.

var strT = "JAVA We are Learning JAVA Fundamentals  JAVA"
console.log("output :", strT.replace('JAVA', 'JavaScript'))
// JavaScript We are Learning JAVA Fundamentals  JAVA

// replaceAll : this method replace all occurrences from targe string.
console.log("output :", strT.replaceAll("JAVA", "JAVAScript"))
// JAVAScript We are Learning JAVAScript Fundamentals  JAVAScript

console.log("output :", strT.replaceAll("Python", "JAVAScript"))
// JAVA We are Learning JAVA Fundamentals  JAVA

console.log("################################")
// split(): method will split the string from any delimeter or character, and return as array value.
var S1 = "a-b-c-d"
console.log("output :", S1.split("-"))
//  [ 'a', 'b', 'c', 'd' ]

var S2 = "Learning Programming is Fun"
console.log("output :", S2.split(" "))
// [ 'Learning', 'Programming', 'is', 'Fun' ]
var result = S2.split(" ")
for(var val of result) {
    console.log(val)
}

/*
Learning
Programming
is
Fun

*/

console.log("################################")
// concat() : this method join 2 words.
var E1 = "Hello"
var E2 = "JavaScript"
var E3 = "Mumbai"

var output = E1.concat(" ", E2, " ", E3) // Hello JavaScript Mumbai
console.log("output:", output) //  Hello JavaScript
// JavaScriptJavaScriptJavaScriptJavaScriptJavaScriptJavaScriptJavaScriptJavaScriptJavaScriptJavaScript

// repeat method : to repeat string n number times.
console.log(E2.repeat(10))



// ASCII KEYS
// 65-90 : capital letter (A-Z)
// 97-122: small case (a-z)

console.log("Ascii value of A:", "A".charCodeAt(0)) // Ascii value of A: 65
console.log("Ascii value of B:", "B".charCodeAt(0)) 
console.log("Character with ASCII Value B:", String.fromCharCode(66))
console.log("Character with ASCII Value a:", String.fromCharCode(97))

//  Character with ASCII Value : B
var temp = ""
for (var i=65; i<= 90; i++ ) {
    temp += String.fromCharCode(i)
    console.log(String.fromCharCode(i))
}
console.log(temp) // ABCDEFGHIJKLMNOPQRSTUVWXYZ


// var str1 = Date("2026-07-02")
// console.log(str1.valueOf())

