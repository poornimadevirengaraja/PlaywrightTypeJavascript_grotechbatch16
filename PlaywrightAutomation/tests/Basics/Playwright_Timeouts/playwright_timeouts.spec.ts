/*
- test timeout :
     - default timeout for each of the test cases is 30 sec.
     - within 30 sec each test cases execution has to complete.
     - we can update default timeout in config file timeout: 40_000
     - we can update the test timeout for one specific test cases
         test.setTimeout(50_000)
     
- assertion timeout or expect timeout
    - This timeout is required to assert any of the value 
    - user can specify the validation specific time
         expect(msg_locator).toBeVisible({timeout: 10_000})
    - Use can also specific the global assertion timeout for expect in config file
    -    export default defineConfig({expect: {timeout: 20_000}})

- global timeout : This is maximum time out to be specified to make
                   sure all test cases execution is completed
                   within given period of time.
                   - export default defineConfig({expect: {globalTimeout: 3_600_000,}})

- action timeout :  -> timeout required for each of the test step to perform certain action.
                    -> await page.locator('#confirmBtn').click({timeout: 10_000})
                    -> export default defineConfig({
                        use: {
                            actionTimeout: 10 * 1000,
                            navigationTimeout: 30 * 1000,
                        },
                        });

- navigation timeout -> Navigation time is the timeout taken website to load the page
- static wait timeout -> timeout there user has to wait till timeout is not completed.
              -> await page.waitForTimeout(30_000)
*/


import {expect, test} from '@playwright/test'

test.describe("handle Alerts ", async()=> {
    test("Simple Alert, Accept it", async ({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html", {
            timeout: 30_000 // navigation timeout
        })
        await page.waitForTimeout(30_000)
        page.on('dialog', async dialog => { console.log(dialog.message()) 
                        await dialog.accept();
    });
        await page.locator('#alertBtn').click()
    });


    test("Confirmation Alert, Accept it", async ({page})=> {
        test.setTimeout(50_000)
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        page.on('dialog', async dialog => { 
            console.log(dialog.message()) 
            await dialog.accept();
         });
        await page.locator('#confirmBtn').click({timeout: 10_000})
        const msg_locator= page.locator("#demo1")
        expect(msg_locator).toBeVisible({timeout: 10_000})
        const msg = await msg_locator.textContent()
        console.log(msg)
        expect(msg).toEqual("You pressed OK")

    });

    test("Confirmation Alert, dismiss it", async ({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        await page.waitForTimeout(5_000) // static wait to complete the task
        page.on('dialog', async dialog => { 
            console.log(dialog.message()) 
            await dialog.dismiss();
         });
        await page.locator('#confirmBtn').click()
        const msg = await page.locator("#demo").textContent()
        console.log(msg)
        expect(msg).toEqual("You pressed Cancel!")
    });

    test("Promt Alert, accept it", async ({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        page.on('dialog', async dialog => { 
            console.log(dialog.message()) 
            await dialog.accept("Harry");

         });
        await page.locator('#promptBtn').click()
        const msg = await page.locator("#demo").textContent()
        console.log(msg)
        expect(msg).toEqual("Hello Harry! How are you today?")
    });

    test("Promt Alert, dismiss it", async ({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        page.on('dialog', async dialog => { 
            console.log(dialog.message()) 
            await dialog.dismiss();

         });
        await page.locator('#promptBtn').click()
        const msg = await page.locator("#demo").textContent()
        console.log(msg)
        expect(msg).toEqual("User cancelled the prompt.")
    });
});
