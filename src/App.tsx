import "./App.css";
import { useTranslation } from "react-i18next";

function App() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }

    return (
        <>
            <h1>
                {t('test')}
            </h1>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('ru')}>Русский</button>
        </>
    );
}

export default App;
