import {test} from '@playwright/test'
import  { Utils } from '../../../utils/utilities.ts'

test.describe("Read excel data", async()=> {

    test("read excel and show in console", async()=> {
        const utils = new Utils()
        const filePath = "test-data/ExcelTestData.xlsx"
        const data = utils.readExcelFile(filePath)
        console.log(data)
    })
})