import axios from 'axios';
export const GET_USER= 'GET_USER';
export const GET_POSTS= 'GET_POSTS';
export const GET_COMMENTS='GET_COMMENTS'

export const getUserDetails = () => {
    // Add the code for this action
    // let payload = {};
    const apiUrl = 'http://471e2504.ngrok.io/users/5a4ed891bd2efe1318c7abb8';
    const userDetailRequest = axios.get(apiUrl)
    return {
        type: GET_USER,
        payload: userDetailRequest
    }
};

export const getPostDetails = () => {
    // Add the code for this action
    // let payload = {};
    const apiUrl = 'http://471e2504.ngrok.io/posts/5a4ed891bd2efe1318c7abb8';
    const getPostDetails = axios.get(apiUrl)
    return {
        type: GET_POSTS,
        payload: getPostDetails
    }
};

export const getCommentDetails = () => {
    // Add the code for this action
    const apiUrl = 'http://localhost:5000/friends';
    const getPostDetails = axios.get(apiUrl)
    return {
        type: GET_COMMENTS,
        payload: getCommentDetails
    }
};


