import { useTranslation } from "react-i18next";
import { LanguageSelect } from "../widgets/LanguageSelect/LanguageSelect";
import "./style.css";

function App() {

    const { t } = useTranslation();

    return (
        <>
            <h1>
                {t('test')}
            </h1>
            <LanguageSelect />
        </>
    );
}

export default App;
