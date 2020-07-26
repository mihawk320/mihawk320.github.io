import React from 'react'
import Proyecto from './Proyecto'
import Swal from 'sweetalert2'
import './styles/PortafolioStyle.css'
import Serviteca from '../images/serviteca.png'
import Hackaton from '../images/hackaton.png'
import Goepav from '../images/goepav.png'
import Adoptamed from '../images/adoptamed.png'



class Portafolio extends React.Component{
    constructor(props){
        super(props);
        this.serviteca = this.serviteca.bind(this);
        this.hackaton = this.hackaton.bind(this);
        this.goepav = this.goepav.bind(this);
        this.adoptamed = this.adoptamed.bind(this);
    }
    serviteca(){
        Swal.fire({
            title: 'Serviteca',
            text: 'Página realizada con HTML, CSS y JavaScript de un taller de mecánica, una simple muestra de diseño',
            imageUrl: 'https://andresmora.netlify.app/static/media/serviteca.6f5c5c1e.png',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }
    hackaton(){
        Swal.fire({
            title: 'Hackaton',
            text: 'Página realizada mientras estuve en una academia, la misión era construir una página en 4 horas con React, y este fue el resultado',
            imageUrl: 'https://andresmora.netlify.app/static/media/hackaton.e9c19738.png',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
     }
     goepav(){
        Swal.fire({
            title: 'Goepav',
            text: 'Página realizada con PHP, Jquery y Ajax, que si bien no es usada realmente, la hice para adjuntarla al portafolio (Contiene pagos por paypal pero el host gratuito no lo admite, F)',
            imageUrl: 'https://andresmora.netlify.app/static/media/goepav.a117c83d.png',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
     }
     adoptamed(){
        Swal.fire({
            title: 'AdoptaMed',
            text: 'Página de adopción animal la cual está siendo construida en este momento, pero hay un adelanto. Es en React, SPA',
            imageUrl: 'https://andresmora.netlify.app/static/media/adoptamed.9c0fd2ff.png',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
     }


    render(){
        return(
            <section id="portfolio">
        <div className="container-fluid">
            <div className="content-center">
                <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0" >Mi portafolio</h2>
                <p>Aquí hay ejemplos de los diferentes proyectos que he desarrollado</p>
            </div>
            <div className="row">
                
                <Proyecto image={Serviteca} name="serviteca" link="https://serviteca.netlify.app/" funcion={this.serviteca} />
                <Proyecto image={Hackaton} name="hackathon" link="https://hackathon-makaia.netlify.app/" funcion={this.hackaton} />
                <Proyecto image={Goepav} name="goepav" link="http://goepav.000webhostapp.com/" funcion={this.goepav} />
                <Proyecto image={Adoptamed} name="adoptamed" link="http://goepav.000webhostapp.com/" funcion={this.adoptamed} />


            </div>
            <div className="text-center mt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                <p className="letricas">¿Listo para iniciar tu proyecto?</p>
                <a href="#contacto" className="text-dark"><b>Te ayudo con eso</b></a>
            </div>
        </div>
    </section>
 
 
        );
 

    }
}




export default Portafolio;