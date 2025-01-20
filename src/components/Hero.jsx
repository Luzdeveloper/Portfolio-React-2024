import '../styles/hero.css';
import banniere from '../assets/banniere.webp';

export function Hero() {
  return (
    <section id="Accueil" className="hero">
      <img src={banniere} alt="banniere" className="banniere"/>
      <h1>Bienvenue sur mon portfolio</h1>
      <p>Développeur FrontEnd</p>
    </section>
  );
}