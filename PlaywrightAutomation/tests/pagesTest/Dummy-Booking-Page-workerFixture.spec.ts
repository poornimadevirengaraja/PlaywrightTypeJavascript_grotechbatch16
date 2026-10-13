import {test} from '../../fixtures/baseFixture.ts'

test.describe("Dummy Booking Test Cases", async()=> {
    test("Enter Passenger Details", async({ workerPage })=> {
        await workerPage.locator("#firstname").first().fill("Rahul")
        await workerPage.locator("#firstname").last().fill("Gupta")
        await workerPage.locator("#birthday").fill("2026-09-20")
        await workerPage.locator("#male").check()
    })

    test("Enter Travel Details", async({ workerPage })=> {
       await workerPage.locator("#fromcity").fill("Mumbai")
        await workerPage.locator("#destcity").fill("Delhi")
    })

    test("Enter Billing Details", async({ workerPage })=> {
        await workerPage.locator("#billing_name").fill("Raj")
        await workerPage.locator("#billing_phone").fill("7987879878")
    })
})

