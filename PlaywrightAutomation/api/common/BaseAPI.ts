import {APIRequestContext} from '@playwright/test'

export class BaseAPI {
    request: APIRequestContext
    constructor(request: APIRequestContext) {
        this.request = request
    }

    async get_method(url: string, request_body: any=null, headers: any=null) {
        request_body = request_body != null ? request_body : {}
        headers = headers != null ? headers : {}
        const response = await this.request.get(url , {
            data: request_body, headers: headers
        })
        console.log(await response.json(), response.status())
        return response

    }

    async post_method(url: string, request_body: any=null, headers: any=null) {
        request_body = request_body != null ? request_body : {}
        headers = headers != null ? headers : {}
        const response = await this.request.post(url , {
            data: request_body, headers: headers
        })
        console.log(await response.json(), response.status())
        return response

    }

    async put_method(url: string, request_body: any=null, headers: any=null) {
        request_body = request_body != null ? request_body : {}
        headers = headers != null ? headers : {}
        const response = await this.request.put(url , {
            data: request_body, headers: headers
        })
        console.log(await response.json(), response.status())
        return response

    }

    async patch_method(url: string, request_body: any=null, headers: any=null) {
        request_body = request_body != null ? request_body : {}
        headers = headers != null ? headers : {}
        const response = await this.request.patch(url , {
            data: request_body, headers: headers
        })
        console.log(await response.json(), response.status())
        return response
    }

    async delete_method(url: string, request_body: any=null, headers: any=null) {
        request_body = request_body != null ? request_body : {}
        headers = headers != null ? headers : {}
        const response = await this.request.delete(url , {
            data: request_body, headers: headers
        })
        console.log(await response.json(), response.status())
        return response

    }
}