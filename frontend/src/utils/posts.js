import axios from 'axios';

export const fetchAllPosts = () => {
   return axios.get('/posts/withinfo');
}

export const fetchPost = (id) => {
    return axios.get(`/posts/${id}`);
}

export const fetchSubvueditPosts = (subId) => {
    return axios.get(`/posts/subvuedits/${subId}`);
}

export const fetchUserPosts = (userId) => {
    return axios.get(`/posts/users/${userId}`);
}