import { useState } from "react";
import { Navigation } from "../../entities/Navigation/Navigation";
import "./style.css";

export function SideMenu() {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!isOpen);
    };

    return (
        <div className={`side-menu ${isOpen ? "open" : ""}`}>
            <div className="side-menu__head">
                <div className="mini-profile-pict"></div>
                <div className="menu-arrow" onClick={handleOpen}></div>

                <Navigation />
            </div>
            <div className="side-menu__body"></div>
        </div>
    );
}
