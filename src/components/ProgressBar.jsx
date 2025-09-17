// src/components/ProgressBar.jsx
import { motion } from "framer-motion";

export default function ProgressBar({
    label,
    percent = 0,          // 0..100
    color = "#1f6feb",     // hex ou qualquer cor CSS
    Icon,                  // opcional: componente de ícone
}) {
    return (
        <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                    {Icon ? <Icon className="w-5 h-5" aria-hidden /> : null}
                    <span className="text-sm font-medium">{label}</span>
                </div>
                <span className="text-xs subtle">{percent}%</span>
            </div>

            <div className="h-2.5 w-full rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.max(0, Math.min(100, percent))}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ background: color }}
                    aria-hidden
                />
            </div>
        </div>
    );
}
