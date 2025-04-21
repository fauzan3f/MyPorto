import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

function App() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
        <Navbar scrollTop={scrollTop} />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </main>
          } />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
        
        <Footer nim="152023081" studentName="Muhammad Fauzan" />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
