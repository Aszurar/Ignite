import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.163:19013',
});

export {api};