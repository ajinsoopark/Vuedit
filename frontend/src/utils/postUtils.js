import axios from 'axios';

export const fetchAllPosts = () => {
   return axios.get('/posts/postswithinfo');
}

export const fetchPost = (id) => {
    return axios.get(`/posts/${id}`);
}