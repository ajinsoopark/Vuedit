import axios from 'axios';

export const fetchPostComments = (postId) => {
    return axios.get(`/comments/posts/${postId}`);
}