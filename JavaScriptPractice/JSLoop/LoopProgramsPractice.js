
/*
*
* *
* * * 
* * * *
* * * * *
*/

for (var i = 1; i<=5; i++){ //i = 2  
    var temp = "" // 1  
    for (var j =1; j <=i; j++) { // j =1, 2
        // adding value of j into temp
        temp += " * " // 1 // temp = temp + " * "
    }
    console.log(temp)// 1
    temp = ""
}


console.log("#####################")

// * * * * *
// * * * * 
// * * *
// * * 
// *


for (var i=1; i<=5; i++) {// i = 1, 2, 3, 4, 5
    var temp = ""
    for (var j=1; j<=6-i; j++) // j(1 to 5), (1, 4), (1, 3), (1, 2) (1, 1)
     {
        //temp = temp + " " + j
        temp = temp + "* "

     }
     console.log(temp)
     temp = ""

}

/*
  * * *     i=1
*       *   i=2
*       *   i=3
*       *   i=4
*       *   i=5
  * * *     i=6
*/

for(var i=1; i<=6; i++) {
    var temp = ""
    for(var j =1; j<=5; j++) {
        if (i==1 || i == 6) {
            if (j == 1 || j == 5) {
                temp = temp + "   "
            } else {
                temp = temp + " * "
            }

        } else if (i >1 && i<6) {
            if (j == 1 || j == 5) {
                temp = temp + " * "
            } else {
                temp = temp + "   "
            }

        } else {
            temp = temp + " * "
        }


    }
    console.log(temp)
    temp = "  "

}


