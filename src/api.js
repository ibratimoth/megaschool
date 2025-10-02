import axios from 'axios';

const api = axios.create({
    baseURL: 'http://95.217.22.143:5008/api',
    withCredentials: true
})

export const createRequest = (data) => api.post('/', data);