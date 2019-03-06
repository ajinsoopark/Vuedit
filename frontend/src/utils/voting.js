import axios from 'axios';

export const fetchPostVotes = (postId) => {
    return axios.get(`/votes/posts/${postId}`)
}