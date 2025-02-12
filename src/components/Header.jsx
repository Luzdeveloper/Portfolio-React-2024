import '../styles/header.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={isOpen ? 'open' : ''}>
        <ul>
          <li><a href="#Accueil">Accueil</a></li>
          <li><a href="#AboutMe">À propos</a></li>
          <li><a href="#Compétences">Compétences</a></li>
          <li><a href="#Projets">Projets</a></li>
          <li><a href="#Hobbies">Hobbies</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </motion.header>
  );
}


