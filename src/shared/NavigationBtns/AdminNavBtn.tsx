import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import IsActiveProps from "../../props/IsActiveProps";

export function AdminNavBtn({ isActive }: IsActiveProps) {
    const { t } = useTranslation();
    const navigator = useNavigate();

    return (
        <div
            className={`navigation-field ${
                isActive ? "navigation-field-active" : ""
            }`}
            onClick={() => navigator("/admin")}
        >
            <img
                className="navigation-icon"
                src={`src/assets/SideNavigation/nav-admin${
                    isActive ? "-active" : ""
                }.png`}
            ></img>
            <a className="navigation-field-text">{t("nav_admin")}</a>
        </div>
    );
}
