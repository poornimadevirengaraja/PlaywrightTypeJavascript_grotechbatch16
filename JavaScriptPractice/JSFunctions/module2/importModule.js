// import specific function
import {addition} from '../module1/MathOperation.js'

// import all modules with *
import * as MathOp from  '../module1/MathOperation.js'

console.log(MathOp)

addition(40, 70)
MathOp.multiplication(50, 4)
MathOp.subtract(500, 200)

console.log("URL :", MathOp.url)