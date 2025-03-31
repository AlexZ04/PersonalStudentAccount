import { useTranslation } from "react-i18next";
import NotificationProps from "../../props/NotificationProps";
import "./style.css";

export function Notification({ type, text }: NotificationProps) {
    const { t } = useTranslation();

    const handleClose = () => {
        document
            .querySelector(`.${type}-notification`)
            ?.classList.remove("notification-visible");
    };

    return (
        <div className={`notification ${type}-notification`}>
            <div className="notification__header">
                <div className="notification__header__left">
                    <img
                        src={`src/assets/Notifications/${type}-notif.png`}
                        className="notif-icon"
                    ></img>
                    <span>{t(type)}</span>
                </div>
                <img
                    src={`src/assets/Notifications/${type}-x.png`}
                    className="notif-icon-x"
                    onClick={handleClose}
                ></img>
            </div>
            <div className="notification__body">{t(text)}</div>
        </div>
    );
}
