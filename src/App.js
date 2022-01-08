import React from 'react';
import './css/style.scss';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
        <Loader />
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Feedback />
        <Footer />
    </div>
  );
}

export default App;

