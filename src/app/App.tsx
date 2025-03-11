import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../widgets/LanguageSelect/LanguageSelect";
import "./style.css";
import { Routes, Route } from "react-router";
import { NotFoundPage } from "../pages/ErrorPages/NotFoundPage";

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

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
