import {test} from '../../fixtures/baseAPIFixture';
import { expect } from '@playwright/test';
import { RestFulAPI } from '../../api/api-classes/restfulAPI';

test.describe("Restful API Test cases", ()=> {
    test("Get all object", async({apiManager})=> {
        const resp = await apiManager.restfulapi.get_all_objects()
        const respJSON = await resp.json()
        const status = resp.status()
        console.log(respJSON, status)
        expect(respJSON.length).toBe(13)
        expect(status).toBe(200)
    })
})

