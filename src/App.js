import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import './css/style.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
