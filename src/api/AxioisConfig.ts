import axios from "axios";
import CONNECTION_STRING from "../constants/connectionString";
import { RefreshToken } from "./Auth";

export const api = axios.create({
    baseURL: CONNECTION_STRING,
});

api.interceptors.response.use(
    (response) => {
        processStatus(response.status);

        return response;
    },
    (error) => {
        console.log(error);
        if (error.response) processStatus(error.response.status);

        return Promise.reject(error);
    }
);

function processStatus(status: number) {
    switch (status) {
        // case 400:
        //     window.location.href = "/NotFound";
        //     break;
        case 401:
            break;
        case 404:
            window.location.href = "/NotFound";
            break;
        case 500:
            window.location.href = "/InternalServerError";
            break;
    }
}
