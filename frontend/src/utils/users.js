import axios from 'axios';

export const fetchUser = (id) => {
    return axios.get(`/users/${id}`);
}