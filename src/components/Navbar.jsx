import React from 'react'

function Navbar() {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }
    return (
        <div>
            <svg onClick={openNav} className="toggle-btn" viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
            </svg>
            <div id="mySidenav" className="sidenav">
                <a href="#sidenav" className="closebtn" onClick={closeNav}>×</a>
                <a className="item"  onClick={closeNav} href="#header">Home</a>
                <a className="item"  onClick={closeNav} href="#about">About</a>
                <a className="item"  onClick={closeNav} href="#projectss">Projects</a>
                <a className="item"  onClick={closeNav} href="#feedback">Feedback</a>
            </div>
        </div>
    )
}

export default Navbar
