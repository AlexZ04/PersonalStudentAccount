import { useState, useEffect } from "react";
import { CheckLogin, ShowLoading } from "../../app/Functions";
import { Loading } from "../../shared/Loading/Loading";
import { HeaderMenu } from "../../widgets/HeaderMenu/HeaderMenu";
import { SideMenu } from "../../widgets/SideMenu/SideMenu";
import "./style.css";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import ErrorInfo from "../../constants/ErrorInfo";
import { PageName } from "../../shared/PageName/PageName";
import { GetFile } from "../../api/File";
import { useTranslation } from "react-i18next";
import { ProfileInfoField } from "../../shared/ProfileInfoField";

export function ProfilePage() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
    const [avatarUrl, setAvatarUrl] = useState("");

    const { t } = useTranslation();

    let profile = null;
    const userProfile = localStorage.getItem("profile");
    if (userProfile !== null) {
        profile = JSON.parse(userProfile);
    }

    console.log(profile);

    useEffect(() => {
        async function checkAuth() {
            setIsLoggedIn(await CheckLogin());
        }

        checkAuth();
    }, []);

    useEffect(() => {
        const fetchAvatar = async () => {
            const profileString = localStorage.getItem("profile");
            if (profileString !== null) {
                const avatar = await GetFile(
                    JSON.parse(profileString).avatar.id
                );
                setAvatarUrl(avatar);
            }
        };

        fetchAvatar();
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

                    <div className="page-container">
                        <div className="profile-info__left">
                            <img className="profile-image" src={avatarUrl} />

                            <div className="profile-block">
                                <h3>{t("personal_data")}</h3>

                                <ProfileInfoField
                                    name="gender"
                                    text={
                                        profile.gender === "Female"
                                            ? "Женский"
                                            : "Мужской"
                                    }
                                    last={false}
                                />

                                <ProfileInfoField
                                    name="birthday"
                                    text={profile.birthDate}
                                    last={false}
                                />

                                <ProfileInfoField
                                    name="citizenship"
                                    text={profile.citizenship.name}
                                    last={false}
                                />

                                <ProfileInfoField
                                    name="Email"
                                    text={profile.email}
                                    last={true}
                                />
                            </div>

                            <div className="profile-block">
                                <h3>{t("contacts")}</h3>

                                {Array.from(
                                    { length: profile.contacts.length },
                                    (_, i) => (
                                        <ProfileInfoField
                                            name={profile.contacts[i].type}
                                            text={profile.contacts[i].value}
                                            last={false}
                                        />
                                    )
                                )}

                                <ProfileInfoField
                                    name="address"
                                    text={profile.address}
                                    last={true}
                                />
                            </div>
                        </div>

                        <div className="profile-info__right">
                            <h2>
                                {profile.lastName +
                                    " " +
                                    profile.firstName +
                                    " " +
                                    profile.patronymic}
                            </h2>
                        </div>
                    </div>

                    <Loading />
                </>
            ) : (
                <ErrorPage info={ErrorInfo.unauthorized} />
            )}
        </>
    );
}
