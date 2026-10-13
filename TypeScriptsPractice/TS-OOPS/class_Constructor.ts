// constructor: It initiliaze the memory for the object, whenever we create object of the class

// 1. default constructor: this will execute by default whenever we create of object of
//                the class.

/*
 constructor() {
        console.log(" Welcome to Employee class")
    }
*/

// 2. Parametrize constructore: this will execute by default along with parameters provided
// to the constructor.
// when we provide parameters to constructor, then it is called parametrize constructor.
/*


*/
// types of method
//1. instance method : when we declare method inside the class, can be access using this keyword inside, 
// and access using object outside of the class, then it is called instance method.

//2. static method : static method is belongs to class name, no need to create object of the class
// to access static method. we have access static method using classname.

/*
static square(num: number) {
        console.log("Square output :", num**2)
    }
*/



export class Employee {
    // declare class properties
    name: string
    email: string
    salary: number
    address: string = "Mumbai, Boriwali"
    constructor(Empname: string, EmpEmail: string, EmpSalary: number) {
        //console.log("Welcome to Employee class")
        // initilize the property inside constructor
        this.name = Empname
        this.email = EmpEmail
        this.salary = EmpSalary

    }

    // instance method
    WelcomeEmployee() {
        console.log("Welcome to Employee class :")
    }

    // instance method
    EmployeeDetails() {
        this.WelcomeEmployee()
        console.log("Name :", this.name)
        console.log("Email:", this.email)
        console.log("Salary :", this.salary)
        console.log("Address :", this.address)
    }

    // static method belongs to class itself, no need to create object of the class
    // to access static method.
    static square(num: number) {
        console.log("Square output :", num**2)
    }
}

const Obj2 = new Employee("Raghav", "raghav@gmail.com", 500000)
// Obj2.EmployeeDetails()
// console.log("########################")
// console.log(Obj2.address)
// Obj2.name = "Rohit"
// console.log("name :", Obj2.name)

// access static method usign class object
//Obj2.square(50)// can not access with object


// access static method with name
Employee.square(5)