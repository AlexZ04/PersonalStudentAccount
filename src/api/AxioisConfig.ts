import axios from "axios";
import CONNECTION_STRING from "../constants/connectionString";

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
        else if (error.status) processStatus(error.status);

        return Promise.reject(error);
    }
);

function processStatus(status: number) {
    switch (status) {
        // case 400:
        //     window.location.href = "/NotFound";
        //     break;
        case 401:
            // window.location.href = "/NotFound";
            // localStorage.removeItem("accessToken");
            // localStorage.removeItem("refreshToken");
            break;
        case 404:
            window.location.href = "/NotFound";
            break;
        case 500:
            window.location.href = "/InternalServerError";
            break;
    }
}
