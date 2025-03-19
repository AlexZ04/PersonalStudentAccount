import { useRef } from "react";
import { useLanguage } from "../../hooks/useLanguage.ts";
import STRINGS from "../../constants/strings.ts";
import "./style.css";
import { useClickOutside } from "../../hooks/useClickOutside.ts";

export function LanguageSelect() {
    const { language, text, switchLanguage } = useLanguage();
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(ref, () => {
        ref.current?.classList.remove("is-active"); // исправить через ref
    });

    const handleSelectClick = () => {
        ref.current?.classList.toggle("is-active");
    };

    return (
        <div ref={ref} className="select" onClick={handleSelectClick}>
            <div className="select__header">
                <span className="select__current">{text}</span>

                <div className="select__right-part">
                    <div className="select__flag">
                        <img
                            src="src/assets/ru.png"
                            className={`flag-img Russian ${
                                language === "en" ? "hidden" : ""
                            }`}
                        ></img>
                        <img
                            src="src/assets/en.png"
                            className={`flag-img English ${
                                language === "ru" ? "hidden" : ""
                            }`}
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
                <div
                    className="select__item"
                    onClick={() => switchLanguage("en")}
                >
                    <span>{STRINGS.ENGLISH}</span>
                    <img src="src/assets/en.png" className="flag-img"></img>
                </div>
                <div
                    className="select__item"
                    onClick={() => switchLanguage("ru")}
                >
                    <span>{STRINGS.RUSSIAN}</span>
                    <img src="src/assets/ru.png" className="flag-img"></img>
                </div>
            </div>
        </div>
    );
}
