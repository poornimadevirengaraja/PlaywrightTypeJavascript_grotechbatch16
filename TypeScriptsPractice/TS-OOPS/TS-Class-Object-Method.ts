// class : Class is nothing but the blueprint of the object where
//          we declare all properties, methods, attributes in the class.

// object : Object is an entity through which we can access all attribute, properties
//          methods declared in the class.

// method : when we declare a function inside the class, then it is called
 //           method.


class XYZ {
    // Method1
    greeting(msg: string) {
        console.log(msg)
        
    }

    // Method2
    addition(n1: number, n2:number) {
        console.log("add output :", n1+n2)
    }

    // Duplicate methods are not allowed.
    //  addition(n1: number, n2:number, n3: number) {
    //     console.log("add output :", n1+n2)
    // }
} 

// create object of the class
var obj1 = new XYZ()
// call method using object
obj1.greeting("Good Evening") // Good Evening

//XYZ().greeting("Hello Good Morning")

obj1.addition(40, 50)