import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App'


// tema inicial respeita prefers-color-scheme
(function initTheme(){
const stored = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
if (stored === 'dark' || (!stored && prefersDark)) {
document.documentElement.classList.add('dark')
}
})()


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<App />
</React.StrictMode>
)