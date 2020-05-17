import http from '../core/http'

var options = {}
export function _getBlogList() {
<<<<<<< HEAD
    console.log(123)
=======
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
    let api_url = `/blog/select`
    return http.get(api_url, {}, options)
}

<<<<<<< HEAD
export function addBlogList(params) {
=======
export function _writeBlogList(params) {
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
    let api_url = `/blog/insert`
    var par = {
        title: params.title,
        contentType: params.contentType,
        coverPath: params.coverPath,
        intro: params.intro,
        content: params.content,
        createTime: params.createTime,
<<<<<<< HEAD
        publishType: params.publishType,
=======
        publishType: params.publishType
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
    }
    return http.post(api_url, params, options)
}

<<<<<<< HEAD
export function updateBlog(params) {
=======
export function _updateBlog(params) {
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
    let api_url = `/blog/update`
    var par = {
        id: params.id,
        title: params.title,
        contentType: params.contentType,
        coverPath: params.coverPath,
        intro: params.intro,
        content: params.content,
        createTime: params.createTime,
<<<<<<< HEAD
        publishType: params.publishType,
=======
        publishType: params.publishType
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
    }
    return http.post(api_url, params, options)
}

<<<<<<< HEAD
export function deleteBlog(params) {
    let api_url = `/blog/delete`
    var par = {
        id: params.id,
=======
export function _deleteBlog(params) {
    let api_url = `/blog/delete`
    var par = {
        id: params.id
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
    }
    return http.post(api_url, params, options)
}
