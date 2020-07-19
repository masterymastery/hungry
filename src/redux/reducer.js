//包含n个reducer函数的模块
import { ADDNAME, ADDAGE, GETBOLGLIST, WRITEBOLGLIST, UPDATEBOLGLIST, DELBOLGLIST } from './actionType'
import { combineReducers } from 'redux'

function addName(state = 'initRedux', action) {
    //形参默认值
    switch (action.type) {
        case ADDNAME:
            return action.data
        default:
            return state
    }
}
function addAge(state = 0, action) {
    switch (action.type) {
        case ADDAGE:
            return action.data
        default:
            return state
    }
}

function getBlogList(state = [], action) {
    // debugger
    switch (action.type) {
        case GETBOLGLIST:
            return action.data
        default:
            return state
    }
}

function writeBlogList(state = [], action) {
    // debugger
    switch (action.type) {
        case WRITEBOLGLIST:
            return action.data
        default:
            return state
    }
}
function updateBlogList(state = [], action) {
    switch (action.type) {
        case UPDATEBOLGLIST:
            return action.data
        default:
            return state
    }
}
function delBlogList(state = [], action) {
    switch (action.type) {
        case DELBOLGLIST:
            return action.data
        default:
            return state
    }
}

export const finalReducer = combineReducers({
    addName,
    addAge,
    getBlogList,
    writeBlogList,
    updateBlogList,
    delBlogList
})
