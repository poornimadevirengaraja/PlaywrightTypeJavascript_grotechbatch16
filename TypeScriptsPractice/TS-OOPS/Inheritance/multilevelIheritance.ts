// multilevel inheritance.
// class A -> class B -> class C

class ABC {
    a1: number
    b1: number

    constructor(a1value: number, b1value:number) {
        this.a1 = a1value
        this.b1 = b1value
    }

    addition() {
        console.log("addition :", this.a1+this.b1)
    }

}
// where ever we setup inheritance between two classes, than parent class constructore
// has to initialise in the child class.

class XYZ extends ABC {
    x1: number
    constructor(x1value: number, a1value: number, b1value:number) {
        // super keyword represents the constructor of parent class.
        super(a1value, b1value)
        this.x1 = x1value
    }

    square() {
        console.log("square of x1 :", this.x1**2)
    }
}

class PQR extends XYZ {
    constructor(x1value: number, a1value: number, b1value:number) {
        super(x1value, a1value, b1value)
    }

    greeting() {
        console.log("Hello, we are learning TypeScript Fundamentals")
    }
}


// const childObj = new XYZ(10, 20, 30)
// // Access parent class method via child object
// childObj.addition()
// // Access child class method via child object
// childObj.square()

const obj3 = new PQR(40, 50, 60)
// access ABC class method.
obj3.addition()
// access xyz class method
obj3.square()
// access pqr class method
obj3.greeting()