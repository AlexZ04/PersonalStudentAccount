import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import "./style.css";
import { Logout, RevokeAll } from "../../api/Auth";

export function GlobalLogoutButton() {
    const { t } = useTranslation();
    const navigator = useNavigate();

    return (
        <button
            className="blue btn global-login-btn"
            onClick={() => {
                Logout();
                RevokeAll();
                navigator("/login");
            }}
        >
            {t("logout")}
        </button>
    );
}
