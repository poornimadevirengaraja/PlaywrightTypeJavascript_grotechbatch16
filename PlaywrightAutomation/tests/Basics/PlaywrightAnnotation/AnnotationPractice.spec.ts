import {test, expect} from '@playwright/test'

test.describe("PLaywright Annotation", ()=> { 
    test("Test case1", { tag: "@smoke" }, async({page, browser, browserName})=> {
         test.info().annotations.push({ type: 'browser version', description: browser.version()});
         test.info().annotations.push({ type: 'browser name', description: browserName})
         test.info().annotations.push({ type: 'Issue', description: "https://JIRA-8687"}) 

         await test.step("Launch URL", async()=> {
            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         });

         await test.step("Enter Credentials", async()=> {
            await page.getByPlaceholder("Username").fill("Admin")
            await page.getByPlaceholder("Password").fill("admin123")
            await page.getByRole('button', {name: "Login"}).click()
         });

         await test.step("Verify login successful", async()=> {
            await expect(page.getByRole("heading", {name: "Dashboard"})).toBeVisible()
            
         });
    });


    test("Test case2", { tag: "@smoke" }, async({page, browser, browserName})=> {
         test.info().annotations.push({ type: 'browser version', description: browser.version()});
         test.info().annotations.push({ type: 'browser name', description: browserName})
         test.info().annotations.push({ type: 'Issue', description: "https://JIRA-8687"}) 

         console.log("Test Case2")
    });

    test("Test case3", { tag: "@sanity" }, async({page, browser, browserName})=> {
         test.info().annotations.push({ type: 'browser version', description: browser.version()});
         test.info().annotations.push({ type: 'browser name', description: browserName})
         test.info().annotations.push({ type: 'Issue', description: "https://JIRA-8687"}) 

         console.log("Test Case3")
    });

    test("Test case4", { tag: "@sanity" }, async({page, browser, browserName})=> {
         test.info().annotations.push({ type: 'browser version', description: browser.version()});
         test.info().annotations.push({ type: 'browser name', description: browserName})
         test.info().annotations.push({ type: 'Issue', description: "https://JIRA-8687"}) 

         console.log("Test Case4")
    });


    test("Test case5", { tag: "@regression" }, async({page, browser, browserName})=> {
         test.info().annotations.push({ type: 'browser version', description: browser.version()});
         test.info().annotations.push({ type: 'browser name', description: browserName})
         test.info().annotations.push({ type: 'Issue', description: "https://JIRA-8687"}) 

         console.log("Test Case5")
    });

    test("Test case6", { tag: "@regression" }, async({page, browser, browserName})=> {
         test.info().annotations.push({ type: 'browser version', description: browser.version()});
         test.info().annotations.push({ type: 'browser name', description: browserName})
         test.info().annotations.push({ type: 'Issue', description: "https://JIRA-8687"}) 

         console.log("Test Case6")
    });


});