import React from "react";
import "./styles/SkillStyle.css";
import Html from "../images/html.png";
import Css from "../images/css.png";
import Js from "../images/js.png";
import Reactxd from "../images/react.png";
import Php from "../images/php.png";
import Mysql from "../images/mysql.png";

class Skill extends React.Component {
  render() {
    return (
      <section id="habilidades">
        <div className="container">
          <div className="content-center">
            <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
              <b>Habilidades</b>
            </h2>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
              Tengo habilidad en{" "}
              <b>HTML, CSS, JavaScript, jQuery, React, Mysql, Php y Git.</b>{" "}
            </p>
          </div>
          <div className="row">
            <div
              className="col-md-6 display"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              <img src={Html} alt="html" />
              <img src={Css} alt="css" />
              <img src={Js} alt="js" />
            </div>
            <div
              className="col-md-6 display"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="0"
            >
              <img src={Reactxd} alt="react" />
              <img src={Php} alt="php" />
              <img src={Mysql} alt="mysql" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skill;
