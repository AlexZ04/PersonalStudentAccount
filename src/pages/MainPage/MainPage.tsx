import { useTranslation } from "react-i18next";
import { HeaderMenu } from "../../widgets/HeaderMenu/HeaderMenu";
import { SideMenu } from "../../widgets/SideMenu/SideMenu";
import { Loading } from "../../shared/Loading/Loading";

export function MainPage() {
    const { t } = useTranslation();

    return (
        <>
            <SideMenu activeField="events" />
            <HeaderMenu />

            <Loading />
        </>
    );
}
