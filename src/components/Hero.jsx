import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import muka3bg from '../assets/muka3bg.jpg';
import ade from '../assets/1.jpg';

const Hero = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  // Effect untuk animasi - hanya dijalankan sekali saat komponen dimount
  useEffect(() => {
    // Tambahkan delay kecil untuk memastikan animasi dimulai setelah render
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div 
            className={`md:w-1/2 text-center md:text-left transition-all duration-1000 ${
              isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="block">Hi, I'm</span>
              <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Muhammad Fauzan
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            AI Engineer | Machine Learning | Web Integration
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                View My Work
              </a>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="px-6 py-3 rounded-full border-2 border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-500 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-200"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          {/* Image Section */}
          <div 
            className={`md:w-1/2 transition-all duration-1000 delay-300 ${
              isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src={ade} 
                alt="Professional Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-800 dark:text-gray-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
