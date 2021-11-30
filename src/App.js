import React, {Suspense,lazy}from 'react';
import './css/style.scss';
import loader from './images/loader.gif';
const Navbar = lazy(()=>import('./components/Navbar'));
const Header = lazy(()=>import('./components/Header'));
const Projects = lazy(()=>import('./components/Projects'));
const About = lazy(()=>import('./components/About'));
const Skills = lazy(()=>import('./components/Skills'));
const Feedback = lazy(()=>import('./components/Feedback'));
const Footer = lazy(()=>import('./components/Footer'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div id="preloader"><img width="300px" height="300px" src={loader} alt="___" autoPlay loop={true}/></div>}>
        <Navbar />
        <Header />
        <Projects />
        <About />
        <Skills />
        <Feedback />
        <Footer />
      </Suspense>
      
    </div>
  );
}

export default App;

