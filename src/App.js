import React, {Suspense,lazy}from 'react';
import './css/style.scss';

import Loader from './components/Loader';
const Navbar = lazy(()=>{
  return Promise.all([
    import("./components/Navbar"),
    new Promise(resolve => setTimeout(resolve, 8000))
  ])
  .then(([moduleExports]) => moduleExports);
});
const Header = lazy(() => {
  return Promise.all([
    import("./components/Header"),
    new Promise(resolve => setTimeout(resolve, 8000))
  ])
  .then(([moduleExports]) => moduleExports);
});
const Projects = lazy(()=>{
  return Promise.all([
    import("./components/Projects"),
    new Promise(resolve => setTimeout(resolve, 8000))
  ])
  .then(([moduleExports]) => moduleExports);
});
const About = lazy(()=>{
  return Promise.all([
    import("./components/About"),
    new Promise(resolve => setTimeout(resolve, 8000))
  ])
  .then(([moduleExports]) => moduleExports);
});
const Skills = lazy(()=>{
  return Promise.all([
    import("./components/Skills"),
    new Promise(resolve => setTimeout(resolve, 8000))
  ])
  .then(([moduleExports]) => moduleExports);
});
const Feedback = lazy(()=>{
  return Promise.all([
    import("./components/Feedback"),
    new Promise(resolve => setTimeout(resolve, 8000))
  ])
  .then(([moduleExports]) => moduleExports);
});
const Footer = lazy(()=>{
  return Promise.all([
    import("./components/Footer"),
    new Promise(resolve => setTimeout(resolve, 8000))
  ])
  .then(([moduleExports]) => moduleExports);
});
function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
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

