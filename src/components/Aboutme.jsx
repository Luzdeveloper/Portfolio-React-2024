import '../styles/aboutme.css';
import { motion } from 'framer-motion';

export function AboutMe() {
  return (
    <motion.section
      id="AboutMe"
      className="aboutme"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>À propos de moi</h2>
      <p>Je suis un développeur FrontEnd passionné par la création de sites web interactifs et modernes.</p>
    </motion.section>
  );
}