import axios from 'axios';

const baseURL = 'http://localhost:3001';

const instance = axios.create({
    baseURL,
});

export default instance;
