import { APIRequestContext } from "@playwright/test";
import { BaseAPI } from "../common/BaseAPI";
import * as APIdata from '../../test-data/api-test-data.ts'

export class GoRestAPI extends BaseAPI {
    constructor(request: APIRequestContext) {
        super(request)
    }

    async get_all_users() {
        const response = await this.get_method(
            APIdata.get_all_user_url, {}, APIdata.go_rest_headers
        )
        return response

    }



}