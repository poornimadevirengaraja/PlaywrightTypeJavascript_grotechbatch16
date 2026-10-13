import { BaseAPI } from "../common/BaseAPI";
import { APIRequestContext } from "@playwright/test";
import * as APIdata from '../../test-data/api-test-data.ts'

export class RestFulAPI extends BaseAPI {
    constructor(request: APIRequestContext) {
        super(request)
    }

    async get_all_objects() {
        const response = this.get_method(APIdata.common_url)
        return response
    }

    async get_one_specific_objects(id: number) {
        const updatedURL = `${APIdata.common_url}/${id}`
        const response = this.get_method(updatedURL)
        return response
    }

    async create_new_object() {
        const response = this.post_method(
            APIdata.common_url, 
            APIdata.Add_object_data.request_body,
            APIdata.Add_object_data.headers)
        return response
    }

     async update_new_object_details() {
        const postResp = await this.create_new_object()
        const new_id = (await postResp.json()).id
        const updatedURL = `${APIdata.common_url}/${new_id}`
        const response = this.put_method(
            updatedURL, 
            APIdata.update_object_data.request_body,
            APIdata.update_object_data.headers)
        return response
    }


}