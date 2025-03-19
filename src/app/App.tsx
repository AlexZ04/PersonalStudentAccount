import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../widgets/LanguageSelect/LanguageSelect";
import { Routes, Route } from "react-router";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import ErrorInfo from "../entities/errorInfo";
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
