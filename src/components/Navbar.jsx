import React from 'react';
function Navbar() {
  function scrollNav(){
    if(window.innerWidth >=900){
      if (window.scrollY >= 60 ){
        document.getElementById('nav').style.background="#000000"
        document.getElementById('nav').classList.replace('p-4','p-0')
      }
      else{
        document.getElementById('nav').style.background="#0000000e"
        document.getElementById('nav').classList.replace('p-0','p-4')
      }
    }
    else{
      document.getElementById('nav').style.background="#000000"
        document.getElementById('nav').classList.replace('p-4','p-0')
    }
  }
  window.addEventListener('resize',scrollNav)
  window.addEventListener('scroll',scrollNav)
  window.addEventListener('load',scrollNav)

    return (
        <div>
          <nav id="nav" className="navbar fixed-top p-4 navbar-expand-lg navbar-dark">
              <a className="navbar-brand p-4" style={{color:"#00ffff",fontSize:"22px",fontWeight:"900"}} href="#header">m.</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className='nav-object'>
                    <a className="item" href="#header">home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className='nav-object'>
                    <a className="item" href="#projectss">projects</a>
                  </li>
                  <li className='nav-object'>
                    <a className="item" href="#about">about</a>
                  </li>
                  <li className='nav-object'>
                    <a className="item" href="#skills">skills</a>
                  </li>
                  <li className='nav-object'>
                    <a className="item" href="#feedback">feedback</a>
                  </li>
                  <li className="nav-object dropdown">
                    <a className="item dropdown-toggle" href="#links" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      links
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" target="_blank" rel="noreferrer" href="https://github.com/MadhanDevlpr">github</a>
                      <a className="dropdown-item" target="_blank" rel="noreferrer" href="https://codepen.io/madhanaadithya">codepen</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" target="_blank" rel="noreferrer" href="https://cssbattle.dev/player/madhandev">cssbattle.dev</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
    )
}

export default Navbar
