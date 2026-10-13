// Encapsulation : It involves the hiding the internal data and implimentation details
// or modules, class, property , attribute. this help to improve the code recurity
// maintainability, and modularity and preventing unauthorised access.

// Access Modifiers:
// Public : variable and methods are accessible inside or outside of the class.
// Protected : Variable/methods are accessible within class or its child class.
// Private : Variable/methods are accessible only within the class.



// base class/ parent class
class calculator {
    public num1: number
    protected num2: number 
    private num3: number
    constructor(n1: number, n2: number, n3: number) { 
        this.num1 = n1
        this.num2 = n2
        this.num3 = n3

    }

    public addition() {
        console.log("addition :", this.num1+this.num2)
    }

    protected multiplication() {
        console.log("multiply :", this.num1*this.num2)
    }

    private subtraction() {
        console.log("subtraction :", this.num3- this.num1)
    }
}

// derived class / child class
class MathOperation extends calculator {
    constructor(n1: number, n2:number, n3: number) {
        super(n1, n2, n3)
    }

    allVariables(){
        console.log("Public variable :", this.num1)
        console.log("Protected variable :", this.num2)
        //console.log("Private variable :", this.num3)
        // Property 'num3' is private and only accessible within class

    }
}

const object = new MathOperation(30, 40, 60)
object.addition()
// protected method can not access outside the class
//object.multiplication()
// Property 'multiplication' is protected and only accessible within class 'calculator' and its subclasses
// private method can not access outside the class

//object.subtraction()
// Property 'subtraction' is private and only accessible within class 'calculator'
