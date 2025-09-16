// src/sections/Skills.jsx
import Section from "../components/Section";
import {
  // Front-end
  SiReact, SiTailwindcss, SiSass, SiBootstrap, SiJavascript,
  // Back-end
  FaJava,
  SiSpringboot,
  // Databases
  SiMongodb, SiMysql, SiMicrosoftsqlserver,
  // Ferramentas
  SiGit, SiGithub, SiVisualstudiocode, SiVisualstudio, SiNodedotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

const groups = [
  {
    title: "Front-end",
    items: [
      { label: "React", Icon: SiReact, color: "#61DAFB" },
      { label: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
      { label: "Sass", Icon: SiSass, color: "#CC6699" },
      { label: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
      { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "Back-end",
    items: [
      { label: "Java", Icon: FaJava, color: "#EA2D2E" },
      { label: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
    ],
  },
  {
    title: "Bancos de dados",
    items: [
      { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { label: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { label: "SQL Server", Icon: SiMicrosoftsqlserver, color: "#CC2927" },
    ],
  },
  {
    title: "Ferramentas",
    items: [
      { label: "Git", Icon: SiGit, color: "#F05032" },
      { label: "GitHub", Icon: SiGithub, color: "#181717" },
      { label: "VS Code", Icon: SiVisualstudiocode, color: "#007ACC" },
      { label: "Visual Studio", Icon: SiVisualstudio, color: "#5C2D91" },
      { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="card p-6">
            <h3 className="text-xl font-semibold mb-4">{g.title}</h3>
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-4">
              {g.items.map(({ label, Icon, color }) => (
                <motion.button
                  key={label}
                  title={label}
                  className="group aspect-square rounded-2xl flex items-center justify-center bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35 }}
                >
                  <Icon
                    className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
                    style={{ color }}
                    aria-hidden
                  />
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
