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
if (window.location.href == "https://localhost:3000/about" || window.location.href == "https://madhanaadithya.studio/about"){
  document.getElementsByClassName('about').style = "border-bottom:2px solid #fcd3bd";
}
    return (
        <div>
          <div className="desktop">

              <ul>
              <a className="logo" href="#header">
                <img src={logo} width="40" height="40" alt=""/>
              </a>
                <li><a className="home" href="/">Home</a></li>
                <li><a className="about" href="/about">About</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
          </div>
          <div className="navbar-m">
              <a className="p-4" href="#header">
                <img src={logo} width="20" height="20" alt=""/>
              </a>

              <button onClick={closeNav} id="closeNav" className="navbar-toggler closenav m-4 p-1" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fcd3bd" className="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
              <button onClick={openNav} id="openNav" className="navbar-toggler m-4 p-1" type="button">
                <svg className="toggler bi bi-list" xmlns="http://www.w3.org/2000/svg" fill="#fcd3bd" width="20" height="20" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </button>
            </div>
            <div id="sidenav" className="sidenav-m">
                <ul>

                  <li>
                    <a className="navbar-item p-2" onClick={closeNav} href="/">home <span className="sr-only">(current)</span></a>
                  </li>
                  <li>
                    <a className="navbar-item p-2" onClick={closeNav} href="/about">about</a>
                  </li>
                  <li>
                    <a className="navbar-item p-2" onClick={closeNav} href="/skills">skills</a>
                  </li>
                  <li>
                    <a className="navbar-item p-2" onClick={closeNav} href="/projects">projects</a>
                  </li>
                  <li>
                    <a className="navbar-item p-2" onClick={closeNav} href="/feedback">feedback</a>
                  </li>
                </ul>
                <a className="link-b" href="https://github.com/MadhanDevlpr/" target="_blank" rel="noreferrer"><svg aria-hidden="true" width="30" focusable="false" data-prefix="fab" data-icon="github-square" className="svg-inline--fa fa-github-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4 .2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9 .2 36.5 .2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9 .4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7 .6 3.9 1.9 .3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2 .2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7 .9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2 .4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8 .9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1 .9-1.1 2.8-.9 4.3 .6 1.3 1.3 1.8 3.3 .9 4.1zm-9.1-9.1c-.9 .6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9 .9-2.4 .4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5 .9-.9 2.4-.4 3.5 .6 1.1 1.3 1.3 2.8 .4 3.5zm-6.7-7.4c-.4 .9-1.7 1.1-2.8 .4-1.3-.6-1.9-1.7-1.5-2.6 .4-.6 1.5-.9 2.8-.4 1.3 .7 1.9 1.8 1.5 2.6z"></path></svg></a>
                <a className="link-b" href="https://codepen.io/madhanaadithya" target="_blank" rel="noreferrer"><svg aria-hidden="true" width="30" focusable="false" data-prefix="fab" data-icon="codepen" className="svg-inline--fa fa-codepen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.3 159.7l-234-156c-7.987-4.915-16.51-4.96-24.57 0l-234 156C3.714 163.7 0 170.8 0 177.1v155.1c0 7.143 3.714 14.29 9.715 18.29l234 156c7.987 4.915 16.51 4.96 24.57 0l234-156c6-3.999 9.715-11.14 9.715-18.29V177.1c-.001-7.142-3.715-14.29-9.716-18.28zM278 63.13l172.3 114.9-76.86 51.43L278 165.7V63.13zm-44 0v102.6l-95.43 63.72-76.86-51.43L234 63.13zM44 219.1l55.14 36.86L44 292.8v-73.71zm190 229.7L61.71 333.1l76.86-51.43L234 346.3v102.6zm22-140.9l-77.71-52 77.71-52 77.71 52-77.71 52zm22 140.9V346.3l95.43-63.72 76.86 51.43L278 448.8zm190-156l-55.14-36.86L468 219.1v73.71z"></path></svg></a>
              </div>
        </div>
    )
}

export default Navbar
