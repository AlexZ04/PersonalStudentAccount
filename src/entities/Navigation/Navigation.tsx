import ActiveNavigationProps from "../../props/ActiveNavigationProps";
import { AdminNavBtn } from "../../shared/NavigationBtns/AdminNavBtn";
import { DocumentsNavBtn } from "../../shared/NavigationBtns/DocumentsNavBtn";
import { EventsNavBtn } from "../../shared/NavigationBtns/EventsNavBtn";
import { LinksNavBtn } from "../../shared/NavigationBtns/LinksNavBtn";
import { ProfileNavBtn } from "../../shared/NavigationBtns/ProfileNavBtn";
import "./style.css";

export function Navigation({ activeField }: ActiveNavigationProps) {
    return (
        <div className="menu-navigation">
            <ProfileNavBtn
                isActive={activeField === "profile" ? true : false}
            />
            <AdminNavBtn isActive={activeField === "admin" ? true : false} />
            <DocumentsNavBtn isActive={activeField === "docs" ? true : false} />
            <LinksNavBtn isActive={activeField === "links" ? true : false} />
            <EventsNavBtn isActive={activeField === "events" ? true : false} />
        </div>
    );
}
