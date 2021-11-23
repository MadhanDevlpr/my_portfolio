import React from 'react';

const Header = () => {
    return (
        <header id="header">
            <h1>Hello,<br/> I'm <span className="glow">Aadithya</span></h1>
            <h3>Front end Developer</h3>
            <a id="know-more" href="#about">Know more</a>
            <a id="github" target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr">Github</a>
            <div className="terminal">
                <div className="innertext">
                    <span><p class="dollar">$ &nbsp;</p><p> Feel free to contribute to this on <a target="_blank" href="https://github.com/MadhanDevlpr/React.js-Portfolio">github</a>,</p></span>
                    <span><p class="dollar">$ &nbsp;</p><p> I've made this portfolio with Reactjs and Css,</p></span>
                    <span><p class="dollar">$ &nbsp;</p><p> <a target="_blank" href="https://madhandevlpr.github.io/React.js-Portfolio/">Documentation</a></p></span>
                </div>
            </div>
        </header>
    )
}

export default Header
