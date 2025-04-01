import { CheckLogin } from "../../app/Functions";
import { GlobalLoginButton } from "../../shared/LoginButton/GlobalLoginButton";
import { GlobalLogoutButton } from "../../shared/LoginButton/GlobalLogoutButton";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";
import "./style.css";

export function HeaderMenu() {
    return (
        <div className="header-menu">
            <LanguageSelect />

            {CheckLogin() ? <GlobalLogoutButton /> : <GlobalLoginButton />}
        </div>
    );
}
