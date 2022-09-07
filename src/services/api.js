import axios from 'axios';
import { applyAuthTokenInterceptor, clearAuthTokens, setAuthTokens } from 'axios-jwt';
const BASE_URL = 'http://localhost:8000/';


const requestRefresh = async (refresh) => {
   return await axios.post(`${BASE_URL}api/token/refresh/`, { 'refresh':refresh }).then( response => response.data.access).catch(err =>{
    if(err.code === 'ERR_BAD_REQUEST'){
        clearAuthTokens();
    }
   });
};

const http = axios.create({
    baseURL: BASE_URL,
})

applyAuthTokenInterceptor(http, { requestRefresh,header : "Authorization",headerPrefix : "Bearer " });

export async function fetchfeed() {
    return await http.get('posts/apifeed/');
}

export async function login(credentials) {
    return await axios.post(`${BASE_URL}api/token/`,credentials).then(token => {
        setAuthTokens({
            accessToken: token.data.access,
            refreshToken: token.data.refresh
        });
    });
}

export async function fetchProfile(id = null) {
    if (id)
        return await http.get('profile/apiprofile', { params: { token: id } });
    else
        return await http.get('profile/apiprofile');
}