import { useTranslation } from "react-i18next";
import { LoginBtn } from "../../shared/LoginBtn";
import { SwitchBtn } from "../../shared/SwitchBtn";
import { InputField } from "../InputField/InputField";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import CONNECTION_STRING from "../../constants/connectionString";

export function LoginField() {
    const { t } = useTranslation();
    const navigator = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleSwitchChange = (checked: boolean) => {
        setFormData((prev) => ({ ...prev, rememberMe: checked }));
    };

    const handleInputChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios
            .post(CONNECTION_STRING + "/Auth/login", formData)
            .then((response) => {
                const res = response.data;

                if (res.loginSucceeded) {
                    // todo
                    // navigator("/");
                }
            })
            .catch((error) => {
                // todo
                alert(error.status);
            });
    };

    return (
        <>
            <div className="login-container">
                <img src="src/assets/login.png" className="login-image"></img>

                <form className="login-field-container" onSubmit={handleSubmit}>
                    <span>{t("login_to_account")}</span>

                    <InputField
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <InputField
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />

                    <div className="login-field-container__switch">
                        <SwitchBtn
                            checked={formData.rememberMe}
                            onChange={handleSwitchChange}
                        />
                        <span>{t("remember_me")}</span>
                    </div>

                    <LoginBtn />
                </form>
            </div>
        </>
    );
}
