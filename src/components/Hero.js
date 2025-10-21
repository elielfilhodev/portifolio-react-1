import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaRocket } from 'react-icons/fa';
import { HiCode, HiLightBulb } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/elielfilhodev', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/eliel-filho-8083a3359/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://x.com/elielfilho_dev', label: 'Twitter' }
  ];

  const features = [
    { icon: HiCode, text: 'Desenvolvimento Full Stack' },
    { icon: HiLightBulb, text: 'Soluções Inovadoras' },
    { icon: FaRocket, text: 'Performance Otimizada' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <motion.div
            className="shape shape-1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="shape shape-2"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="shape shape-3"
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Olá, eu sou <span className="text-gradient">Eliel Filho</span>
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Desenvolvedor Full Stack
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Especialista em criar soluções digitais inovadoras e performáticas. 
              Transformo ideias em realidade através de código limpo e tecnologias modernas.
            </motion.p>

            <motion.div
              className="hero-features"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <feature.icon className="feature-icon" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                className="btn btn-primary"
                onClick={() => scrollToSection('#projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Projetos
              </motion.button>
              
              <motion.a
                href="/cv.pdf"
                download="Eliel_Filho_CV.pdf"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Baixar CV
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-container">
              <motion.div
                className="image-placeholder"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="code-snippet">
                  <div className="code-line">
                    <span className="code-keyword">const</span> developer = {'{'}
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;name: <span className="code-string">'Eliel'</span>,
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;skills: [<span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>],
                  </div>
                  <div className="code-line">
                    &nbsp;&nbsp;passion: <span className="code-string">'Coding'</span>
                  </div>
                  <div className="code-line">{'}'}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
