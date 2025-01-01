import axios from "axios";

export const api = axios.create({
    baseURL:  'https://plannermongodb.onrender.com'
})
