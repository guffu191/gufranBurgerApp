import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-ae1ce-default-rtdb.firebaseio.com/'
});

export default instance;