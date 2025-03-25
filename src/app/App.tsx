import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../widgets/LanguageSelect/LanguageSelect";
import { Routes, Route } from "react-router";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { Notification } from "../widgets/Notifications/Notification";
import ErrorInfo from "../entities/ErrorInfo";
import "./style.css";

function App() {
    const { t } = useTranslation();

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div>
                        <h1>{t("test")}</h1>
                        <LanguageSelect />
                        <Notification text="aaa" type="success" />
                    </div>
                }
            />

            <Route path="/login" element={<LoginPage />} />

            <Route
                path="*"
                element={<ErrorPage info={ErrorInfo.pageNotFound} />}
            />
        </Routes>
    );
}

export default App;
