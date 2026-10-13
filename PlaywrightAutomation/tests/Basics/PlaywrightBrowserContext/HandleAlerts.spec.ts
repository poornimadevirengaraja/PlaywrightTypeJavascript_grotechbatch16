import {expect, test} from '@playwright/test'

test.describe("handle Alerts ", async()=> {
    test("Simple Alert, Accept it", async ({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        page.on('dialog', async dialog => { console.log(dialog.message()) 
                        await dialog.accept();
    });
        await page.locator('#alertBtn').click()
    });


    test("Confirmation Alert, Accept it", async ({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        page.on('dialog', async dialog => { 
            console.log(dialog.message()) 
            await dialog.accept();
         });
        await page.locator('#confirmBtn').click()
        const msg = await page.locator("#demo").textContent()
        console.log(msg)
        expect(msg).toEqual("You pressed OK")
    });

    test("Confirmation Alert, dismiss it", async ({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
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