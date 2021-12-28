import React from 'react';
import sideimg from '../images/program.svg'
const Header = () =>{
    const scrollAnime = ()=>{
        if ((window.innerWidth >= 900)){
            if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById('header').style.transform = 'perspective(1000px) scale(0.9) rotateX(5deg)';
                if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
                    document.getElementById('header').style.transform = 'perspective(1000px) scale(0.85) rotateX(12.5deg)';
                }
                if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
                    document.getElementById('header').style.transform = 'perspective(1000px) scale(0.8) rotateX(12.5deg)';
                }
                if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    document.getElementById('header').style.transform = 'perspective(1000px) scale(0.75) rotateX(25deg)';
                }
                if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    document.getElementById('header').style.transform = 'perspective(1000px) scale(0.7) rotateX(25deg)';
                }
            }
            else{
                document.getElementById('header').style.transform = 'perspective(1000px) scale(1) rotateX(0deg)';
            }
    }
    };
    window.onscroll = scrollAnime
    return (
        <header id="header">
            <h1>HI THERE I'M ,<br/><span className="glow">aadithya</span></h1>
            <h3>I build highly interactive sites with pure css and javascript, the languages well known for me are <code>Python, Html, Css, Sass, Javacript</code>, the tools and frameworks I use are <code>Vs Code, React, Flask, Git Bash, WSL.</code></h3>
            <a id="know-more" href="#about">know more</a>
            <a id="projects-btn" href="#projectss">projects</a>
            <img src={sideimg}></img>
        </header>
    )
}
export default Header
