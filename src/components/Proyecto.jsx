import React from "react";

class Proyecto extends React.Component {
  render() {
    return (
      <div
        className="col-md-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        <div className="portfolio-container">
          <img
            src={this.props.image}
            className="img-fluid"
            alt="Portfolio 01"
          />
        </div>
        <div className="row">
          <div className="col-6 pr-0">
            <button
              type="button"
              onClick={this.props.funcion}
              className="btn botonxd btn-lg btn-block"
            >
              {this.props.name}
            </button>
          </div>
          <div className="col-6 pl-0">
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn botonxd2 btn-lg btn-block">
                Ir a la página
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Proyecto;
