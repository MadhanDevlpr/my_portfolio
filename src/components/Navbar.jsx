import React from 'react';
function Navbar() {
  function openNav() {
    document.getElementById("mySidenav").style.top = "0%";
    document.getElementById("mySidenav").style.background = "rgba(0,0,0,0.5)";
    document.getElementsByClassName('toggle-btn')[0].style.display = "none"
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.top = "-120%";
    document.getElementById("mySidenav").style.background = "transparent";
    document.getElementsByClassName('toggle-btn')[0].style.display = "block"
  }
    return (
        <div>
          <svg onClick={openNav} className="toggle-btn" viewBox="0 0 100 80" width="35" height="35">
            <rect rx="10px" ry="10px" y="5" width="100" height="10"></rect>
            <rect rx="10px" ry="10px" y="35" width="80" height="10"></rect>
            <rect rx="10px" ry="10px" y="65" width="100" height="10"></rect>
          </svg>
            <div id="mySidenav" onMouseDownCapture={closeNav} onMouseUpCapture={closeNav} onTouchMove={closeNav} onTouchMoveCapture={closeNav}  className="sidenav">
              <div className="links">
                <a className="item" href="#header" onClick={closeNav}>home</a>
                <a className="item" href="#projectss" onClick={closeNav}>Projects</a>
                <a className="item" href="#about" onClick={closeNav}>About</a>
                <a className="item" href="#skills" onClick={closeNav}>Skills</a>
                <a className="item" href="#feedback" onClick={closeNav}>Feedback</a>
              </div>
              <p>Click any where to close</p>
            </div>
        </div>
    )
}

export default Navbar
