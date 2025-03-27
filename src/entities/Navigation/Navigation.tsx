import { AdminNavBtn } from "../../shared/NavigationBtns/AdminNavBtn";
import { DocumentsNavBtn } from "../../shared/NavigationBtns/DocumentsNavBtn";
import { EventsNavBtn } from "../../shared/NavigationBtns/EventsNavBtn";
import { LinksNavBtn } from "../../shared/NavigationBtns/LinksNavBtn";
import { ProfileNavBtn } from "../../shared/NavigationBtns/ProfileNavBtn";
import "./style.css";

export function Navigation() {
    return (
        <div className="menu-navigation">
            <ProfileNavBtn />
            <AdminNavBtn />
            <DocumentsNavBtn />
            <LinksNavBtn />
            <EventsNavBtn />
        </div>
    );
}
