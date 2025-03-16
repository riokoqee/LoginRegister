import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/components/button.css";
import "./styles/components/form.css";
import "./styles/components/input.css";
import "./styles/components/text.css";
import "./styles/base/typography.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
