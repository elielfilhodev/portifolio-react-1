import ThemeToggle from './ThemeToggle'


const nav = [
{ href: '#home', label: 'Home' },
{ href: '#sobre', label: 'Sobre' },
{ href: '#habilidades', label: 'Habilidades' },
{ href: '#contato', label: 'Contato' },
]


export default function Navbar(){
return (
<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 border-b border-black/5 dark:border-white/10">
<div className="container max-w-6xl flex items-center justify-between h-16">
<a href="#home" className="font-semibold tracking-tight">Eliel.dev</a>
<nav className="hidden sm:flex items-center gap-6">
{nav.map(i => (
<a key={i.href} href={i.href} className="text-sm subtle hover:text-brand">
{i.label}
</a>
))}
<ThemeToggle />
</nav>
<div className="sm:hidden flex items-center gap-3">
<ThemeToggle />
</div>
</div>
</header>
)
}