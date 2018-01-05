import axios from 'axios';
export const GET_USER= 'GET_USER';
export const GET_POSTS= 'GET_POSTS';

export const getUserDetails = () => {
    // Add the code for this action
    // let payload = {};
    const apiUrl = 'http://localhost:5000/friends';
    const userDetailRequest = axios.get(apiUrl)
    return {
        type: GET_USER,
        payload: userDetailRequest
    }
};

export const getPostDetails = () => {
    // Add the code for this action
    // let payload = {};
    const apiUrl = 'http://localhost:5000/friends';
    const getPostDetails = axios.get(apiUrl)
    return {
        type: GET_POSTS,
        payload: getPostDetails
    }
};


