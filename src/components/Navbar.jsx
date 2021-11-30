import React from 'react';
function Navbar() {
  const navtoggle = () =>{
    if(window.innerWidth >= 992){
      if (window.scrollY >= 20){
        navShrink();
      }
      else{
        navExpand();
      }
    }
    else{
      navShrink();
    }
  }
  window.addEventListener('scroll',navtoggle);
  window.addEventListener('resize',navtoggle);
  window.addEventListener('load',navtoggle);
  
  const navShrink = () =>{  
    document.getElementsByClassName('navbar')[0].classList.replace('p-4','p-1');
    document.getElementsByClassName('navbar')[0].style.background = "rgba(0,0,0,0.9)";
  }
  const navExpand = () =>{
    document.getElementsByClassName('navbar')[0].classList.replace('p-1','p-4');
    document.getElementsByClassName('navbar')[0].style.background = "transparent";
  }
  
    return (
        <div>
            <nav id="navbar navbar-nav" className="navbar navbar-expand-lg navbar-dark fixed-top p-4">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active m-3">
                    <a className="nav-link"  href="#header">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item active m-3">
                    <a className="nav-link"  href="#projectss">Projects</a>
                  </li>
                  <li className="nav-item active m-3">
                    <a className="nav-link"  href="#about">About</a>
                  </li>
                  <li className="nav-item active m-3">
                    <a className="nav-link"  href="#feedback">Feedback</a>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
    )
}

export default Navbar
