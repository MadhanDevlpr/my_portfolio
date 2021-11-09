import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import './style.css';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
