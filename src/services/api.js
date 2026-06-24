import axios from 'axios';
const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    headers: {
        'x-api-key': 'live_21LGk8F4H77CUBpLdMuHJwDRwX44W2QXedRZlPMjV4ZEFyfChMVTBAqD2hjfn0XH'
    }
});
export default api;