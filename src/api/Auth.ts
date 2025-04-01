import axios from "axios";
import CONNECTION_STRING from "../constants/connectionString";
import { NavigateFunction } from "react-router";
import { ShowNotification, ShowLoading } from "../app/Functions";

export function LoginUser(navigator: NavigateFunction, formData: any) {
    ShowLoading(true);

    axios
        .post(CONNECTION_STRING + "/Auth/login", formData)
        .then((response) => {
            const res = response.data;

            if (res.loginSucceeded) {
                localStorage.setItem("accessToken", res.accessToken);
                localStorage.setItem("refreshToken", res.refreshToken);

                navigator("/");
            }
        })
        .catch(() => {
            ShowNotification("error");
        })
        .then(() => ShowLoading(false));
}

export function RefreshToken() {
    if (localStorage.getItem("refreshToken") === null) return;

    axios
        .post(CONNECTION_STRING + "/Auth/refresh", {
            refreshToken: localStorage.getItem("refreshToken"),
        })
        .then((response) => {
            const res = response.data;

            if (response.status === 200) {
                localStorage.setItem("accessToken", res.accessToken);
                localStorage.setItem("refreshToken", res.refreshToken);
            } else {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
            }
        });
}
