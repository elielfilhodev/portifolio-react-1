import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import useScrollSpy from "../hooks/useScrollSpy";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(nav.map((n) => n.href), { offset: 72 });

  const close = () => setOpen(false);

  // trava scroll quando menu aberto
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => (document.body.style.overflow = prev);
  }, [open]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    // compensa header ~64px
    const headerH = 64;
    const y = el.getBoundingClientRect().top + window.scrollY - headerH;
    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 border-b border-black/5 dark:border-white/10">
      <div className="container max-w-6xl flex items-center justify-between h-16">
        <a href="#home" className="font-semibold tracking-tight" onClick={(e)=>scrollTo(e,"#home")}>Eliel.dev</a>

        {/* Desktop */}
        <nav className="hidden sm:flex items-center gap-6">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              onClick={(e) => scrollTo(e, i.href)}
              className={`nav-link ${activeId === i.href ? "nav-link--active" : ""}`}
            >
              {i.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile actions */}
        <div className="sm:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="btn-ghost rounded-xl"
          >
            <span className="block w-6 h-[2px] bg-current relative">
              <span className={`absolute left-0 -top-[6px] w-6 h-[2px] bg-current transition-transform ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`absolute left-0 top-[6px] w-6 h-[2px] bg-current transition-transform ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              className="fixed inset-0 bg-black/30 dark:bg-black/50"
              onClick={close}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              aria-label="Fechar menu"
            />
            <motion.nav
              id="mobile-menu" role="dialog" aria-modal="true"
              className="fixed top-0 right-0 h-dvh w-[82%] max-w-sm bg-white dark:bg-gray-900 shadow-2xl border-l border-black/5 dark:border-white/10 p-6 flex flex-col gap-6"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.25 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">Menu</span>
                <button onClick={close} className="btn-ghost rounded-xl" aria-label="Fechar">✕</button>
              </div>
              <ul className="flex flex-col gap-4">
                {nav.map((i) => (
                  <li key={i.href}>
                    <a
                      href={i.href}
                      onClick={(e) => scrollTo(e, i.href)}
                      className={`block text-lg py-2 ${activeId === i.href ? "text-brand font-semibold" : "hover:text-brand"}`}
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a href="#contato" onClick={(e)=>scrollTo(e,"#contato")} className="btn-primary w-full justify-center">
                  Fale comigo
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
