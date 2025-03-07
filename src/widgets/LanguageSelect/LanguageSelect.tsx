import { ChangeEvent } from "react";
import { changeLanguage, getCurrentLanguage } from "../../app/Functions";
import "./style.css";

export function LanguageSelect() {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        changeLanguage(event.target.value);
    };

    return (
        // <select
        //     className="language-select"
        //     value={getCurrentLanguage()}
        //     onChange={handleChange}
        // >
        //     <option value="en">English</option>
        //     <option value="ru">Русский</option>
        // </select>
        <div className="select is-active">
            <div className="select__header">
                <span className="select__current">Русский</span>

                <div className="select__flag">
                    <img
                        src="src/assets/ru.png"
                        className="flag-img Russian"
                    ></img>
                    <img
                        src="src/assets/en.png"
                        className="flag-img England"
                    ></img>
                </div>

                <div className="select__icon">
                    <img
                        src="src/assets/arrow-down.png"
                        className="arrow-img"
                    ></img>
                </div>
            </div>

            <div className="select__body">
                <div className="select__item">
                    <span>English</span>
                    <img src="src/assets/en.png" className="flag-img"></img>
                </div>
                <div className="select__item">
                    <span>Русский</span>
                    <img src="src/assets/ru.png" className="flag-img"></img>
                </div>
            </div>
        </div>
    );
}
