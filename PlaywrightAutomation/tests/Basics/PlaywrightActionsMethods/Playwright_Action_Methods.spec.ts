import {test, expect} from '@playwright/test'

test.describe("Execute playwright action testcases", ()=> {
    test("Fill method to enter text", async ({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        var nameValue = "Rahul"
        var passwordValue = "user@123"
        var userField = page.getByPlaceholder("Enter username")
        var PassField = page.getByPlaceholder("Enter password")
        await userField.fill(nameValue)
        await PassField.fill(passwordValue)

        console.log(await userField.inputValue())
        console.log(await PassField.inputValue())


        // enter date to field // YYYY-MM-DD
        await page.locator("#datePicker").fill("2026-02-02")

        // Enter time to time field with 24 hr clock
        await page.locator("#timePicker").fill("18:15")

        // Enter date time in one go.
        await page.locator("#dateTimePicker").fill("2026-04-01T06:15")

    });

    test("Interact with checkboses and radio button", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const radioElem = page.getByRole("radio", {name: "Male", exact : true} ) 
        console.log(await radioElem.isChecked())
        await radioElem.check()
        console.log(await radioElem.isChecked())

         const FemailradioElem = page.getByRole("radio", {name: "Female", exact : true} ) 
        console.log(await FemailradioElem.isChecked())
        await FemailradioElem.check()
        console.log(await FemailradioElem.isChecked())

    })

     test("Select dropdown values", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const countryDD = page.locator("#country")
        await countryDD.scrollIntoViewIfNeeded()
        // select by value
        await countryDD.selectOption("india")
        // value by label
        await countryDD.selectOption({label: "USA"})
        // select value by indexing
        await countryDD.selectOption({index: 3})
        // select multiple values
        const multipleValues = page.locator("#skills")
        await multipleValues.selectOption(["Python", "Selenium", "Playwright"])
     });


     test("Click Operations", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")

        await page.getByRole("link", {name: "Dummy Page"}).click({modifiers: ["Control"]});

        //await page.getByRole("link", {name: "Dummy Page"}).click({modifiers: ["Shift"]});

        const tlink = page.getByRole("link", {name: "Tutorials"}).first()
        await tlink.hover()
        await page.waitForTimeout(3000)
        
     });


     test("Keyboard Action", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const UsernameField =  page.getByPlaceholder("Enter Username")
        await UsernameField.fill("facebookuser1@gmail.com")
        await UsernameField.press("Control+A")
        await UsernameField.press("Control+C")
        // Text area copy paste the values.
        const TextArea = page.locator("#address")
        await TextArea.clear()
        await TextArea.press("Control+V")


     });

     test("Option file using path of the file", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const UploadElem = page.locator("#fileUpload")
        await UploadElem.scrollIntoViewIfNeeded()
        await UploadElem.setInputFiles("E:\\Filesdata\\userinput.txt")

     })

     test("Download File", async({page})=> {
        await page.setViewportSize({width: 2020, height: 1200})
        await page.goto("https://sqatools.in/playwright-training-notes/")
        await page.waitForLoadState("domcontentloaded")
        const DonwloadPromise = page.waitForEvent("download");

        const downldBtn = page.getByRole("link", {name: "Download"}).first()
        downldBtn.scrollIntoViewIfNeeded()
        await downldBtn.click()
        const download = await DonwloadPromise;
        await download.saveAs("E:\\Filesdata\\batch16\\resume.pdf");
     })

    test("Download Python Package", async({page})=> {
        await page.goto("https://www.python.org/downloads/")
        const DownBtn = page.getByRole("link", {name : "Download Python install manager"})
        await DownBtn.click()
    })
     
});