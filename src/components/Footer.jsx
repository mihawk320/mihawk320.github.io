import React from 'react';
import './styles/FooterStyle.css';

import Logo from '../images/logo.png'
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'

class Footer extends React.Component{
    render(){
        return(
            <footer className="bgDark">
            <div className="container">
                <img src={Logo} className="logo-footer" alt="logo"/>
                <ul className="list-inline">
                    <li className="list-inline-item footer-menu"><a href="#hero">Home</a></li>
                    <li className="list-inline-item footer-menu"><a href="#portfolio">Portfolio</a></li>
                    <li className="list-inline-item footer-menu"><a href="#sobre_mi">Sobre mi</a></li>
                    <li className="list-inline-item footer-menu"><a href="#habilidades">Habilidades</a></li>
                    <li className="list-inline-item footer-menu"><a href="#contacto">Contacto</a></li>
                </ul>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="https://www.instagram.com/andres_hammet/" target="_blank" rel="noopener noreferrer"><img src={Instagram} className="img-fluid" alt="instagram" /></a></li>
                    <li className="list-inline-item"><a href="https://www.facebook.com/andresmoraxd" target="_blank" rel="noopener noreferrer"><img src={Facebook} className="img-fluid" alt="Facebook" /></a></li>
                </ul>
                <small>©2020 All Rights Reserved. Created by Andres Mora</small>
            </div>
        </footer>
        );
    }
}

export default Footer