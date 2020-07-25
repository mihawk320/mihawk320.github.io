import React from 'react';
import './styles/LoaderStyle.css'
import $ from 'jquery';

const Loader = () => {
    return (
        <div className="loader_bg">
            <div className="loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

setTimeout(function(){
    $('.loader_bg').fadeToggle();
},1500);

export default Loader;