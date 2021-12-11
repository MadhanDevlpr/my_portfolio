import React from 'react';
import anime from 'animejs/lib/anime.es.js';

const Header = () => {
    const boxes = document.querySelectorAll('.box');
    anime({
        targets: boxes,
        scale: [
          {value: .1, easing: 'easeOutSine', duration: 500},
          {value: 1, easing: 'easeOutSine', duration: 1200}
        ],
        delay: anime.stagger(200, {grid: [14, 14], from: 'center'}),
        loop:true
      });

    return (
        <header id="header">
            <h1>HI THERE I'M ,<br/><span className="glow">aadithya</span></h1>
            <h3>I'm a web developer who build interactive site with css, javascript, I also make my own UI Designs.</h3>
            <a id="know-more" href="#about">know more</a>
            <div className="container">
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>

               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>

               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>

               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>

               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>

               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>

               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>

               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>

               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>

               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>

               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>

               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>

               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>

               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
               <div className="box"></div>
            </div>
        </header>
    )
}

export default Header
