import { LanguageSelect } from "../../widgets/LanguageSelect/LanguageSelect";
import { LoginField } from "../../widgets/LoginField/LoginField";
import "./style.css";

export function LoginPage() {
    return (
        <>
            <LoginField />
            <LanguageSelect />
        </>
    );
}
