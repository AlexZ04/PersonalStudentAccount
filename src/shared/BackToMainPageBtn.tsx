import { useTranslation } from "react-i18next";

export function BackToMainPageBtn() {
    const { t } = useTranslation();

    return (
        <button
            className="blue btn"
            onClick={() => (window.location.href = "/")}
        >
            {t("back_to_main_page")}
        </button>
    );
}
