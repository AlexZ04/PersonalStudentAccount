import { BackToMainPageBtn } from "../../shared/BackToMainPageBtn";
import ErrorInfoProps from "../../entities/ErrorInfoProps";
import { ErrorLine } from "../../shared/ErrorLine/ErrorLine";
import "./style.css";
import { useTranslation } from "react-i18next";

export function ErrorPage({ info }: ErrorInfoProps) {
    const { t } = useTranslation();

    return (
        <>
            <div className="error-page-container">
                <div className="error-code">{info.code}</div>

                <div className="error-title">
                    <div className="error-title__text">
                        <span>{info.title[1]}</span>
                        <span>{info.title[0]}</span>
                    </div>

                    <BackToMainPageBtn />
                </div>

                <div className="error-description">
                    <span>{t("what_happened")}</span>
                    <span>{t(info.message)}</span>
                </div>
            </div>

            <ErrorLine rotation="right-rotation-line" />
            <ErrorLine rotation="left-rotation-line" />
        </>
    );
}
