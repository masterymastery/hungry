import { ADDNAME, ADDAGE, GETBOLGLIST, WRITEBOLGLIST, UPDATEBOLGLIST, DELBOLGLIST } from './actionType'
import { _getBlogList, _writeBlogList, _updateBlog, _deleteBlog } from '../service/blog'

//包含所有的action creator
export const addNameCreater = (name) => ({ type: ADDNAME, data: name })

export const addAgeCreater = (age) => ({ type: ADDAGE, data: age })

export const addNameAsync = (name) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(addNameCreater(name))
        }, 2000)
    }
}

export const getBlogList = (blogList) => ({ type: GETBOLGLIST, data: blogList })

export const getBlogListAsync = () => {
    return (dispatch) => {
        _getBlogList().then((res) => {
            dispatch(getBlogList(res.data.list))
        })
    }
}

export const writeBlogListAsync = (param) => {
    return _writeBlogList(param)
}

export const updateBlogListAsync = (param) => {
    return _updateBlog(param)
}

export const deleteBlogListAsync = (param) => {
    return _deleteBlog(param)
}
