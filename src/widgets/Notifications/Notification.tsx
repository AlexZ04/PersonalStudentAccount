import { useTranslation } from "react-i18next";
import { useState } from "react";
import NotificationProps from "../../props/NotificationProps";
import "./style.css";

export function Notification({ type, text, visible }: NotificationProps) {
    const { t } = useTranslation();
    const [isVisivle, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => setVisible(true), 1000);
    };

    return (
        <div
            className={`notification ${type}-notification ${
                isVisivle && visible ? "notification-visible" : ""
            }`}
        >
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
                    onClick={handleClose}
                ></img>
            </div>
            <div className="notification__body">{t(text)}</div>
        </div>
    );
}
