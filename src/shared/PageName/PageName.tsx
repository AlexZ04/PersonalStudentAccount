import { useTranslation } from "react-i18next";
import StringProps from "../../props/StringProps";
import "./style.css";

export function PageName({ string }: StringProps) {
    const { t } = useTranslation();

    return <h2 className="page-name">{t(string)}</h2>;
}
