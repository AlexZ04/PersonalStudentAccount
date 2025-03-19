import { useTranslation } from "react-i18next";

export function LoginBtn() {
    const { t } = useTranslation();

    return <button className="blue btn">{t("enter")}</button>;
}
