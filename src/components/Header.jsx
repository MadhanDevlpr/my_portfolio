import React from 'react';
import background from '../images/background.png'
const Header = () => {
    return (
        <header className="parallax-window" data-parallax="scroll" data-image-src={background} id="header">
            <h1>HI THERE I'M ,<br/><span className="glow">aadithya</span></h1>
            <h3>DEVELOPER + DESIGNER</h3>
            <a id="know-more" href="#about">Know more</a>
            <a id="github" target="_blank"  rel="noreferrer" href="https://github.com/MadhanDevlpr">Github</a>
        </header>
    )
}

export default Header
