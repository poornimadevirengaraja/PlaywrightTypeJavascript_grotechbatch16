import {request, expect} from '@playwright/test';
import {test} from '@playwright/test'
import * as APITestData from '../../test-data/api-test-data'

test.describe("API Automation", ()=> {
    test("First Test Case", async({request})=> {
        const response = await request.get("https://api.restful-api.dev/objects")
        expect(response).toBeOK()
        const JSONResponse = await response.json()
        const statusCode = response.status()
        console.log(JSONResponse, statusCode)
        expect(JSONResponse.length).toBe(13)
        expect(statusCode).toBe(200)
    })

    test("Second Test Case: get specific ids details", async({request})=> {
        const response = await request.get("https://api.restful-api.dev/objects?id=3&id=5&id=10")
        expect(response).toBeOK()
        const JSONResponse = await response.json()
        const statusCode = response.status()
        console.log(JSONResponse, statusCode)
        expect(JSONResponse.length).toBe(3)
        expect(statusCode).toBe(200)
    })

    test("Test Case 3: Add new Object", async({request})=> {
        const response = await request.post(APITestData.common_url, {
            data: APITestData.Add_object_data.request_body,
            headers: APITestData.Add_object_data.headers
        })
        expect(response).toBeOK()
        const JSONResponse = await response.json()
        const statusCode = response.status()
        console.log(JSONResponse, statusCode)
        expect(JSONResponse.name).toBe(APITestData.Add_object_data.request_body.name)
        expect(statusCode).toBe(200)
    });

    test("Test Case 4: Update new Object data", async({request})=> {
        const response = await request.post(APITestData.common_url, {
            data: APITestData.Add_object_data.request_body,
            headers: APITestData.Add_object_data.headers
        })
        expect(response).toBeOK()
        const JSONResponse = await response.json()
        const statusCode = response.status()
        console.log(JSONResponse, statusCode)
        expect(JSONResponse.name).toBe(APITestData.Add_object_data.request_body.name)
        expect(statusCode).toBe(200)
        const newid = JSONResponse.id
        const updatedURL = `${APITestData.common_url}/${newid}`

        // hit put method to update the multiple field of the object
        const resp2 = await request.put(updatedURL, {
            data: APITestData.update_object_data.request_body,
            headers: APITestData.update_object_data.headers
        })
        expect(resp2).toBeOK()
        const respJSON = await resp2.json()
        const respStatus = resp2.status()
        expect(respJSON.name).toBe(APITestData.update_object_data.request_body.name)
        expect(respStatus).toBe(200)
        console.log("-------------- Updated details --------------")
        console.log(respStatus, respJSON)
    });

    test("Test Case 5: Patch new Object data, delete and verify", async({request})=> {
        const response = await request.post(APITestData.common_url, {
            data: APITestData.Add_object_data.request_body,
            headers: APITestData.Add_object_data.headers
        })
        expect(response).toBeOK()
        const JSONResponse = await response.json()
        const statusCode = response.status()
        console.log(JSONResponse, statusCode)
        expect(JSONResponse.name).toBe(APITestData.Add_object_data.request_body.name)
        expect(statusCode).toBe(200)
        const newid = JSONResponse.id
        const updatedURL = `${APITestData.common_url}/${newid}`

        // hit patch method to update the multiple field of the object
        const PatchResp = await request.patch(updatedURL, {
            data: APITestData.patch_object_data.request_body,
            headers: APITestData.patch_object_data.headers
        })
        const PatchRespoJSON = await PatchResp.json()
        const PatchStatus = PatchResp.status()
        console.log("------------Patch Response -------------")
        console.log(PatchRespoJSON, PatchStatus)
        expect(PatchRespoJSON.name).toBe(APITestData.patch_object_data.request_body.name)
        expect(PatchStatus).toBe(200)

        //  Delete object from server and verify
        const DeleteRepo = await request.delete(updatedURL)
        const DeleteRepoJSON = await DeleteRepo.json()
        const DelStatus = DeleteRepo.status()
        const ExpectedMsg = `Object with id = ${newid} has been deleted.`
        console.log("-----------------Delete Response --------------")
        console.log(DeleteRepoJSON, DelStatus)
        expect(DeleteRepoJSON.message).toBe(ExpectedMsg)
        expect(DelStatus).toBe(200)
    });

    test("get all users with token authentication", async ({request})=> {
        const response = await request.get(APITestData.get_all_user_url, {
            data: {},
            headers: APITestData.go_rest_headers
        });

        const responseJSON = await response.json()
        console.log(responseJSON)
        const RespStatus = response.status()
        console.log(RespStatus)
    });

    test("get one users with token authentication", async ({request})=> {
        const response = await request.get(APITestData.get_one_user_url, {
            data: {},
            headers: APITestData.go_rest_headers
        });

        const responseJSON = await response.json()
        console.log(responseJSON)
        const RespStatus = response.status()
        console.log(RespStatus)
    });

    test("create new entry with basic authentication", async ({request})=> {
        const response = await request.post(APITestData.dummyJSONURL, {
            data: APITestData.dummyJONSData.request_body,
            headers : APITestData.dummyJONSData.headers
           });
        const respJSON = await response.json()
        const status = response.status()
        console.log(respJSON, status)
    });
});