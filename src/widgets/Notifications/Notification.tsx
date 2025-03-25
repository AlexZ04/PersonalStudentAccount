import { useTranslation } from "react-i18next";
import NotificationProps from "../../props/NotificationProps";
import "./style.css";

export function Notification({ type, text }: NotificationProps) {
    const { t } = useTranslation();

    return (
        <div className={`notification ${type}-notification`}>
            <div className="notification__header">
                <div className="notification__header__left">
                    <img
                        src={`src/assets/${type}-notif.png`}
                        className="notif-icon"
                    ></img>
                    <span>{t(type)}</span>
                </div>
                <img
                    src={`src/assets/${type}-x.png`}
                    className="notif-icon-x"
                ></img>
            </div>
            <div className="notification__body">{text}</div>
        </div>
    );
}
