import React from 'react';
import { Heart } from 'lucide-react';
import PropTypes from 'prop-types';

const Footer = ({ studentName }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-purple-200 dark:border-gray-700 pt-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              &copy; {currentYear} {studentName}. All rights reserved.
            </p>

          </div>
          
          <div className="hidden md:block">
            <nav className="flex space-x-6">
              <a 
                href="#home" 
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  nim: PropTypes.string.isRequired,
  studentName: PropTypes.string.isRequired,
};

export default Footer;
