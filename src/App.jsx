import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Main from './sections/Main';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
function App() {
  return (
    <Router>
      <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Main />
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      </main>
    </Router>
  );
}

export default App;
