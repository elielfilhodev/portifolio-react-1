import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaWrench, FaArrowDown, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = ({ onSectionChange }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = heroRef.current;
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          onSectionChange('hero');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onSectionChange]);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" ref={heroRef} className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className={styles.greeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            👋 Olá, eu sou
          </motion.p>
          
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Eliel Filho
          </motion.h1>
          
          <motion.h2
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Desenvolvedor Fullstack & Técnico em TI
          </motion.h2>
          
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Especialista em desenvolvimento web moderno e soluções completas em TI. 
            Transformo ideias em realidade através de código limpo e manutenção profissional.
          </motion.p>
          
          <motion.div
            className={styles.techStack}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {['React', 'Node.js', 'JavaScript', 'Python', 'HTML/CSS', 'SQL'].map((tech, index) => (
              <motion.span
                key={tech}
                className={styles.techItem}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div
            className={styles.ctaButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <motion.a
              href="#contact"
              className={styles.primaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp />
              Vamos Conversar
            </motion.a>
            <motion.a
              href="#portfolio"
              className={styles.secondaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCode />
              Ver Projetos
            </motion.a>
          </motion.div>
          
          <motion.div
            className={styles.socialLinks}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <motion.a
              href="https://github.com/elielfilhodev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/eliel-filho-8083a3359"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://wa.me/5514999061535"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className={styles.floatingIcon}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <FaCode />
          </motion.div>
          
          <motion.div
            className={styles.floatingIcon}
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <FaServer />
          </motion.div>
          
          <motion.div
            className={styles.floatingIcon}
            animate={{ y: [-5, 15, -5] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <FaWrench />
          </motion.div>
          
          <motion.div
            className={styles.codeBlock}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className={styles.codeLine}>
              <span className={styles.keyword}>const</span> <span className={styles.function}>eliel</span> = {'{'}
            </div>
            <div className={styles.codeLine}>
              &nbsp;&nbsp;nome: <span className={styles.string}>'Eliel Filho'</span>,
            </div>
            <div className={styles.codeLine}>
              &nbsp;&nbsp;profissao: <span className={styles.string}>'Fullstack Dev'</span>,
            </div>
            <div className={styles.codeLine}>
              &nbsp;&nbsp;especialidade: <span className={styles.string}>'TI & Web Dev'</span>
            </div>
            <div className={styles.codeLine}>
              {'};'}
            </div>
            <div className={`${styles.codeLine} ${styles.comment}`}>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.4 }}
        onClick={handleScrollDown}
      >
        <span>Role para baixo</span>
        <FaArrowDown className={styles.arrow} />
      </motion.div>
    </section>
  );
};

export default Hero;