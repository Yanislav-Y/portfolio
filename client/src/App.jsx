import './App.css';
import { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './sections/hero/Hero';
import Benefits from './sections/benefits/Benefits';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Benefits />
    </Fragment>
  )
};

export default App;