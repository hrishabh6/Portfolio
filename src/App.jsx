import  { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Main from './sections/Main';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Main id="main" />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
      <Analytics />
    </main>
  );
}

const Wrapper = () => (
  <Router>
    <App />
  </Router>
);

export default Wrapper;
