import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.css'
import emailjs from "@emailjs/browser";
emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
