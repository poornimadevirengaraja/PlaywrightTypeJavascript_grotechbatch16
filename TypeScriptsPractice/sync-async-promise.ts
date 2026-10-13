// Sync : when programs executes in sequence.
// Async : when programs executes in parallel.
// Promise : a way to handle asynchronous operations in JavaScript.

// sync behaviour where steps are executing in sequence.
/*
console.log("task1")
console.log("task2")
console.log("task3")
*/

//example for async behaviour.
console.log("step1")

setTimeout(()=> {
 console.log("step2")   
}, 5000);

console.log("step3")
console.log("step1")
//#########################################

// 4. What is a Promise?
// A Promise represents a value that will be available in the future.
// It has 3 states:
// 1.	Pending → Waiting
// 2.	Resolved (Fulfilled) → Success
// 3.	Rejected → Failed
