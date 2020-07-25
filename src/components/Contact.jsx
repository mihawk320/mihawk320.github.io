import React from 'react';


class Contact extends React.Component{
    render(){
        return(
    <section id="contacto">
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-4">
                    <h3>¿Quieres iniciar tu proyecto? <b>Puedo ayudarte</b></h3>
                    <p className="letricas">Puedes contactarte conmigo al correo: carlosmora055@gmail.com 
                        <br/>
                        Al whatsapp al: +57 3007657614
                        <br/>
                        y para llamarme al: +57 3005875020
                        <br/>
                    </p>
                </div>
                <div className="col-md-6 mt-4">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" id="" placeholder="Nombres"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" id="" placeholder="Apellido"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="email" className="form-control" id="" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="text" className="form-control" id="" placeholder="Nombre de empresa"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="number" className="form-control" id="" placeholder="Número de teléfono (opcional)"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <a href="hero" className="btn btn-primary full-width">Enviar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        /
        
    </section>

        );
    }
}

export default Contact;

