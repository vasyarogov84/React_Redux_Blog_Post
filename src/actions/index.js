import axios from 'axios';


export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const KEY = '?key=viktorgrom84';

export const listOfPosts = () => {
    const request = axios.get(`${ROOT_URL}/posts${KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

 