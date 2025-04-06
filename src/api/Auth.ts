import { ShowLoading } from "../app/Functions";
import { api } from "./AxioisConfig";

export async function LoginUser(formData: any): Promise<boolean> {
    try {
        ShowLoading(true);

        const response = await api.post("Auth/login", formData);
        const res = response.data;

        if (res.loginSucceeded) {
            localStorage.setItem("accessToken", res.accessToken);
            localStorage.setItem("refreshToken", res.refreshToken);

            ShowLoading(false);

            return true;
        }

        ShowLoading(false);
        return false;
    } catch (error) {
        ShowLoading(false);
        return false;
    }
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
    try {
        api.post("Auth/logout", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        });
    } catch (error) {}

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("avatar");
    localStorage.removeItem("profile");
}

export function RevokeAll() {
    api.post("Auth/revoke_all", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
    });
}
