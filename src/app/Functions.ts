import i18n from "i18next";

export const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
}

export function getCurrentLanguage(): string {
    return i18n.language;
}
