// if want to execut any cetain task n number of times we can use loop in javascript
/*
for(conditio) {
    console.log(meesage)
}
*/

// program to print value from 1 to 10
for(let i=1; i<=10; i++) {
    console.log("value of i:", i)
}

console.log("###############################")
// program to print table of any given value.
var num=5
for(var j=1; j<= 10; j++) {
    console.log(j, "*", num, ":", j*num)
}


console.log("################################")
// if condition inside loop
// write a program to get all values which are divisible by 5 and 7.
for(var k=1; k<=100; k++) 
    {
if (k%5== 0 && k%7 == 0) {  
        console.log("the value is divisible by both 5 and 7:", k)
    }
}

// write a program to get all even number form 1o 50
// write a programt to sum of values from 1 to 10


console.log("################################")
// write a program to get all even number form 1 to 50
for(var i=1; i<=50; i++) {
    if (i%2 == 0) {
        console.log(i)
    }
    
}

console.log("################################")
// write a programt to sum of values from 1 to 10
var sum = 0
for(var i=1; i<=10; i++) {
    sum += i // sum = sum + i
    console.log(i, sum)
}

console.log("#############################################")
// nested for loop
// in nested loop condition for one single value of outer, entire inner loop is going to execute.
// outer loop
for(var i=1; i<=5; i++) { // i = 1, 2
    // inner loop
    console.log("address :i:", i)
    for (var j=1; j<=3; j++) { // j = 1, 2, 3
        console.log("package: j:", j)
    }
    console.log("________________________")
}



console.log("#############################################")
// write program to check given number is prime or not
// prime: the number can divide iby hiself or 1

var num=13
var prime = true
for (var i=2; i < num; i++) {  // i = 2
    console.log(i)
    if(num%i == 0){
        prime = false
        break
    } else  {
        continue
    }
}
if (prime == true) {
    console.log("This is prime Number:", num)
} else {
    console.log("This is not an prime number:", num)
}


//##################################
// while loop : this loop execute will until condition out true, once it is false it will auto terminate.
/*
while (condition) {
 code block
}
*/

// print value from 1 to 10 using while loop
var num = 0
while(num <=10) {
    console.log(num)
    num += 1
}



// generate a infinit loop using while

var n = 0
while(true) {
    n += 1
    console.log(n)
    if(n == 1000) {
        // break keyword will terminal loop
        break
    }
}



console.log("###################################")
//##################################
// do while loop : this loop will execute alteast once if condition is false
/*

do {
    code block
}.while (condition)

*/

var n1 = 15
do {
    console.log(n1)
    n1 -= 1
    if (n1== 0) {
        break
    }
} while (n1 <= 10)


console.log("###################################")
// for each loop apply on array value, to get each and apply some operation on it.
let arr = [4, 6, 7, 8, 22]
arr.forEach((a, b) =>{
    console.log(b, a, a**2)
})

/*
0 4 16
1 6 36
2 7 49
3 8 64
4 22 484

*/


