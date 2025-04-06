import { useTranslation } from "react-i18next";
import ProfileInfoFieldProps from "../props/ProfileInfoFieldProps";

export function ProfileInfoField({ name, text, last }: ProfileInfoFieldProps) {
    const { t } = useTranslation();

    return (
        <>
            <p className="profile-data__name">{t(name)}</p>
            <p className={`profile-data ${last ? "profile-data-last" : ""}`}>
                {text}
            </p>
        </>
    );
}
