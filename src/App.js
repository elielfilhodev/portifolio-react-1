import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styles from './components/App.module.css';


function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.backgroundElements}>
        <div className={styles.gridPattern} />
        <div className={styles.floatingOrb} />
        <div className={styles.floatingOrb} />
        <div className={styles.floatingOrb} />
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.mainContent}
        >
          <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
          
          <main>
            <Hero onSectionChange={handleSectionChange} />
            <About onSectionChange={handleSectionChange} />
            <Services onSectionChange={handleSectionChange} />
            <Portfolio onSectionChange={handleSectionChange} />
            <Contact onSectionChange={handleSectionChange} />
          </main>
          
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
