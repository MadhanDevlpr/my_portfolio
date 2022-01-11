import React from 'react'
import name from '../images/name.png';
const Loader = () => {
    window.onload = function(){
        document.getElementById('loader').style.animationName = "fade"
    }
    return (
        <div id="preloader">
            <div id="loader" className="loader-wrapper">
                <div>Html</div>
                <div>Css</div>
                <div>Sass</div>
                <div>Javascript</div>
                <div>React.js</div>
                <div>Python</div>
                <div id="name"><img src={name} alt="Madhan Aadithya" /></div>
            </div>
        </div>
    )
}

export default Loader
