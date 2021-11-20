import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top p-3">
              <a className="navbar-brand" href="#header">Madhan</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item m-3">
                    <a className="nav-link" href="#header">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item m-3">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item m-3">
                    <a className="nav-link" href="#projectss">Projects</a>
                  </li>
                  <li className="nav-item m-3">
                    <a className="nav-link" href="#feedback">Feedback</a>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
    )
}

export default Navbar
