import React from 'react';
import logo from '../images/sideimg.png';
const username = window.prompt('What\'s your Name?: ');

const Header = () => {
    return (
        <header>
            <h1>Hello,<br/> I'm <span class="glow">Aadithya</span></h1>
            <h3>Hi, {username}.</h3>
            <a id="know-more" href="#about">Know more</a>
            <a id="github" target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr">Github</a>
            <img src={logo} alt=""></img>
            <p>Scroll down 	&#8594;</p>
        </header>
    )
}

export default Header
