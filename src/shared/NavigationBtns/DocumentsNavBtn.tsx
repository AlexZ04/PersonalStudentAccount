import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export function DocumentsNavBtn() {
    const { t } = useTranslation();
    const navigator = useNavigate();

    return (
        <div className="navigation-field" onClick={() => navigator("/login")}>
            <img
                className="navigation-icon"
                src="src/assets/nav-documents.png"
            ></img>
            <a className="navigation-field-text">{t("nav_documents")}</a>
        </div>
    );
}
