import { useTranslation } from "react-i18next";
import { LoginBtn } from "../../shared/LoginBtn";
import { SwitchBtn } from "../../shared/SwitchBtn";
import { InputField } from "../InputField/InputField";

export function LoginField() {
    const { t } = useTranslation();

    return (
        <>
            <div className="login-container">
                <img src="src/assets/login.png" className="login-image"></img>

                <form className="login-field-container">
                    <span>{t("login_to_account")}</span>

                    <InputField string="email" />
                    <InputField string="password" />

                    <div className="login-field-container__switch">
                        <SwitchBtn />
                        <span>{t("remember_me")}</span>
                    </div>

                    <LoginBtn />
                </form>
            </div>
        </>
    );
}
