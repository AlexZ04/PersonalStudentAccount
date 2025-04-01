import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import "./style.css";

export function GlobalLogoutButton() {
    const { t } = useTranslation();
    const navigator = useNavigate();

    return (
        <button
            className="blue btn global-login-btn"
            onClick={() => navigator("/afaf")}
        >
            {t("logout")}
        </button>
    );
}
