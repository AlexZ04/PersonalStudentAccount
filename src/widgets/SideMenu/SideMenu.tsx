import { useEffect, useState } from "react";
import { Navigation } from "../../entities/Navigation/Navigation";
import ActiveNavigationProps from "../../props/ActiveNavigationProps";
import "./style.css";
import { GetFile } from "../../api/File";

export function SideMenu({ activeField }: ActiveNavigationProps) {
    const [isOpen, setOpen] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState("");

    const handleOpen = () => {
        setOpen(!isOpen);

        document
            .querySelector(".page-name")
            ?.classList.toggle("side-menu-opened");

        document
            .querySelector(".page-container")
            ?.classList.toggle("side-menu-opened");
    };

    useEffect(() => {
        const fetchAvatar = async () => {
            const profileString = localStorage.getItem("profile");
            if (profileString) {
                const profile = JSON.parse(profileString);
                const avatar = await GetFile(profile.avatar.id);
                setAvatarUrl(avatar);
            }
        };

        fetchAvatar();
    }, []);

    return (
        <>
            <div className={`side-menu ${isOpen ? "open" : ""}`}>
                <div className="side-menu__head">
                    <div
                        className="mini-profile-pict"
                        style={{
                            backgroundImage: `url(${avatarUrl})`,
                        }}
                    ></div>
                    <div className="menu-arrow" onClick={handleOpen}></div>

                    <Navigation activeField={activeField} />

                    <div className="blur"></div>
                </div>
            </div>
            <img
                src="src/assets/SideNavigation/menu-small-screen.png"
                className={`small-menu-btn ${isOpen ? "hidden" : ""}`}
                onClick={handleOpen}
            ></img>
        </>
    );
}
