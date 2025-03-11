import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../widgets/LanguageSelect/LanguageSelect";
import { Routes, Route } from "react-router";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import errorInfo from "../entitites/errorInfo";
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

            <Route
                path="*"
                element={<ErrorPage info={errorInfo.pageNotFound} />}
            />
        </Routes>
    );
}

export default App;
