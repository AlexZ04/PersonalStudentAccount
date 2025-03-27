import { Routes, Route } from "react-router";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { MainPage } from "../pages/MainPage/MainPage";
import ErrorInfo from "../entities/ErrorInfo";
import "./style.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route
                path="*"
                element={<ErrorPage info={ErrorInfo.pageNotFound} />}
            />
        </Routes>
    );
}

export default App;
