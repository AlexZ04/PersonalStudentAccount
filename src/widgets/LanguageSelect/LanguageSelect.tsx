import { useState, useEffect, useRef } from "react";
import { changeLanguage, getCurrentLanguage } from "../../app/Functions";
import STRINGS from "../../constants/strings.tsx";
import "./style.css";

export function LanguageSelect() {
    const [text, setText] = useState<string>(
        getCurrentLanguage() === "ru" ? STRINGS.RUSSIAN : STRINGS.ENGLISH
    );
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                const select = document.querySelector(".select");

                select?.classList.remove("is-active");
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
    });

    const handleSelectClick = () => {
        const select = document.querySelector(".select");

        select?.classList.toggle("is-active");
    };

    const handleRussianLanguage = () => {
        handleSelectClick;
        changeLanguage("ru");
        document.querySelector(".Russian")?.classList.remove("hidden");
        document.querySelector(".England")?.classList.add("hidden");
        setText("Русский");
    };

    const handleEnglishLanguage = () => {
        handleSelectClick;
        changeLanguage("en");
        document.querySelector(".Russian")?.classList.add("hidden");
        document.querySelector(".England")?.classList.remove("hidden");
        setText("English");
    };

    return (
        <div ref={ref} className="select" onClick={handleSelectClick}>
            <div className="select__header">
                <span className="select__current">{text}</span>

                <div className="select__right-part">
                    <div className="select__flag">
                        <img
                            src="src/assets/ru.png"
                            className={
                                getCurrentLanguage() === "en"
                                    ? "flag-img Russian hidden"
                                    : "flag-img Russian"
                            }
                        ></img>
                        <img
                            src="src/assets/en.png"
                            className={
                                getCurrentLanguage() === "ru"
                                    ? "flag-img England hidden"
                                    : "flag-img England"
                            }
                        ></img>
                    </div>

                    <div className="select__icon">
                        <img
                            src="src/assets/arrow-down.png"
                            className="arrow-img"
                        ></img>
                    </div>
                </div>
            </div>

            <div className="select__body">
                <div className="select__item" onClick={handleEnglishLanguage}>
                    <span>{STRINGS.ENGLISH}</span>
                    <img src="src/assets/en.png" className="flag-img"></img>
                </div>
                <div className="select__item" onClick={handleRussianLanguage}>
                    <span>{STRINGS.RUSSIAN}</span>
                    <img src="src/assets/ru.png" className="flag-img"></img>
                </div>
            </div>
        </div>
    );
}
