import './style.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
