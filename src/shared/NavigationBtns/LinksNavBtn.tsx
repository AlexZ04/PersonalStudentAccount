import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export function LinksNavBtn() {
    const { t } = useTranslation();
    const navigator = useNavigate();

    return (
        <div className="navigation-field" onClick={() => navigator("/login")}>
            <img
                className="navigation-icon"
                src="src/assets/nav-links.png"
            ></img>
            <a className="navigation-field-text">{t("nav_links")}</a>
        </div>
    );
}
