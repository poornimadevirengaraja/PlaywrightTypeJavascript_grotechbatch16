import {test} from '../../fixtures/baseAPIFixture.ts'
//import { expect } from '@playwright/test'

test.describe("Go Rest API Test cases", ()=> {
    test("Get all users and verify", async({ apiManager }) => {
        const response = await apiManager.gorestapi.get_all_users()
        const respoJSON = await response.json()
        const status = response.status()
        console.log(respoJSON, status)

    });

});