import React from "react";
import "./styles/FooterStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Logo_footer from "../images/logotipo.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-distributed mt-5">
        <div className="footer-right">
          <a
            href="https://www.facebook.com/andresmoraxd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://www.instagram.com/andres_hammet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=573007657614"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://github.com/mihawk320"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className="footer-left">
          <p className="footer-links">
            <a href="#hero">Home</a>

            <a href="#portfolio">Portafolio</a>

            <a href="#sobre_mi">Sobre mi</a>

            <a href="#habilidades">Habilidades</a>

            <a href="#contacto">Contacto</a>
          </p>

          <p>Andres Franco &copy; 2020</p>
        </div>
        <div className="logo__footer">
          <img
            src={Logo_footer}
            className="image_logo_footer"
            alt="logo_footer"
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
