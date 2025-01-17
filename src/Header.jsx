import logo from "./assets/logo.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './styles/header.css'


export function Header() {

  return(
    <header>
      <img src={logo} alt="logo"></img>
      <nav>
        <ul>
          <li><a href="#Accueil">Accueil</a></li>
          <li><a href="#Présentation">Présentation</a></li>
          <li><a href="#Projets">Projets</a></li>
          <li><a href="#Contact">Contact</a></li>
          <li><FontAwesomeIcon icon={faLinkedin} /> <a href="https://www.aedin.com/in/florian-lhomel-8995b1285/">Linkedin</a></li>
          <li><a href="https://github.com/Luzdeveloper">Github</a></li>
        </ul>
      </nav>
    </header>
  )
}