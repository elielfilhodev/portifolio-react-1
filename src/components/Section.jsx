import TextReveal from './TextReveal'      // <-- caminho relativo a components
import { motion } from 'framer-motion'

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container max-w-6xl">
        <TextReveal
          text={title}
          by="char"
          as="h2"
          className="section-title"
          delay={0.05}
          duration={0.45}
          stagger={0.015}
        />
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.08 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
