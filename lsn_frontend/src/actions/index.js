import axios from 'axios';
export const GET_USER= 'GET_USER';
export const GET_POSTS= 'GET_POSTS';
export const ADD_POSTS= 'ADD_POSTS';
export const GET_COMMENTS='GET_COMMENTS'

export const getUserDetails = (id) => {
    // Add the code for this action
    // let payload = {};
    const apiUrl = `http://471e2504.ngrok.io/users/${id}`;
    const userDetailRequest = axios.get(apiUrl)
    return {
        type: GET_USER,
        payload: userDetailRequest
    }
};

export const getPostDetails = (id) => {
    // Add the code for this action
    // let payload = {};
    const apiUrl = `http://471e2504.ngrok.io/posts/${id}`;
    const getPostDetails = axios.get(apiUrl)
    return {
        type: GET_POSTS,
        payload: getPostDetails
    }
};

export const addPostDetails = (obj) => {
    // Add the code for this action
    // let payload = {};
    const apiUrl = `http://471e2504.ngrok.io/posts/`;
    const addPostDetails = axios.post(apiUrl,obj)
    return {
        type: ADD_POSTS,
        payload: addPostDetails
    }
};