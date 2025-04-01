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
