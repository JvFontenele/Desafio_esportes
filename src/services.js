import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://api-football-standings.azharimm.site"
});

export const api = {
    get(endpoint) {
        return axiosInstance.get(endpoint)
    }
};