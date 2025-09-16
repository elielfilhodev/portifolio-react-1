import { useEffect, useState } from 'react'


export default function ThemeToggle(){
const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))


useEffect(() => {
if(isDark){
document.documentElement.classList.add('dark')
localStorage.setItem('theme', 'dark')
} else {
document.documentElement.classList.remove('dark')
localStorage.setItem('theme', 'light')
}
}, [isDark])


return (
<button
className="btn-ghost rounded-xl"
aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
onClick={() => setIsDark(v => !v)}
>
{isDark ? '🌙' : '☀️'}
<span className="sr-only">Alternar tema</span>
</button>
)
}