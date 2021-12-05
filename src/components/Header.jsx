import React from 'react';
import video from '../images/video.mp4';

const Header = () => {
    return (
        <header id="header">
            <video src={video} autoPlay muted loop></video>
            <h1>HI THERE I'M ,<br/><span className="glow">aadithya</span></h1>
            <h3>DEVELOPER + DESIGNER</h3>
            <a id="know-more" href="#about">Know more</a>
            <a id="github" target="_blank"  rel="noreferrer" href="https://github.com/MadhanDevlpr">Github</a>
        </header>
    )
}

export default Header
