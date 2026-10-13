var name: string = "Rahul";
let age: number = 35;
let email : string = "rahul123@gmail.com";
console.log(name,age, email);

//let address: number = "Pune, Baner balewadi"
//console.log(address)
//  Type 'string' is not assignable to type 'number'.

console.log("-------------------------------------")
// declare array datatype.

var Cities: string[] = ["Mumbai", "Pune", "Bangalore", "Chennai"]
console.log(Cities) // [ 'Mumbai', 'Pune', 'Bangalore', 'Chennai' ]

var PhonesNums: [number, string] = [789798798, 'JavaScript']
console.log(PhonesNums) // [ 789798798, 'JavaScript' ]


// any: it can accept any type of data.
var UserDetails:any = [45, 5.5, 'javaScript', true, null, [4, 5, 6]]
console.log(UserDetails) // [ 45, 5.5, 'javaScript', true, null, [ 4, 5, 6 ] ]


var IDs: [number, string, number, string] = [789, 'user01', 789789 , 'user02']
console.log(IDs)
console.log(IDs[0]) // 789
IDs.push(100)
console.log(IDs)


console.log("#################################################")

const UserDetailsObj: {firstname: string, lastname: string, age: number, address: string} = {
    firstname: "Mohit", lastname: "Sharma", age: 35, address: "Pune, Viman Nagar"
}

console.log(UserDetailsObj)
console.log(UserDetailsObj.firstname)
console.log(UserDetailsObj.lastname)


var Username = "Rahul"
console.log(Username)