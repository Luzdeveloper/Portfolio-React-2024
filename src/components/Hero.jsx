import '../styles/hero.css';
import banniere from '../assets/banniere.webp';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <motion.section
      id="Accueil"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src={banniere} alt="banniere" className="banniere" />
      <div className="textContainer">
        <h1>Florian Lhomel</h1>
        <p>Bienvenue sur mon portfolio</p>
        <p>Développeur FrontEnd</p>
      </div>
    </motion.section>
  );
}