// src/components/TextReveal.jsx
import { motion } from "framer-motion";

export default function TextReveal({
  text,
  by = "word",           // "word" | "char"
  as: Tag = "p",          // h1, h2, p...
  className = "",
  delay = 0,              // atraso do container
  duration = 0.6,         // duração de cada item
  stagger = 0.04,         // intervalo entre itens
}) {
  const parts = by === "char"
    ? Array.from(text)
    : text.split(" ");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay }
    }
  };

  const item = {
    hidden: { y: 12, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      aria-hidden={false}
    >
      <Tag className="flex flex-wrap">
{parts.map((p, i) => (
  <motion.span
    key={i}
    variants={item}
    className="inline-block will-change-transform"
    style={{ whiteSpace: "pre" }}
  >
    {p}{by === "word" ? " " : ""}
  </motion.span>
))}


      </Tag>
    </motion.div>
  );
}
