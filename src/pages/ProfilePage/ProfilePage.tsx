import { useState, useEffect } from "react";
import { CheckLogin, ShowLoading } from "../../app/Functions";
import { Loading } from "../../shared/Loading/Loading";
import { HeaderMenu } from "../../widgets/HeaderMenu/HeaderMenu";
import { SideMenu } from "../../widgets/SideMenu/SideMenu";
import "./style.css";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import ErrorInfo from "../../constants/ErrorInfo";
import { PageName } from "../../shared/PageName/PageName";

export function ProfilePage() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

    useEffect(() => {
        async function checkAuth() {
            setIsLoggedIn(await CheckLogin());
        }

        checkAuth();
    }, []);

    if (isLoggedIn === null) {
        ShowLoading(true);
        return <Loading />;
    }

    return (
        <>
            {isLoggedIn ? (
                <>
                    <SideMenu activeField="profile" />
                    <HeaderMenu />

                    <PageName string="profile" />

                    <Loading />
                </>
            ) : (
                <ErrorPage info={ErrorInfo.unauthorized} />
            )}
        </>
    );
}
