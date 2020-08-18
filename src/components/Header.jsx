import React from "react";
import Logo from "../images/logotipo.png";
import Menu from "../images/menu.svg";

import "./styles/HeaderStyle.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg fixed-top ">
          <div className="container">
            <a href="#hero">
              <img src={Logo} className="logo" alt="logo" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src={Menu} className="menu" alt="menu" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#hero">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    Portafolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sobre_mi">
                    Sobre mi
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#habilidades">
                    Habilidades
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacto">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
