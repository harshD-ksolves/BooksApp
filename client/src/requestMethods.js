import axios from "axios";

const BASE_URL="http://localhost:8000/";


const Token = localStorage.getItem("persist:root") && JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token;
export const publicRequest= axios.create({
    baseURL:BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${Token}` },
});