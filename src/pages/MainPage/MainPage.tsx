import { useTranslation } from "react-i18next";
import { HeaderMenu } from "../../widgets/HeaderMenu/HeaderMenu";
import { Notification } from "../../widgets/Notifications/Notification";
import { useState } from "react";
import { SideMenu } from "../../widgets/SideMenu/SideMenu";
import { LanguageSelect } from "../../widgets/LanguageSelect/LanguageSelect";
import { Loading } from "../../shared/Loading/Loading";

export function MainPage() {
    const { t } = useTranslation();

    const [notifVis, setVis] = useState(false);

    const handleClick = () => {
        setVis(!notifVis);
        setTimeout(() => setVis(false), 1000);
    };

    return (
        <>
            <SideMenu activeField="events" />
            <HeaderMenu />

            <Notification
                text="wrong_credentials"
                type="error"
                visible={notifVis ? true : false}
            />

            <Loading />
        </>
    );
}
