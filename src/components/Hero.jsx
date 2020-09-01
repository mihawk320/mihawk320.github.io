import React from "react";
import Arrow from "../images/arrow-right.svg";
import "./styles/HeroStyle.css";

class Hero extends React.Component {
  render() {
    return (
      <section id="hero">
        <div className="container">
          <div className="content-center">
            <h1>Portafolio - Carlos Mora</h1>
            <p>Desarrollo de software</p>
            <a href="#portfolio" className="btn btn-secondary mt-4">
              Ver más <img src={Arrow} className="arrow-right" alt="hero" />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
