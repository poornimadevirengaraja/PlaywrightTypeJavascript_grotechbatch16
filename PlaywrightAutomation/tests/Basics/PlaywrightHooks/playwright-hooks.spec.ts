import {test} from '@playwright/test'

test.describe("Playwright Hooks practice", ()=> {

    // Execute On Test suite level
    test.beforeAll(()=> {
        console.log("Test Suite execution started")
    })

    test.afterAll( () => {
        console.log("Test Suite execution completed")
    })

     // This hook will execute before each of the test case.
    test.beforeEach(()=> {
        console.log("Test execution started")
    })

    // This hook will execute after each of the test case.
    test.afterEach(()=> {
        console.log("Test execution completed")
    })

    

    test("Test case1", async({page})=> {
        console.log("Test case1 execution in progress")
    });

    test("Test case2", async({page})=> {
        console.log("Test case2 execution in progress")
    })

    test("Test case3", async({page})=> {
        console.log("Test case3 execution in progress")
    })

    test("Test case4", async({page})=> {
        console.log("Test case4 execution in progress")
    })
})