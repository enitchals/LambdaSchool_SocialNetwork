import { combineReducers } from 'redux'
import {GET_USER,GET_POSTS} from '../actions'

const userReducer = (user=[],action) => {
    console.log('action', action);
    switch(action.type) {
        case GET_USER:
            return action.payload.data;
        default:
            return user;
    }
}

const postReducer = (posts=[],action) => {
    console.log('action', action);
    switch(action.type) {
        case GET_POSTS:
            return action.payload.data;
        default:
            return posts;
    }
}


const rootReducer = combineReducers({
    user: userReducer,
    posts: postReducer
});

export default rootReducer;