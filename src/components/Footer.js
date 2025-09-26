import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' }
  ];

  const services = [
    'Desenvolvimento Web',
    'Desenvolvimento Mobile',
    'Manutenção de Notebooks',
    'Upgrades de Hardware',
    'Recuperação de Dados'
  ];

  const technologies = ['React', 'Node.js', 'JavaScript', 'Python'];

  return (
    <footer className={styles.footerContainer}>
      <motion.button
        className={styles.backToTop}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </motion.button>

      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.logo}>
              <FaCode />
              Eliel Filho
            </h3>
            <p>
              Desenvolvedor Fullstack e Técnico em TI com paixão por criar 
              soluções inovadoras e resolver problemas tecnológicos.
            </p>
            <p>
              Transformando ideias em realidade através de código limpo 
              e serviços de TI profissionais.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h3>Links Rápidos</h3>
            <div className={styles.quickLinks}>
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  {link.name}
                </a>
              ))}
            </div>
            
            <h3>Serviços</h3>
            <ul>
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3>Redes Sociais</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/elielfilhodev"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/eliel-filho-8083a3359"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/5514999061535"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FaWhatsapp />
              </a>
            </div>
            
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>
                Entre em contato:
              </p>
              <p>
                <a href="mailto:elielfilhodev@hotmail.com">
                  elielfilhodev@hotmail.com
                </a>
              </p>
              <p>
                <a href="https://wa.me/5514999061535">
                  +55 14 99906-1535
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2024 Eliel Filho. Todos os direitos reservados.
          </p>
          
          <div className={styles.techStack}>
            <span>Desenvolvido com:</span>
            {technologies.map((tech, index) => (
              <span key={index} className={styles.techItem}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;