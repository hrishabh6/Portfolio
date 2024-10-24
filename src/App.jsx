import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Main from './sections/Main';
import About from './sections/About';
import Projects from './sections/Projects';
function App() {
  return (
    <Router>
      <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Main />
      <About/>
      <Projects/>
      </main>
    </Router>
  );
}

export default App;
