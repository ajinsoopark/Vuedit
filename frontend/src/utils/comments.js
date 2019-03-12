import axios from 'axios';

export const fetchPostComments = (postId) => {
    return axios.get(`/comments/posts/${postId}`);
}

export const fetchUserComments = (userId) => {
    return axios.get(`/comments/users/${userId}`);
}