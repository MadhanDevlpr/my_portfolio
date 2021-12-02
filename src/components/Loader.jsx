import React from 'react'
import loader from '../images/loader.gif';
const Loader = () => {
    return (
        <div id="preloader">
            <img id="loader" src={loader} alt="___" autoPlay loop={true}/>
            <h1>aadithya</h1>
        </div>
    )
}

export default Loader
