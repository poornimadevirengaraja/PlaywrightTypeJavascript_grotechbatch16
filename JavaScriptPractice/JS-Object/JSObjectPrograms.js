// write a program to calculate average marks of each students from given details.

var school = {
    st1:  [55, 77, 88, 59, 34, 99],
    st2 : [85, 67, 86, 59, 56, 95],
    st3 : [87, 62, 81, 65, 34, 80],
    st4 : [80, 78, 86, 75, 56, 60],
    st5 : [81, 71, 82, 52, 51, 65]
}

for(var [stID, marks] of Object.entries(school)) {
    var sum = 0
    for(var mark of marks) {
        sum += mark
    }
    var average = sum/marks.length
    console.log("student ID :", stID, "Marks Average :", average)
}

console.log("#########################")

var obj1 = {a: 123, b: 234}
console.log(Object.entries(obj1))
for (var [p, q] of Object.entries(obj1)) {
    console.log(p, q)
}

console.log("#############################")
//Q1 write a program to update object values with condition
// if value is greater than 100 multiple by 5
// if value  is less than 100 multiple by 20
// update in output

obj1 = {
    a: 102,
    b: 30,
    c :400,
    d: 99,
    e: 35

}

//###################################################

// Q3. Hospital Patient Record
// Scenario
// Store patient information.

// Task
// Add diagnosis.
// Update room number.
// Remove discharge date.

// Input
const patient = {
    id: 501,
    name: "Emma",
    room: 102,
    dischargeDate: "15-Aug-2026"
};

// Expected Output

// Diagnosis Added
// Room Updated: 205
// Discharge Date Removed

//###################################################
// Q4 : write a program to increase the salary by 10 of employee if 
// experience greate than 5 yrs
// update the object details.

var empoyees = {
    emp1: {
        name: "Rahul",
        exp: 7,
        salary: 20000
    },
    emp2: {
        name: "Rohit",
        exp: 6,
        salary: 40000
    } , 

     emp3: {
        name: "Raghav",
        exp: 4,
        salary: 50000
    } , 

}

// ########################################
// Q5. Find the Employee with the Highest Salary
// Scenario

// A company stores employee details in an object. Find the employee who has the highest salary.

// Input
const employees = {
    emp1: { name: "John", salary: 55000 },
    emp2: { name: "Alice", salary: 72000 },
    emp3: { name: "David", salary: 68000 }
};
// Expected Output
// Highest Salary Employee:
// Alice
// Salary: 72000


// #################################

// 3. Merge Student Information
// Scenario

// Merge two student objects into one object.

// Input
const personal = {
    name: "Rahul",
    age: 21
};

const academic = {
    course: "B.Tech",
    marks: 88
};
// Expected Output
// {
//     name: "Rahul",
//     age: 21,
//     course: "B.Tech",
//     marks: 88
// }