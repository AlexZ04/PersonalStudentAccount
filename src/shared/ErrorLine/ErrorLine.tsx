import { useTranslation } from "react-i18next";
import RotationProps from "../../entities/RotationProps";
import "./style.css";

export function ErrorLine({ rotation }: RotationProps) {
    const { t } = useTranslation();

    return (
        <div className={`error-line ${rotation}`}>
            {Array.from({ length: 9 }, (_, i) => (
                <span key={i}>{t("error")}</span>
            ))}
        </div>
    );
}
