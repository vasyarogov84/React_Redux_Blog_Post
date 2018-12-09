import axios from 'axios';


export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'feetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const KEY = '?key=viktorgrom84';

export const listOfPosts = () => {
    const request = axios.get(`${ROOT_URL}/posts${KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export const createPost = (values, callback) => {
    const request = axios.post(`${ROOT_URL}/posts${KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    }
}

export const fetchPost = (id) => {
    const request = axios.get(`${ROOT_URL}/posts/${id}${KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    }
}


export const deletePost = (id, callback) => {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
} 