import axios from 'axios';
const baseurl = 'http://localhost:8000/';

export async function fetchfeed(){
return await axios.get(baseurl + 'posts/apifeed/');}