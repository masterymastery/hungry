import http from '../core/http'

var options = {}
export function _getBlogList() {
    let api_url = `/blog/select`
    return http.get(api_url, {}, options)
}

export function _writeBlogList(params) {
    let api_url = `/blog/insert`
    var par = {
        title: params.title,
        contentType: params.contentType,
        coverPath: params.coverPath,
        intro: params.intro,
        content: params.content,
        createTime: params.createTime,
        publishType: params.publishType
    }
    return http.post(api_url, params, options)
}

export function _updateBlog(params) {
    let api_url = `/blog/update`
    var par = {
        id: params.id,
        title: params.title,
        contentType: params.contentType,
        coverPath: params.coverPath,
        intro: params.intro,
        content: params.content,
        createTime: params.createTime,
        publishType: params.publishType
    }
    return http.post(api_url, params, options)
}

export function _deleteBlog(params) {
    let api_url = `/blog/delete`
    var par = {
        id: params.id
    }
    return http.post(api_url, params, options)
}
