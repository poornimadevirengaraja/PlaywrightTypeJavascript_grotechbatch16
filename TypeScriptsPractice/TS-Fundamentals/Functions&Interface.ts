
function Addition(n1: number, n2: number): number {
    console.log("Addition of values :", n1+n2)
    return n1+n2

}

var result = Addition(30, 40) // Addition of values : 70
console.log("Result :", result)

console.log("####################")
// void : no return value from function
function greeting(msg: string): void {
    console.log(msg)
}

greeting("Good morning")


console.log("####################")
function Multiplication(a1:number, a2: number): number {
    return a1*a2

}

// number type value can not assign to string variable
// var result2: string = Multiplication(40, 60)
// console.log(result2)

var Arrfun = (v1: number, v2: number): number => {
    return v1*v2
}

console.log(Arrfun(20 ,30))

//Q1 : write a program to get all prime number from given array using arrow function
var arr1 = [6, 7, 8, 22, 13, 17 ,19, 23]

//Q2 : write a program to count the number of each charters types in the string.

var str1 = "Hello Learning Programing" 
var ArrowResult = (inputstr: string)=> {
    var output:any = {}
    for (var char of inputstr) {
        if (Object.hasOwn(output, char)) {
            output[char] += 1
        } else {
            output[char] = 1
        }
    }
    return output

}


console.log(ArrowResult(str1))

console.log("###############################")

interface UserData { name:string, email: string, phone: number, address: string}

const User1: UserData = {
    name: "Rahul",
    email: "rahul@gmail.com", 
    phone: 678687687,
    address: "Pune, viman nagar"
}

console.log(User1)

const User2: UserData = {
    name: "Rohit",
    email: "Rohit@gmail.com",
    phone: 756876758,
    address: "Mumbai, viman nagar"
    //city: "Mumbai"
}

console.log(User2.name)

for(var key in User2) {
    const var1 = key as keyof UserData
    console.log(key, User2[var1])

}


console.log("#################################")
const Numbers: {a: number, b: number, c:number} = {
    a: 100,
    b: 300, 
    c : 400
}

console.log(Numbers)


for (var data of Object.entries(Numbers)) {
    console.log(data)
}

for (var [k, v] of Object.entries(Numbers)) {
    console.log(k, ":", v)
}




console.log("########################################")
// write a program to update each value of object with their square

var DataValues = {
    p: 20,
    q: 30,
    r: 40,
}
const output:any = {}

for(var [key, val] of Object.entries(DataValues)) {
    // console.log(data)
    // output[data[0]] = data[1]**2
    output[key] = val**2
}
console.log("Output :", output)
