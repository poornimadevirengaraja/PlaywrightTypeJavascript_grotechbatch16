// function : function is block of code which is used to 
// perform a specific task. 
// It is reusable and can be called multiple times in a program. 
// Functions can take input parameters and return output values.

function Greeting(msg) {
    console.log(msg)
    console.log(msg[0], msg[1], msg[2], msg[3], msg[4])
}

// call function and provide parameter value
Greeting("Javascript")

// Pass by value : directly provide value to parameter.

// Greeting("Good Morning")
// Greeting("Learning JavaScript")
// Greeting("Good Evening")
// Greeting(567565)


// Pass by reference
var x = "India has best cricket team"
Greeting(x)


function addition(n1, n2, n3) {
    console.log("value of n1 :", n1)
    console.log("value of n2 :", n2)
    console.log("value of n3 :", n3)
    console.log("Addition :", n1+n2+n3)
    var result = n1+n2+n3
    console.log("add result :", result)
}

//addition(10, 20, 30)
//addition(20, 40) // Addition : NaN

a = 400
b = 500
c = 600
addition(a, b, c)

console.log("#################################")
function GetFactorial(num) {
    var fact = 1
    for(var i =num; i>0; i--) {
        fact *= i
    }
    console.log("Factorials of :", num, fact)
}

GetFactorial(5) // Factorials of : 5 120
GetFactorial(7) // Factorials of : 7 5040


console.log("#################################")
// function with default parameters.

function multiply(x1, x2=30) {
    console.log("multiplication of x1, x2:", x1, x2, x1*x2)
}

// x1 = 5 and default x2= 30 value
multiply(5)
// multiplication of x1, x2: 5 30 150

// x1 = 10 and override default x2= 20 value
multiply(10, 20)
// multiplication of x1, x2: 10 20 200

console.log("#########################################")
// function with return type value
function getSumValue(range) {
    var sum = 0
    for(var i=1; i<=range; i++) // 1, 10
    {
        sum = sum + i 
        // 0 + 1 = 1
        // 1 + 2 = 3
        // 3 + 3 = 6
    }
    return sum
 }


//  var output = getSumValue(10)
//  console.log("Output :", output)
//  // Output : 55

console.log("#########################################")
 // function with multiple return values

 function mathOperations(v1, v2, v3) {
    var add = v1 + v2
    var multiply = v2 * v3
    var division = v3/v1
    return [add,  multiply, division]

 }

<<<<<<< HEAD
//  var result2 = mathOperations(6, 7, 8)
//  console.log("Output :", result2)  // [ 13, 56, 1.3333333333333333 ]
=======
//var result2 = mathOperations(6, 7, 0)
//console.log("Output :", result2)  // [ 13, 56, 1.3333333333333333 ]
>>>>>>> 65b505af3f372c9c1941bc77cbb4839fb0c80452



function square(n) {
    console.log("square of n:", n, n**2)
}

//var arr1 = [4, 6, 7, 8, 9]

square(10)

var arr1 = [4, 6, 7, 8, 9]
for(var abc of arr1) {
    console.log(abc)
    square(abc)
}




//q1 write a program in function to check given is odd or even and return the output
//q2 write a program in function to all even values from 1 to 50.
//q3 write a program in function get all value which are divisible 5 and 7

console.log("##################################")
// arrow function : this function is an anonymous function that, does not have
//name, we can store function reference in variable and use it.
/*
(param)=> {
    code
    }

*/


var CubeValue = (num) => {
    return num**3
}

console.log(CubeValue(5))

// arrow function to get factorial of values
var Factorials = (n)=> {
    var fact = 1
    for(var i=n; i>0; i--) {
<<<<<<< HEAD
        fact *= i
=======
        fact = fact*i
>>>>>>> 65b505af3f372c9c1941bc77cbb4839fb0c80452
    }
    return fact

}



console.log(Factorials(5))
<<<<<<< HEAD
// var result = Factorials(5)
// console.log("factorial output :", result)
=======
//var result = Factorials(5)
//console.log("factorial output :", result)
>>>>>>> 65b505af3f372c9c1941bc77cbb4839fb0c80452



function add(n1, n2) {
    return n1+n2
}

 multi = (n1, n2) => {
    return n1*n2
}

function subtract(n1, n2) {
    return n1-n2
}

function division(n1, n2) {
    return n1/n2
}

function calculator(x1, x2, op) {
    if (op == 1) {
        console.log("addition :", add(x1, x2))
    } else if (op == 2) {
        console.log("multiplication :", multi(x1, x2))
    }
    else if (op == 3) {
        console.log("subtraction :", subtract(x1, x2))
    } else if (op == 4) {
        console.log("division :", division(x1, x2))
    }
}

calculator(20, 50, 2) // multiplication : 1000
calculator(20, 50, 1) // addition : 70
calculator(300, 50, 3) // subtraction : 250
calculator(20, 4, 4) // division : 5



console.log("###########################################")
// call back function : a function which is passed as an argument 
// to another function is called callback function.
function mainFunction(n, abc) {
    console.log(n)
    abc()
}

function square1() {
    console.log(2**2)
}

function greet() {
    console.log("good morning")
}

console.log("###########")
mainFunction(5, square1)
console.log("###########")
mainFunction(5, greet)
console.log("###########")
mainFunction(2, ()=> {
    console.log("---")
    for(var i=1; i<=10; i++) {
        console.log(i)
    }
});

console.log("########################")
// provide n number value to single paramters of function
function CheckNumberIsPositive(...num) {
    console.log(num)
    for (var val of num) {
        if(val > 0) {
            console.log(val)
        }
    }
}

CheckNumberIsPositive(4, -6, -7, 8, -12, 34)