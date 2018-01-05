import { combineReducers } from 'redux'
import {GET_USER,GET_POSTS,GET_COMMENTS} from '../actions'

const userReducer = (user=[],action) => {
    switch(action.type) {
        case GET_USER:
            return action.payload.data;
        default:
            return user;
    }
}

const postReducer = (posts=[],action) => {
    switch(action.type) {
        case GET_POSTS:
            return action.payload.data;
        default:
            return posts;
    }
}

const commentReducer = (comments=[],action) => {
    switch(action.type) {
        case GET_COMMENTS:
            return action.payload.data;
        default:
            return comments;
    }
}


const rootReducer = combineReducers({
    user: userReducer,
    posts: postReducer,
    comment:commentReducer
});

export default rootReducer;