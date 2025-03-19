import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export function BackToMainPageBtn() {
    const { t } = useTranslation();
    const navigator = useNavigate();

    return (
        <button className="blue btn" onClick={() => navigator("/")}>
            {t("back_to_main_page")}
        </button>
    );
}
