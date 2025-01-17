import logo from "./assets/logo.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBook, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './styles/header.css'


export function Header() {

  return(
    <header>
      
      <nav>
        <img className="logo" src={logo} alt="logo"></img>
        <ul className="nav-links">
          <li><FontAwesomeIcon icon={faHouse} className="iconNav" /><a href="#Accueil"> Accueil</a></li>
          <li><FontAwesomeIcon icon={faUser} className="iconNav"/><a href="#Présentation"> Présentation</a></li>
          <li><FontAwesomeIcon icon={faBook} className="iconNav"/><a href="#Projets"> Projets</a></li>
          <li><FontAwesomeIcon icon={faAddressBook} className="iconNav" /><a href="#Contact"> Contact</a></li>
          <li><FontAwesomeIcon icon={faLinkedin} className="iconNav"/> <a href="https://www.aedin.com/in/florian-lhomel-8995b1285/"> Linkedin</a></li>
          <li><FontAwesomeIcon icon={faGithub} className="iconNav"/><a href="https://github.com/Luzdeveloper"> Github</a></li>
        </ul>
      </nav>
    </header>
  )
}