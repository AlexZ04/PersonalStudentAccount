import i18n from "i18next";
import { NOTIFICATION_VISIBLE_TIME } from "../constants/Settings";

export const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
};

export function getCurrentLanguage(): string {
    return i18n.language;
}

export function ShowNotification(
    type: "success" | "info" | "warning" | "error"
) {
    const notification = document.querySelector(`.${type}-notification`);
    notification?.classList.add("notification-visible");
    setTimeout(
        () => notification?.classList.remove("notification-visible"),
        NOTIFICATION_VISIBLE_TIME
    );
}

export function ShowLoading(flag: boolean) {
    if (flag) document.querySelector(".loading")?.classList.remove("hidden");
    else document.querySelector(".loading")?.classList.add("hidden");
}
