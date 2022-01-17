import React from "react";
import logo from "../images/logo.png"
function Navbar() {
  function openNav(){
    document.getElementById("openNav").style.top = "-50%";
    document.getElementById("openNav").style.opacity = "0";
    document.getElementById("closeNav").style.top = "-5%";
    document.getElementById("closeNav").style.opacity = "1";
    document.getElementById("sidenav").style.left = "0%";
  }
  function closeNav(){
    document.getElementById("closeNav").style.top = "-50%";
    document.getElementById("closeNav").style.opacity = "0";
    document.getElementById("openNav").style.top = "-5%";
    document.getElementById("openNav").style.opacity = "1";
    document.getElementById("sidenav").style.left = "-120%";
  }

    return (
        <div>
          <div className="navbar-m">
              <a className="p-4" href="#header">
                <img src={logo} width="20" height="20" alt=""/>
              </a>

              <button onClick={closeNav} id="closeNav" className="navbar-toggler closenav m-4 p-1" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#21212b" class="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
              <button onClick={openNav} id="openNav" className="navbar-toggler m-4 p-1" type="button">
                <svg className="toggler bi bi-list" xmlns="http://www.w3.org/2000/svg" fill="#21212b" width="20" height="20" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </button>
            </div>
            <div id="sidenav" className="sidenav-m">
                <ul>

                  <li>
                    <a className="navbar-item p-2" onClick={closeNav} href="#header">home <span className="sr-only">(current)</span></a>
                  </li>
                  <li>
                    <a className="navbar-item p-2" onClick={closeNav} href="#about">about</a>
                  </li>
                  <li>
                    <a className="navbar-item p-2" onClick={closeNav} href="#skills">skills</a>
                  </li>
                  <li>
                    <a className="navbar-item p-2" onClick={closeNav} href="#projectss">projects</a>
                  </li>
                  <li>
                    <a className="navbar-item p-2" onClick={closeNav} href="#feedback">feedback</a>
                  </li>
                </ul>
              </div>
        </div>
    )
}

export default Navbar
