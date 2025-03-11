import { useState, useEffect } from "react";
import { changeLanguage, getCurrentLanguage } from "../app/Functions";
import STRINGS from "../constants/strings";

export function useLanguage() {
    const [language, setLanguage] = useState(getCurrentLanguage());

    useEffect(() => {
        setLanguage(getCurrentLanguage());
    }, []);

    const switchLanguage = (lang: "ru" | "en") => {
        changeLanguage(lang);
        setLanguage(lang);
    };

    return {
        language,
        text: language === "ru" ? STRINGS.RUSSIAN : STRINGS.ENGLISH,
        switchLanguage,
    };
}
