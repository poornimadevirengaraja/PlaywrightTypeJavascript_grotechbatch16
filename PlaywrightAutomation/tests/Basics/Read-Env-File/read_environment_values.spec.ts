import {test} from '@playwright/test'


test.describe("Read values from environment",() => {

    test("Read data from env", async()=> {
        console.log(process.env.BASE_URL)
        console.log(process.env.USERNAME_VALUE)
        console.log(process.env.PASSWORD_VALUE)
        console.log(process.env.ENV)
    })

})