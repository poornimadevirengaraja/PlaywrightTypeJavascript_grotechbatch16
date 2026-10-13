
// base class/ parent class
class calculator {
    num1: number
    num2: number 
    constructor(Num1Value: number, Num2Value: number) { 
        this.num1 = Num1Value
        this.num2 = Num2Value

    }

    addition() {
        console.log("addition :", this.num1+this.num2)
    }

    multiplication() {
        console.log("multiplication from Parent class")
        console.log("multiply :", this.num1*this.num2)
    }
}

// derived class / child class
class MathOperation extends calculator {
    constructor(n1: number, n2:number) {
        super(n1, n2)
    }

    multiplication() {
        console.log("multiplication from child class")
        console.log("multiply :", this.num1*this.num2*10)
    }

    // subtract(n1:number, n2:number) {
    //     console.log("Subtraction :", n1-n2)
    // }

    // subtract(n1:number, n2:number, n2: number) {
    //     console.log("Subtraction :", n1-n2)
    // }
}

const objvalue = new MathOperation(30, 40)
objvalue.addition()
// method overriding: when parent class child class have same method with same number
// of parameter, than child class method will override the parent class method.
objvalue.multiplication()
// multiplication from child class
// multiply : 12000

// Method overloading : when a class have 2 method with same name but different parameters
// than it is called method overloading.
// But method overloading is not allowed in the typescript, as duplicate method name are not
// allowed.