import './App.css';
import { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './sections/hero/Hero';
import Benefits from './sections/benefits/Benefits';
import Projects from './sections/projects/Projects';
import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Benefits />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </Fragment>
  )
};

export default App;