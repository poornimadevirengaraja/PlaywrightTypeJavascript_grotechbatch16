
/*
if (condition) {
    block
} else {
    block
}

*/

var a = 100
var b = 101

console.log(a == b)

if (a == b) {
    console.log("Both values are equal")
} else {
    console.log("Values are not equal")
}


console.log("################################")
// program to check given number is even or odd
var num1 = 11
if (num1%2 == 0) {
    console.log("This is even number :", num1)
} else {
    console.log("This is odd number:", num1)
}

console.log("################################")
// program to check person eligibility to vote as per age
var age = 19
if (age >= 18) {
    console.log("Eligible to vote :", age)
} else {
    console.log("Not eligible to vote:", age)
}

console.log("################################")
/*
AND condition.

cond1 && cond2
true && false : false
false && true : false
false && false : false
true && true : true


OR condition.

cond1 || cond2
true || false : true
false || true : true
false || false : false
true || true : true

> : greater than
< : less than
>= : greater equal
<= : less equal
*/


// write a program to check given number are divisible by 3 and 5
var num2 = 30
if (num2%3 == 0 && num2%5 == 0) {
    console.log("Its divisible by both 3 and 5 :", num2)
} else {
    console.log("Its not divisible by both 3 and 5 :", num2)
}


console.log("##############################")
var num2 = 17
if (num2%3 == 0 || num2%5 == 0) {
    console.log("Its divisible by both 3 or 5 :", num2)
} else {
    console.log("Its not divisible by both 3 or 5 :", num2)
}


console.log("############## if- elseif - else ################")
/*
if (cond1) {
    code block
} else if (cond2) {
    code block
} else if (cond3) {
    code block
} else {
  code block    
}
*/
// program to find max value among three numbers.
var a = 50
var b = 70
var c = 70

if (a > b && a > c) {
    console.log("A has max value :", a)
} else if (b >a && b > c) {
    console.log("B has max value:", b)
} else if (c > a && c > b) {
    console.log("C has max value:", c)
} else {
    console.log("No one has max value")
}


console.log("################## Nested if condition #############")

/*
if (cond1) 
{
code block
    if (cond2) 
    {
        code block
    } else 
        {
        code block
        }
} 
        else 
    {
    code block
    }
*/


var round1 = "pass"
var round2 = "fail"
var round3 = "pass"

if (round1 == "pass")     
{
    console.log("1st round is clear")
    if (round2 == "pass") 
    {
        console.log("2nd round is clear")
        if (round3 == "pass") 
        {
            console.log("Congrats you are selected.")
        } 
        else 
        {
            console.log("Failed in 3rd round, try next time")
        }
    } 
    else 
    {
        console.log("Failed in 2nd round")
    }
} 
else 
{
    console.log("Failed in 1st round")
}

console.log("####################################")
// ternary operator
var num = 61
var result = (num%2 == 0) ? "Even": "Odd"
console.log("Result :", result)  