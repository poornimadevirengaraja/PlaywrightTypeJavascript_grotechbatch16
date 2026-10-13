//Q1 write a program to calculate some of all value in array.

function addValues(arr) {
    var sum = 0
    for (var val of arr) {
        sum += val // sum = sum + val
    }
    return sum 
}

var arrValue = [5, 7, 9, 2, 15, 6]
var output = addValues(arrValue)
console.log("result1 :", output)

var output2 = addValues([6, 8, 23, 45])
console.log("result2 :", output2)





var arr4 = [5, 6, 7, 8]
var sum = 0
    for (var val of arr4) {
        sum += val // sum = sum + val
    }
console.log(sum) 


console.log("####################################")
//Q2 write a proram to get combination of 2 number from array whose sum is 10.

//        i=0 j=1
var arr2 = [1, 4, 6, 7, 3, 8, 9, 2]
//output = [[1, 9], [4, 6], [7, 3], [8, 2]]

var output = []
for(var i=0; i<arr2.length; i++) {
    for (var j=i+1; j<arr2.length; j++) {
        if ((arr2[i] + arr2[j]) == 10) {
            output.push([arr2[i], arr2[j]])
        }
    }
}

console.log("output :", output)
// output : [ [ 1, 9 ], [ 4, 6 ], [ 7, 3 ], [ 8, 2 ] ]

console.log("####################################")
//Q3:  write a program to get square of all even values and cube of odd values
// from Array.

var arr3 = [4, 6, 7, 2, 3, 17, 25]
