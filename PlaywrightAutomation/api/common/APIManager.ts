import { RestFulAPI } from "../api-classes/restfulAPI";
import { APIRequestContext } from "@playwright/test";
import {GoRestAPI} from '../api-classes/gorestAPI.ts'

export class APIManager {
    readonly request : APIRequestContext
    readonly restfulapi : RestFulAPI
    readonly gorestapi : GoRestAPI
    constructor(request: APIRequestContext) {
        this.request = request
        this.restfulapi = new RestFulAPI(this.request)
        this.gorestapi = new GoRestAPI(this.request)
    }
}