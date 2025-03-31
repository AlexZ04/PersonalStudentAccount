import axios from "axios";
import CONNECTION_STRING from "../constants/connectionString";
import { NavigateFunction } from "react-router";
import { ShowNotification } from "../app/Functions";

export function LoginUser(navigator: NavigateFunction, formData: any) {
    axios
        .post(CONNECTION_STRING + "/Auth/login", formData)
        .then((response) => {
            const res = response.data;

            if (res.loginSucceeded) {
                // todo
                navigator("/");
            }
        })
        .catch(() => {
            ShowNotification("error");
        });
}
