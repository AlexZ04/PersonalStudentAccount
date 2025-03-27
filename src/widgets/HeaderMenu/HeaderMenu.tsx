import { GlobalLoginButton } from "../../shared/LoginButton/GlobalLoginButton";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";
import "./style.css";

export function HeaderMenu() {
    return (
        <div className="header-menu">
            <LanguageSelect />
            <GlobalLoginButton />
        </div>
    );
}
