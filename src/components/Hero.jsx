import '../styles/hero.css';
import banniere from '../assets/banniere.webp';

export function Hero() {
  return (
    <section id="Accueil" className="hero">
      <img src={banniere} alt="banniere" className="banniere"/>
      <div className="textContainer">
      <h1>Florian Lhomel</h1>
      <p>Bienvenue sur mon portfolio</p>
      <p>Développeur FrontEnd</p>
      </div>
    </section>
  );
}