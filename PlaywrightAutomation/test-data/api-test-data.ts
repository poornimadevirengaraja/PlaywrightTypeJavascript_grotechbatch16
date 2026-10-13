export const common_url = "https://api.restful-api.dev/objects"

export const Add_object_data = {
    request_body : {
                "name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }, 
    headers : { "Content-Type" : "application/json" }
}


export const update_object_data = {
    request_body : {
                "name": "Apple MacBook Pro 150",
                "data": {
                    "year": 2026,
                    "price": 2000.99,
                    "CPU model": "Intel Core i15",
                    "Hard disk size": "4 TB"
                }
            }, 
    headers : { "Content-Type" : "application/json" }
}





//////////////////////////////////////////////////
export const gorest_server = "https://gorest.co.in/"
export const get_all_user_url = `${gorest_server}/public/v2/users`
export const get_one_user_url = `${gorest_server}/public/v2/users/8649609`
export const Bearer_token = "533e0bfad0b84fcae2881e2bf4ad19ee56496695050405279c4bdd50a18046fe"
export const go_rest_headers = {Authorization: `Bearer ${Bearer_token}`}


export const dummyJSONURL = "https://dummyjson.com/auth/login"
export const dummyJONSData = {
        request_body : { 
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30, // optional, defaults to 60
    },
    headers: { 'Content-Type': 'application/json' }

}