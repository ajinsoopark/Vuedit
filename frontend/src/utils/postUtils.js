import axios from 'axios';

export const fetchAllPosts = () => {
   return axios.get('/posts/postswithinfo')
}
