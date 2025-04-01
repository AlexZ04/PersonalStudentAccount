import { Loading } from "../../shared/Loading/Loading";
import { LanguageSelect } from "../../widgets/LanguageSelect/LanguageSelect";
import { LoginField } from "../../widgets/LoginField/LoginField";
import { Notification } from "../../widgets/Notifications/Notification";
import "./style.css";

export function LoginPage() {
    return (
        <>
            <LoginField />
            <LanguageSelect />

            <Notification
                type="error"
                text="wrong_credentials"
                visible={false}
            />

            <Loading />
        </>
    );
}
