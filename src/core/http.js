import axios from 'axios'

let baseUrl = process.env.NODE_ENV === 'development' ? '/api' : '/'
// let baseUrl = "/";

//   参数预处理函数
const prepareParams = function(params) {
    let newParams = {}
    if (params) {
        for (let key in params) {
            if (params[key] === '' || params[key] === null) {
                continue
            }
            newParams[key] = params[key]
        }
    }
    return params
}
//   请求成功
const onSuccess = function(response) {
    let res = JSON.parse(JSON.stringify(response))
    if (typeof response.data === 'object' && response.data !== null) {
        response.data.status = response.status
        response.data.__res__ = res
    } else {
        response.data = {
            status: response.status,
            __res__: res
        }
    }

    return response.data
}
//   请求失败
const onError = function(error) {
    if (error.response) {
        console.error('Status: ', error.response.status)
        console.error('Date: ', error.response.data)
        console.error('Headers: ', error.response.headers)
    } else {
        console.error('Error Message: ', error.message)
    }
    // return error
    return {
        status: error.response.status,
        msg: 'faild',
        error_message: error.response.data.error_message
    }
}

class HttpClient {
    constructor() {
        let httpClient = axios.create({
            baseURL: baseUrl,
            withCredentials: true
        })
        //   添加请求拦截器
        axios.interceptors.request.use(
            config => {
                //   在发送请求之前做些什么
                return config
            },
            function(error) {
                //   对请求错误做些什么
                return Promise.reject(error)
            }
        )

        //   添加响应拦截器
        axios.interceptors.response.use(
            response => {
                //   对响应数据做点什么
                return response
            },
            error => {
                //   对响应错误做点什么
                return Promise.reject(error)
            }
        )
        this.httpClient = httpClient
    }

    //  GET
    get(url, params, options) {
        return this.httpClient
            .get(url, {
                params: prepareParams(params),
                ...options
            })
            .then(onSuccess)
            .catch(onError)
    }

    //   POST
    post(url, params, options) {
        return this.httpClient
            .post(url, prepareParams(params), options)
            .then(onSuccess)
            .catch(onError)
    }

    //   PUT
    put(url, params, options) {
        return this.httpClient
            .put(url, (params = prepareParams(params)), options)
            .then(onSuccess)
            .catch(onError)
    }

    //   DELETE
    delete(url, params, options) {
        return this.httpClient
            .delete(url, {
                params: prepareParams(params),
                ...options
            })
            .then(onSuccess)
            .catch(onError)
    }
}

export default new HttpClient()
