import { NavigateFunction } from "react-router";
import { ShowNotification, ShowLoading } from "../app/Functions";
import { api } from "./AxioisConfig";

export function LoginUser(navigator: NavigateFunction, formData: any) {
    ShowLoading(true);

    api.post("Auth/login", formData)
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

export async function RefreshToken() {
    if (localStorage.getItem("refreshToken") === null) return;

    try {
        const response = await api.post("Auth/refresh", {
            refreshToken: localStorage.getItem("refreshToken"),
        });

        const res = response.data;

        if (response.status === 200) {
            localStorage.setItem("accessToken", res.accessToken);
            localStorage.setItem("refreshToken", res.refreshToken);
        } else {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        }

        console.log(localStorage.getItem("refreshToken"));
    } catch (error) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    }
}

export function Logout() {
    api.post("Auth/logout", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
    });

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
}

export function RevokeAll() {
    api.post("Auth/revoke_all", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
    });
}
