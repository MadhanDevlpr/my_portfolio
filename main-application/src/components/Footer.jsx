import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="wrap">
                <a target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr">
                    <i className="fab fa-github"></i>
                </a><br />
                <a target="_blank" rel="noreferrer" href="https://codepen.io/madhanaadithya">
                    <i className="fab fa-codepen"></i>
                </a>
            </div>
            <a class="github-button" href="https://github.com/MadhanDevlpr/React.js-Portfolio" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star MadhanDevlpr/React.js-Portfolio on GitHub">Star</a><br />
            <p>Made by Madhan Aadithya with React.js</p>
            <p>&copy; 2021, Open sourced with MIT License</p>
        </div>
    )
}

export default Footer
