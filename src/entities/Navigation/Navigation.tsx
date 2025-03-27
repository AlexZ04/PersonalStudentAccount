import { AdminNavBtn } from "../../shared/NavigationBtns/AdminNavBtn";
import { DocumentsNavBtn } from "../../shared/NavigationBtns/DocumentsNavBtn";
import { EventsNavBtn } from "../../shared/NavigationBtns/EventsNavBtn";
import { LinksNavBtn } from "../../shared/NavigationBtns/LinksNavBtn";
import { ProfileNavBtn } from "../../shared/NavigationBtns/ProfileNavBtn";
import "./style.css";

export function Navigation() {
    return (
        <div className="menu-navigation">
            <ProfileNavBtn isActive={false} />
            <AdminNavBtn isActive={false} />
            <DocumentsNavBtn isActive={false} />
            <LinksNavBtn isActive={false} />
            <EventsNavBtn isActive={false} />
        </div>
    );
}
