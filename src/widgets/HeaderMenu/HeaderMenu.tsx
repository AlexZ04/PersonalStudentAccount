import { useEffect, useState } from "react";
import { CheckLogin, ShowLoading } from "../../app/Functions";
import { GlobalLoginButton } from "../../shared/LoginButton/GlobalLoginButton";
import { GlobalLogoutButton } from "../../shared/LoginButton/GlobalLogoutButton";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";
import "./style.css";
import { Loading } from "../../shared/Loading/Loading";

export function HeaderMenu() {
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
        <div className="header-menu">
            <LanguageSelect />

            {isLoggedIn ? <GlobalLogoutButton /> : <GlobalLoginButton />}
        </div>
    );
}
