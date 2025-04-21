import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
    "id": "weather-app",
    "title": "Weather App",
    "slug": "weather-app",
    "description": "Real-time weather forecasting application with location-based weather data and 5-day forecast",
    "category": "Web Development",
    "image": "https://via.placeholder.com/400x300",
    "detailsUrl": "/project/weather-app"
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
              <div className="p-2 absolute top-0 right-0 mt-6 mr-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <div className="pt-16 px-8 pb-8 flex flex-col h-full">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mb-6"></div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <Link 
                  to={project.detailsUrl}
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
