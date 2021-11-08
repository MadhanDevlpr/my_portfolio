import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="wrap">
                <a target="_blank" rel="noreferrer" href="github.com/MadhanDevlpr">
                    <i className="fab fa-github"></i>
                </a><br />
                <a target="_blank" rel="noreferrer" href="https://codepen.io/madhanaadithya">
                    <i className="fab fa-codepen"></i>
                </a>
            </div>
            <p>Made by Madhan Aadithya with React.js</p>
            <p>&copy; 2021, Open sourced with MIT License</p>
        </div>
    )
}

export default Footer
