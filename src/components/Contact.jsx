import React, { useState } from "react";
import emailjs from "emailjs-com";
const App = () => {
  const frmContact = {
    userName: "",
    userEmail: "",
    userSecondname: "",
    userNumber: "",
    emailDetails: "",
  };
  const [contact, setContact] = useState(frmContact);
  const [showMessage, setShowMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "default_service",
        "template_2bs1pDl5",
        contact,
        "user_ysY9WbTCu5FnOYISzUkBS"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setContact(frmContact);
          setShowMessage(true);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <div className="container pt-2">
      <section id="contacto">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-4">
              <h3>
                ¿Necesitas algún servicio? <b>Contáctame</b>
              </h3>
              <p className="letricas">
                Llena este formulario para mandarme un correo electrónico ó
                <br />
                por whatsapp : +57 3007657614 ,
                <br />
                también puedes llamarme al
                <br />
                número <b>+57 3005875020</b>
                <br />
              </p>
            </div>

            <div className="col-md-6 mt-4">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        value={contact.userName}
                        name="userName"
                        onChange={handleChange}
                        placeholder="Nombres"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        value={contact.userSecondname}
                        name="userSecondname"
                        onChange={handleChange}
                        placeholder="Apellido"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      {" "}
                      <input
                        required
                        type="email"
                        className="form-control"
                        value={contact.userEmail}
                        name="userEmail"
                        onChange={handleChange}
                        placeholder="Correo"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      {" "}
                      <textarea
                        required
                        placeholder="Asunto"
                        className="form-control"
                        value={contact.emailDetails}
                        name="emailDetails"
                        onChange={handleChange}
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      {" "}
                      <input
                        type="number"
                        className="form-control"
                        value={contact.userNumber}
                        name="userNumber"
                        onChange={handleChange}
                        placeholder="Número de teléfono (opcional)"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn-primary full-width">
                      Enviar
                    </button>
                  </div>
                  <br />
                  {showMessage ? (
                    <div
                      className="alert alert-success col-md-5 mx-auto"
                      role="alert"
                    >
                      Correo enviado satisfactoriamente
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default App;
