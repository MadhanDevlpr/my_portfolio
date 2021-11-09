import React from 'react';

import './style.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
