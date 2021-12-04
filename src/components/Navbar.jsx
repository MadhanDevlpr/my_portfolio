import React from 'react';
function Navbar() {
  function openNav() {
    document.getElementById("mySidenav").style.top = "0%";
    document.getElementById("mySidenav").style.background = "rgba(0,0,0,0.5)";
    document.getElementsByClassName('toggle-btn')[0].style.display = "none"
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.top = "-120%";
    document.getElementById("mySidenav").style.background = "transparent";
    document.getElementsByClassName('toggle-btn')[0].style.display = "block"
  }
    return (
        <div>
          <svg onClick={openNav} className="toggle-btn" viewBox="0 0 100 80" width="40" height="40">
            <rect rx="10px" ry="10px" y="5" width="100" height="10"></rect>
            <rect rx="10px" ry="10px" y="35" width="80" height="10"></rect>
            <rect rx="10px" ry="10px" y="65" width="100" height="10"></rect>
          </svg>
            <div id="mySidenav" className="sidenav">
              <a className="closebtn" onClick={closeNav}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
              </a>
              <div className="links">
              <a className="item" href="#header" onClick={closeNav}>home</a>
              <a className="item" href="#projectss" onClick={closeNav}>Projects</a>
              <a className="item" href="#about" onClick={closeNav}>About</a>
              <a className="item" href="#skills" onClick={closeNav}>Skills</a>
              <a className="item" href="#feedback" onClick={closeNav}>Feedback</a>
              </div>
            </div>
        </div>
    )
}

export default Navbar
