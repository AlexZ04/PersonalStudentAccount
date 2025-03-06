import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import "./app/i18n.ts"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback="loading...">
      <App />
    </Suspense>
  </StrictMode>,
)
