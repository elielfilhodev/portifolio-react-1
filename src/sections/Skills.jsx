// src/sections/Skills.jsx
import Section from "../components/Section";
import ProgressBar from "../components/ProgressBar";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiDotnet,
  SiReact,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiSpringboot,
  SiNodedotjs,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";// DB genérico p/ SQL Server

// Ajuste os percentuais conforme sua autoavaliação
const languages = [
  { label: "HTML", percent: 92, color: "#E34F26", Icon: SiHtml5 },
  { label: "CSS", percent: 88, color: "#1572B6", Icon: SiCss3 },
  { label: "JavaScript", percent: 80, color: "#F7DF1E", Icon: SiJavascript },
  { label: "C#", percent: 20, color: "#512BD4", Icon: SiDotnet },
  { label: "Python", percent: 40, color: "#3776AB", Icon: SiPython },
  { label: "Java", percent: 20, color: "#EA2D2E", Icon: FaJava },
];

const frontendStack = [
  { label: "React", Icon: SiReact, color: "#61DAFB" },
  { label: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
  { label: "Sass", Icon: SiSass, color: "#CC6699" },
  { label: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
];

const backendStack = [
  { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { label: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
  { label: "SQL Server", Icon: FaDatabase, color: "#CC2927" },
];

// Agregados (ajuste os números às suas entregas)
const FRONTEND_TOTAL = 85; // %
const BACKEND_TOTAL = 60; // %

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Linguagens com barras individuais */}
        <motion.div
          className="card p-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.12 }}
        >
          <h3 className="text-xl font-semibold mb-4">Linguagens</h3>
          {languages.map(({ label, percent, color, Icon }) => (
            <ProgressBar
              key={label}
              label={label}
              percent={percent}
              color={color}
              Icon={Icon}
            />
          ))}
        </motion.div>

        {/* Badges da stack (grid de ícones) + agregados */}
        <motion.div
          className="card p-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.10, delay: 0.12 }}
        >
          <h3 className="text-xl font-semibold mb-4">Stack</h3>

          {/* Front-end icons */}
          <div className="mb-2 subtle text-sm">Front-end</div>
          <div className="grid grid-cols-5 sm:grid-cols-6 gap-3 mb-5">
            {frontendStack.map(({ label, Icon, color }) => (
              <div
                key={label}
                title={label}
                className="aspect-square rounded-xl flex items-center justify-center
                           bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20
                           transition-colors"
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color }} aria-hidden />
              </div>
            ))}
          </div>
          <ProgressBar label="Front-end" percent={FRONTEND_TOTAL} color="#1f6feb" />

          {/* Back-end icons */}
          <div className="mt-6 mb-2 subtle text-sm">Back-end</div>
          <div className="grid grid-cols-5 sm:grid-cols-6 gap-3 mb-5">
            {backendStack.map(({ label, Icon, color }) => (
              <div
                key={label}
                title={label}
                className="aspect-square rounded-xl flex items-center justify-center
                           bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20
                           transition-colors"
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color }} aria-hidden />
              </div>
            ))}
          </div>
          <ProgressBar label="Back-end" percent={BACKEND_TOTAL} color="#16a34a" />
        </motion.div>
      </div>
    </Section>
  );
}
