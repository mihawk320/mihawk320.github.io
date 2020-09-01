import React from "react";

import "./styles/ServiceStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faFileCode,
  faDonate,
  faChevronCircleUp,
} from "@fortawesome/free-solid-svg-icons";

class Services extends React.Component {
  render() {
    return (
      <section id="about" className="about section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row no-gutters">
            <div className="content col-xl-5 d-flex align-items-stretch">
              <div className="content">
                <h3>Desarrollo de software de la mejor calidad</h3>
                <p>
                  Si necesitas la elaboración de tu página web, con cualquier
                  tipo de propósito, tamaño o complejidad, no te preocupes más,
                  acá está la solución que estabas buscando.
                </p>
                <a href="#hero" className="about-btn">
                  <span>VER MÁS</span>
                </a>
              </div>
            </div>
            <div className="col-xl-7 d-flex align-items-stretch">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <FontAwesomeIcon
                      icon={faFileCode}
                      data-aos-duration="1000"
                      data-aos="fade-down"
                      className="services_icons"
                    />
                    <h4>Código limpio</h4>
                    <p>
                      Código organizado de la mejor manera para facilitar el
                      desarrollo
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      data-aos-duration="1000"
                      data-aos="fade-down"
                      className="services_icons"
                    />
                    <h4>Calidad garantizada</h4>
                    <p>
                      Desarrollo tu página web con gran calidad y adaptable a
                      dispositivos móviles
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <FontAwesomeIcon
                      icon={faChevronCircleUp}
                      data-aos-duration="1000"
                      data-aos="fade-down"
                      className="services_icons"
                    />
                    <h4>Posicionamiento SEO</h4>
                    <p>
                      Haz que tu página web esté en las primeras posiciones de
                      google
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <FontAwesomeIcon
                      icon={faDonate}
                      data-aos-duration="1000"
                      data-aos="fade-down"
                      className="services_icons"
                    />
                    <h4>Excelentes precios</h4>
                    <p>Precios accesibles y métodos de pago flexibles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Services;
