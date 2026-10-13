// Exception Handling in JavaScript
// Exception Handling : Exception handling in javaScript is used to manage runtime errors without
// stopping the stire program.

/*
try {
    code block
} catch(errors) {
 console.log(error) 
}

*/
// var a = 100
// var d = a + b
// console.log(d)
// console.log("Step completed")

function exceptionError(a) {
    try{
        var c = a + b
        console.log("output of c :", c)
    } catch(error){
        console.log("variable are not available")
        console.log(error.message) // b is not defined
        console.log(error.name)// ReferenceError
        
    }
    // code outside of exception.
    console.log("Execution Completed")
}


exceptionError(10)

console.log("############################################")
// exception handling with finally block.

function ExceptionwithFinally(a, b, g) {
    try {
        var c  = a + b
        console.log("result of c :", c)
        
        var d = 100
        var e = 400
        var f = d+ e + g
        console.log("Output of f")


    } catch(error) {
        console.log("Error in File :", error.name)
        console.log("Error message :", error.message)

    } finally {
        // finally block will alwasys execute,  even there is exception
        // or no exception in the code.
        var n = 10
        for(var i=1;i<=n; i++) {
            console.log(i, "*", n, ":", i*n)
        }
    }
}
ExceptionwithFinally()
ExceptionwithFinally(10, 20, 30)


// through error on condition basis
function ExceptionWithValues(values) {
    try {
        for(var val of values) {
            if (val > 10) {
                throw new Error("Value can not be more than 10")
            }
        }


    } catch(error) {
        console.log("Error in File :", error.name)
        console.log("Error message :", error.message)

    } finally {
        // finally block will alwasys execute, even there is exception
        // or no exception in the code.
        var n = 10
        for(var i=1;i<=n; i++) {
            console.log(i, "*", n, ":", i*n)
        }
    }
}

ExceptionWithValues([334, 55, 66, 1, 2, 4, 57])

console.log("##########################################")

function nestedException(values) {
    try {
        for(var val of values) {
            if (val > 10) {
                throw new Error("Value can not be more than 10")
            }
        }
        try {
                // innert try condition
                var d = 10/a
                var f = [50, 60, 70] -200
                console.log("value of d :", d)
                console.log("value of f :", f)

            } catch(error){
                console.log("Inner Error message :", error.message )
                console.log("Inner Error name :", error.name)

            }


    } catch(error) {
        console.log("Outer Error in File :", error.name)
        console.log("Outer Error message :", error.message)

    }
}

nestedException([14, 6, 7, 8, 2, 4])


console.log("##########################################")
// exception with login functionality

function login(username, password) {
    var dbUsername = 'user1@gmail.com'
    var dbPassword = 'User@12345' 
    try {
        if (username == dbUsername && password == dbPassword) {
            console.log("Login Successful")
        } else {
            throw new Error("Invalid Credentials")
        }

    } catch(error) {
        console.log("error name :", error.name)
        console.log("erro  message :", error.message)
    }
}

//login("user1@gmail.com", "User@12345")
login("user1@gmail.com", "User@123456")