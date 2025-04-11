// import { ShowNotification, ShowLoading } from "../app/Functions";
import { api } from "./AxioisConfig";

export async function GetCurrentProfile() {
    try {
        const response = await api.get("Profile", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                accept: "text/plain",
            },
        });

        const res = response.data;

        return res;
    } catch (error) {
        return "";
    }
}

export async function GetCurrentUserStudent() {
    try {
        const response = await api.get("Profile/student", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                accept: "text/plain",
            },
        });

        const res = response.data;

        return res;
    } catch (error) {
        return "";
    }
}

export async function GetCurrentUserTeacher() {
    try {
        const response = await api.get("Profile/employee", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                accept: "text/plain",
            },
        });

        const res = response.data;

        return res;
    } catch (error) {
        return "";
    }
}
