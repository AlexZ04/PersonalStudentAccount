import { api } from "./AxioisConfig";

export async function GetFile(id: string) {
    try {
        const response = await api.get(`Files/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            responseType: "blob",
        });

        const res = new Blob([response.data]);
        const url = URL.createObjectURL(res);

        // img.src = url;
        return url;
    } catch (error) {}
    return "";
}
