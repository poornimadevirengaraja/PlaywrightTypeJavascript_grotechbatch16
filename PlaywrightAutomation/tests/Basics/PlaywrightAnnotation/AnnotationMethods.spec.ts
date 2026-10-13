import {test} from '@playwright/test';
var ENV = "PROD"

test.describe("PLaywright Annotation", ()=> {
    
    // unconditional skip
    test.skip("Test case1", ()=> {
        console.log("Test Case 1")
    })

    // conditional skip
    test("Test case2", ()=> {
        test.skip(ENV == "PROD", "feature is not available on PROD environment")
        console.log("Test Case 2")
    })

    // Add fix me marker :when automation code required some fixes
    test.fixme("Test cases3", ()=> {
        console.log("Test Case 3")
    })

    // add failure marker to test cases due to production issue
    test.fail("Test cases4", ()=> {
        console.log("Test Case 4")
    })

    test("Test cases5", ()=> {
        // it will increase total test timeout is equal to 3x
        test.slow()
        console.log("Test Case 5")
    })

    // when we execute it will only execute this test case.
    //  test.only("Test cases6", ()=> {
    //     // set focus on specific test case
    //     console.log("Test Case 6")
    // })

});