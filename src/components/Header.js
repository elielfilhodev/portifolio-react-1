import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaCode, FaUser, FaCogs, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = ({ activeSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Início', icon: FaUser },
    { id: 'about', label: 'Sobre', icon: FaUser },
    { id: 'services', label: 'Serviços', icon: FaCogs },
    { id: 'portfolio', label: 'Portfólio', icon: FaBriefcase },
    { id: 'contact', label: 'Contato', icon: FaEnvelope }
  ];

  const handleNavClick = (sectionId) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`${styles.headerContainer} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={styles.nav}>
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick('hero')}
        >
          <FaCode className={styles.logoIcon} />
          Eliel Filho
        </motion.div>

        <ul className={styles.navLinks}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.id}
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button onClick={() => handleNavClick(item.id)} className={styles.navButton}>
                  <Icon size={16} />
                  {item.label}
                </button>
              </motion.li>
            );
          })}
        </ul>

        <motion.button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className={styles.mobileNavLinks}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.id}
                    className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''}`}
                  >
                    <button onClick={() => handleNavClick(item.id)} className={styles.mobileNavButton}>
                      <Icon size={18} />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;