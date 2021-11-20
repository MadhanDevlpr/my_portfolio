import React from 'react';
import profile from '../images/profile.png';

function About() {
    return (
        <div id="about">
                <div className="text">
                    <h1>Who I am.</h1>
                    <img src={profile} className="img-fluid float-lg-start" width="40%" alt="..."/>
                    <p>
                        I'm Madhan Aadithya, I'm a Front-end Developer and a Pythonista I'm studying 8th Grade and started programming at 11 years old,
                        My first language is Python and I made more practice on it and atlast I started using Flask, But I need Html to create websites with Flask so I learnt Html very well and
                        learnt Css for styling the Html, But this was not enough, I just created Static websites but now in the recent past I've learnt javascript and learnt to create Dynamic websites.
                        I've also learnt Bootstrap for making some lightweight projects.
                    </p>
                </div>
        </div>
    )
}

export default About
