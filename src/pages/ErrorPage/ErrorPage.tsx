import { BackToMainPageBtn } from "../../shared/BackToMainPageBtn";
import STRINGS from "../../constants/strings";
import ErrorInfoProps from "../../entitites/ErrorInfoProps";
import "./style.css";

export function ErrorPage({ info }: ErrorInfoProps) {
    return (
        <div className="error-page-container">
            <div className="error-code">{info.code}</div>

            <div className="error-title">
                <div className="error-title__text">
                    <p>{info.title[1]}</p>
                    <p>{info.title[0]}</p>
                </div>

                <BackToMainPageBtn />
            </div>

            <div className="error-description">
                <p>{STRINGS.WHAT_HAPPENED}</p>
                <p>{info.message}</p>
            </div>
        </div>
    );
}
