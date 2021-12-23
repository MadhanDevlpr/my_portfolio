import React from 'react'
import loader from '../images/loader.gif'
const Loader = () => {
    window.onload = function(){
        document.getElementById('loader').style.animationName = "fade"
    }
    return (
        <div id="preloader">
            <div id="loader" className="loader-wrapper">
                <img alt='Loading' src={loader}></img>
            </div>
        </div>
    )
}

export default Loader
