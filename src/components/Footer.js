import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaCode } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/elielfilhodev', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/eliel-filho-8083a3359/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://x.com/elielfilho_dev', label: 'Twitter' }
  ];

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-logo">
              <FaCode className="logo-icon" />
              Eliel Filho
            </h3>
            <p className="footer-description">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras 
              e transformar ideias em realidade através do código.
            </p>
            <div className="footer-social">
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
            </div>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Links Rápidos</h4>
            <ul className="footer-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Contato</h4>
            <div className="contact-info">
              <p className="contact-item">
                <strong>Email:</strong> elielfilhodev@hotmail.com
              </p>
              <p className="contact-item">
                <strong>Telefone:</strong> +55 (14) 99906-1535
              </p>
              <p className="contact-item">
                <strong>Localização:</strong> Taquarituba, SP - Brasil
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Eliel Filho. Todos os direitos reservados.
            </p>
            <p className="footer-made">
              Feito com <FaHeart className="heart-icon" /> por Eliel Filho
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
