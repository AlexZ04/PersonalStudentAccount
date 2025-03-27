import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import "./style.css";

export function GlobalLoginButton() {
    const { t } = useTranslation();
    const navigator = useNavigate();

    return (
        <button
            className="blue btn global-login-btn"
            onClick={() => navigator("/login")}
        >
            {t("enter")}
        </button>
    );
}
