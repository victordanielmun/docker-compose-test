import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        'Cache-Control': 'no-cache'
    }
})

export default axiosInstance