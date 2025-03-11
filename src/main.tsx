import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app/App.tsx";
import "./app/i18n.ts";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <StrictMode>
            <Suspense fallback="loading...">
                <App />
            </Suspense>
        </StrictMode>
    </BrowserRouter>
);
