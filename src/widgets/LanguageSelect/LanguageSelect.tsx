import { ChangeEvent } from "react";
import { changeLanguage, getCurrentLanguage } from "../../app/Functions";
import "./style.css";

export function LanguageSelect() {

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        changeLanguage(event.target.value)
    }

    return (
        <select className="language-select"
        value = {getCurrentLanguage()}
        onChange={handleChange}>
            <option value="en">English</option>
            <option value="ru">Русский</option>
        </select>
    )
}
