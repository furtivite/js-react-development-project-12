import axios from 'axios';

export const login = async (username, password) => {
    const response = await axios.post('/api/v1/login', { username, password });
    return response.data.token;
};