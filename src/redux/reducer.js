//包含n个reducer函数的模块
<<<<<<< HEAD
import { ADDNAME, ADDAGE, GETBOLGLIST } from './actionType'
=======
import { ADDNAME, ADDAGE, GETBOLGLIST, WRITEBOLGLIST, UPDATEBOLGLIST, DELBOLGLIST } from './actionType'
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
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
    switch (action.type) {
        case GETBOLGLIST:
            return action.data
        default:
            return state
    }
}

<<<<<<< HEAD
=======
function writeBlogList(state = [], action) {
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

>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
export const finalReducer = combineReducers({
    addName,
    addAge,
    getBlogList,
<<<<<<< HEAD
=======
    writeBlogList,
    updateBlogList,
    delBlogList
>>>>>>> 3e734658b9f5d0385b93a57a4bc39df032d96e3f
})
