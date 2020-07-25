import React from 'react'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './styles/ServiceStyle.css'


import Img1 from '../images/img1.png'
import Img2 from '../images/img2.png'
import Img3 from '../images/img3.png'

class Services extends React.Component{
    componentDidMount(){
        this.swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            },
            loop:true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
              },
          });
    }
    render(){
        return(
            <div className="contenedor-slider">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                <div className="swiper-slide"><img src={Img1} className="imagen" alt="servicio1" /></div>
                <div className="swiper-slide"><img src={Img2} className="imagen" alt="servicio2" /></div>
                <div className="swiper-slide"><img src={Img3} className="imagen" alt ="servicio3" /></div>
                
                </div>
                
                <div className="swiper-pagination"></div>
            </div>
            
        </div>
    
        );
    }
}

export default Services