import {test} from '../../fixtures/baseFixture.ts'

test.describe("Dummy Booking Test Cases", async()=> {
    test("Enter Passenger Details", async({ myPage })=> {
        await myPage.locator("#firstname").first().fill("Rahul")
        await myPage.locator("#firstname").last().fill("Gupta")
        await myPage.locator("#birthday").fill("2026-09-20")
        await myPage.locator("#male").check()
    })


    test("Enter Travel Details", async({ myPage })=> {
       await myPage.locator("#fromcity").fill("Mumbai")
        await myPage.locator("#destcity").fill("Delhi")
    })


    test("Enter Billing Details", async({ myPage })=> {
        await myPage.locator("#billing_name").fill("Raj")
        await myPage.locator("#billing_phone").fill("7987879878")
    })
})

