
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
        console.log("multiply :", this.num1*this.num2)
    }
}

// derived class / child class
class MathOperation extends calculator {
    constructor(n1: number, n2:number) {
        super(n1, n2)
    }
}


const MathObj = new MathOperation(40, 50)
MathObj.addition()
MathObj.multiplication()