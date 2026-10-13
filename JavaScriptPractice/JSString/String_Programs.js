//Q : write a program to count total number of vowels in given string.

var str1 = "We are Learning JavaScript FundAmEntAls"
var vowels = "aeiou"
var count = 0

for(var char of str1) {
    if (vowels.includes(char.toLowerCase())) {
        count += 1
    } else {
        continue
    }

}

console.log("Total vowels :", count)

console.log("###############################")
//Q2 : write a program to remove duplicate words from given string.
var str2 = "Rohit Rahul Ram Raghav Ravi Rohit Rahul Ravi"
// output = "Rohit Rahul Ram Ragahv Ravi"

// split and get array of words.
var words = str2.split(" ")
console.log(words)
var output = "" //  Rohit Rahul Ram Raghav Ravi

for(var word of words) {
    console.log(word)
    if (output.includes(word)) {
       continue
    } else {
        output = output + " " + word 
    }
}
console.log("Output :", output)

console.log("###############################")
// Q3 : write a program to remove duplicate characters from given string.
var str2 = "We are Learning Javascript"
var output = ""
for (var char of str2) {
    if (output.includes(char)) {
        continue
    } else {
        output = output + char
    }
}

console.log("remove duplicate characters :", output)
// We arLnigJvscpt


console.log("###############################")
// Q4 : write a program to get longest word from given string.
var str4 = "Learning Javascript is Fun, Its EasyToLearn"
var longWord = "" // Learning  Javascript
var words = str4.split(" ")
for (var word of words) {
    console.log(word)
    if (word.length > longWord.length) { // 8 > 0 | 11 > 8
        longWord = word // Learning, Javascript
    } else {
        continue
    }
}

console.log("Longest word :", longWord) //  Javascript


console.log("###############################")
// write a program to find out the emails available in given string.

var UserInputs = "With the likes of Rohit, Kohli@gmail.com and Root@yhoo.com batting under the bright Lord's sun, it felt wonderfully retro at times, but there was enough funk@testuser.com and enough runs at play to make it a thoroughly "
for(var word of UserInputs.split(" ")) {
    if (word.includes("@")) {
        console.log(word)
    } else {
        continue
    }

}


//Q1. write a program to repeat first and last character of each word 2 times.
var str1 = "Talking Points Rohit answers"
//output = "TTalkingg PPointss RRohitt aanswerss"

//Q2. write a program to change upper of all words whose length is even.
var str2= "Talking Points : Rohit answers, Root endures, and India ponder balance"
// output = "Talking POINTS : Rohit answers, ROOT endures, and India PONDER balance"


//Q3:  write a program to get square of all even values and cube of odd values

// from Array.

var arr3 = [4, 6, 7, 2, 3, 17, 25]
var output=[]

for(var i=0;i<arr3.length;i++)
{
 if(arr3[i]%2==0)
   
    {
        output.push(arr3[i]**2)
    }
    else{
        output.push(arr3[i]**3)
    }
}
console.log(output)

//substring in a string.
var input = "Rohit Ram Rahul Ram Raghav Ravi Rohit Ram Rahul Ravi Ram Rahul Ramu"
var input1 = input.split(" ")
console.log(input1)
var count = 0
var name = "Ram"
for (var word of input1) {
    if (word.includes(name)) {
        count += 1
    }
}

console.log(count)

console.log("################################")
//var abc:string = "Hello"


