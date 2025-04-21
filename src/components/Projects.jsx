import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import login from '../assets/1login.png';
import register from '../assets/2register.png';
import location from '../assets/3lokasi.png';
import free from '../assets/4free.png';
import payment from '../assets/5payment.png';
import admin from '../assets/6admin.png';
import premium from '../assets/7premium.png';

const Projects = () => {
  const projects = [
    {
      id: "weather-app",
      title: "Weather App",
      slug: "weather-app",
      description: "Real-time weather forecasting application with location-based weather data and multiple subscription tiers",
      category: "Web Development",
      image: login,
      screenshots: [
        { id: 1, src: login, caption: "Login Screen" },
        { id: 2, src: register, caption: "Registration Page" },
        { id: 3, src: location, caption: "Location Selection" },
        { id: 4, src: free, caption: "Free Tier Dashboard" },
        { id: 5, src: payment, caption: "Payment Gateway" },
        { id: 6, src: admin, caption: "Admin Panel" },
        { id: 7, src: premium, caption: "Premium Dashboard" }
      ]
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 relative"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-purple-100 dark:border-gray-700"
            >
              <Link to={`/project/${project.slug}`} className="block">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-0 right-0 mt-4 mr-4">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </Link>
              
              <div className="p-6 flex flex-col h-full">
                <Link to={`/project/${project.slug}`} className="block group">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mb-4"></div>
                </Link>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.screenshots.slice(0, 4).map((screenshot) => (
                    <img 
                      key={screenshot.id}
                      src={screenshot.src}
                      alt={screenshot.caption}
                      className="w-14 h-14 object-cover rounded border border-purple-100 dark:border-gray-700"
                    />
                  ))}
                  {project.screenshots.length > 4 && (
                    <div className="w-14 h-14 bg-purple-100 dark:bg-gray-700 rounded flex items-center justify-center text-purple-600 dark:text-purple-400 font-medium">
                      +{project.screenshots.length - 4}
                    </div>
                  )}
                </div>
                
                <Link 
                  to={`/project/${project.slug}`}
                  className="flex items-center text-purple-600 dark:text-purple-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  <span>View Details</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
