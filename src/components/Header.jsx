import React from "react";

const Header = () =>{
    return (
        <section id="header">
            <div className="content">
                <h1>making my dreams become true by<br/><span className="glow">developing</span></h1>
                <h3>I build highly interactive sites
                with pure css and javascript,
                the languages well known for me are
                <span>Python, Html, Css, Sass, Javacript</span>, the tools and frameworks I use are
                <span>Vs Code, React, Flask, Git Bash, WSL.</span></h3>
            </div>
            <div className="circle-container"><div className="circle"></div></div>
            
        </section>
    )
}
export default Header
