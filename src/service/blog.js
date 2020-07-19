import http from '../core/http'

var options = {}
export function _getBlogList() {
    let api_url = `/blog/select`
    return http.get(api_url, {}, options)
}

export function _writeBlogList(params) {
    // debugger
    let api_url = `/blog/insert`
    return http.post(api_url, params, options)
}

export function _updateBlog(params) {
    let api_url = `/blog/update`
    return http.post(api_url, params, options)
}

export function _deleteBlog(params) {
    let api_url = `/blog/delete`
    return http.post(api_url, params, options)
}
