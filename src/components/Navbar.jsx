import React from 'react';
function Navbar() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
    return (
        <div>
          <svg onClick={openNav} className="toggle-btn" viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="15"></rect>
          <rect y="30" width="100" height="15"></rect>
          <rect y="60" width="100" height="15"></rect>
          </svg>
            <div id="mySidenav" className="sidenav">
              <a className="closebtn" onClick={closeNav}>×</a>
              <div className="links">
              <a onClick={closeNav} className="item" href="#header">home</a>
              <a onClick={closeNav} className="item" href="#projectss">Projects</a>
              <a onClick={closeNav} className="item" href="#about">About</a>
              <a onClick={closeNav} className="item" href="#feedback">Feedback</a>
              </div>
            </div>
        </div>
    )
}

export default Navbar
