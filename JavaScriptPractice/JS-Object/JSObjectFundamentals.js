/*
- Object data type store values in key value pair.
- Object data is mutable in nature
- Object data does not contains duplicate keys
- Object data can contains duplicate values.
- Object store data in curly braces.
*/

const obj = {
    firstname: "Rohit",
    lastname: "Sharma",
    email : 'rohit@gmail.com',
    phone: 56757657656
}

console.log(obj)

// get specific info using key

console.log("firstname :", obj.firstname)
//firstname : Rohit

console.log("lastname :", obj['lastname'])
// lastname : Sharma

// Add new key pair to existing object
obj['address'] = 'Pune, Baner'
console.log(obj)

// {
//   firstname: 'Rohit',
//   lastname: 'Sharma',
//   email: 'rohit@gmail.com',
//   phone: 56757657656,
//   address: 'Pune, Baner'
// }


obj.country = "India"
console.log(obj)
// {
//   firstname: 'Rohit',
//   lastname: 'Sharma',
//   email: 'rohit@gmail.com',
//   phone: 56757657656,
//   address: 'Pune, Baner',
//   country: 'India'
// }

// remove data from object
delete obj.phone
console.log(obj)

// {
//   firstname: 'Rohit',
//   lastname: 'Sharma',
//   email: 'rohit@gmail.com',
//   address: 'Pune, Baner',
//   country: 'India'
// }

// duplicate keys are not allowed.
// if we add duplcate keys in the object it will consider only latest defined data.
var obj2 = {a: 123, b: 345, c: 345, a: 567}
console.log(obj2)
// { a: 567, b: 345, c: 345 }

// update existing value
obj2.a = 777
console.log(obj2)
// { a: 777, b: 345, c: 345 }

console.log("##########################")
var ITCompany = {
    HR: [
        {name: "Pooja", email: "Pooja@gmail.com", phone:5453543543},
        {name: "Rohi", email: "rohi@gmail.com", phone: 34543534534}
    ],
    Admin: {
             name: "Rohit", 
             email: "Rohit@gmail.com", 
             phone:243243242
          },
        
    Developement:  {
        Dev : {name: "Rakesh", age: 35, email: 'rakesh@gmail.com'},
        QA  : {name: 'Raghav', age: 23, email: 'raghav@gmail.com'}
    }
}

console.log(ITCompany.HR[0])
// { name: 'Pooja', email: 'Pooja@gmail.com', phone: 5453543543 }
console.log(ITCompany.HR[0].phone) // 5453543543
console.log(ITCompany.Admin.name) // Rohit
console.log(ITCompany.Developement.QA.email) // raghav@gmail.com



console.log("##################### Methods ###################")

// keys and values : it returns array of keys and values from given object.
var obj3 = {a: 333, b: 444, c: 777, d: 234}
console.log("All keys :", Object.keys(obj3))
// [ 'a', 'b', 'c', 'd' ]
console.log("All values :", Object.values(obj3))
// [ 333, 444, 777, 234 ]

console.log("##########################")
//entries : this method return keys and values in a child array
var obj4 = {a: 333, b: 444, c: 777, d: 234}
console.log(Object.entries(obj4)) // [ [ 'a', 333 ], [ 'b', 444 ], [ 'c', 777 ], [ 'd', 234 ] ]

// Interate through all values of object
for (var data of Object.entries(obj4)) {
    console.log(data)
}

console.log("############################")
// write a program to calculate the total bill of fruits purched.

// Home work : update fruit invetory after puchasing the fruits.
var FruitInvetory = {Apple: 100, Banana: 200, Mango: 300, watermelon:150, lichhi: 500}


var FruitPrice = {Apple: 50, Banana: 30, Mango: 45, watermelon:60, lichhi: 70}
var FruitPurchased = {Apple: 10, Banana: 15, Mango: 5, watermelon:3, lichhi: 20}
var total_bill = 0

for (var [fruitName, FruitQuant] of Object.entries(FruitPurchased)) {
    //console.log(fruitName, FruitQuant)
    var FPrice = FruitPrice[fruitName]
    var Fbill = FPrice * FruitQuant
    console.log(fruitName, FruitQuant, FPrice, Fbill)
    total_bill = total_bill + Fbill
}

console.log("Total bill :", total_bill)
/*

Apple 10 50 500
Banana 15 30 450
Mango 5 45 225
watermelon 3 60 180
lichhi 20 70 1400
Total bill : 2755

*/

console.log("#######################################")
// Assign Method : combine multiple objects values and create new object.
var obj1 = {a: 111, b: 456}
var obj2 = {p: 333, q: 345}
var obj3 = {name: 'Rahul', age: 45}
const result = Object.assign({}, obj1, obj2, obj3)
console.log("result :", result)
// { a: 111, b: 456, p: 333, q: 345, name: 'Rahul', age: 45 }

console.log("#######################################")
// object.Freeze method : this method prevent modification(add/update/remove) in the object.
const Employee = {
    empName: 'Chandan',
    empID: 5435,
    empEmail: 'Chandan@gmail.com'

}

Object.freeze(Employee)
Employee.address = "Pune, Bane"
// console.log(Employee)
// Cannot add property address, object is not extensible

console.log("#######################################")
// object.seal() method : Allows updating the existing proeprties and prevent add/remove data from data type.
const EmployeeNew = {
    empName: 'Chandan',
    empID: 5435,
    empEmail: 'Chandan@gmail.com'

}
Object.seal(EmployeeNew)
// update existing value
EmployeeNew.empID = 'Emp-567576'

console.log(EmployeeNew)
/*
{
  empName: 'Chandan',
  empID: 'Emp-567576',
  empEmail: 'Chandan@gmail.com'
}
*/

EmployeeNew.address = "Mumbai, BKC"
console.log(EmployeeNew)
//  Cannot add property address, object is not extensible

console.log("##########################################")
//hasOwn:  this check specific key is available in the object or not
// it will return True if exist else return false

var obj1 = {a: 123, b: 567, c: 789}
console.log(Object.hasOwn(obj1, 'a')) // true
console.log(Object.hasOwn(obj1, 'd')) // false


