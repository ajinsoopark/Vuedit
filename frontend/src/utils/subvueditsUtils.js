import axios from 'axios';

export const fetchSubvuedit = (id) => {
    return axios.get(`/subvuedits/${id}`)
};

export const fetchAllSubvuedits = () => {
    return axios.get(`/subvuedits`)
}
