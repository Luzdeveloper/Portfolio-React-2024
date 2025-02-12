import '../styles/footer.css';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>&copy; 2024 Florian Lhomel. Tous droits réservés.</p>
    </motion.footer>
  );
}