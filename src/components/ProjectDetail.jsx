import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, User, Github } from 'lucide-react';
import login from '../assets/1login.png';
import register from '../assets/2register.png';
import location from '../assets/3lokasi.png';
import free from '../assets/4free.png';
import payment from '../assets/5payment.png';
import admin from '../assets/6admin.png';
import premium from '../assets/7premium.png';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(null);

  const projectsData = {
    "weather-app": {
      id: "weather-app",
      title: "SkyBeacon",
      slug: "weather-app",
      description: "A comprehensive weather application built with Laravel and PHP. The app features real-time weather data, location-based forecasts, and multiple subscription tiers for enhanced features.",
      longDescription: `This Weather App is a full-stack project that demonstrates a complete user journey from registration to premium features. It includes:

• User authentication with secure login and registration
• Location-based weather services
• Free tier with basic weather information
• Premium subscription with enhanced forecasts and detailed analytics
• Payment integration for subscription management
• Admin panel for user management and analytics
• Responsive design for all devices
      `,
      category: "Web Development",
      date: "Januari 2024",
      client: "Personal Project",
      technologies: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Blade Template", "API Integration"],
      githubUrl: "https://github.com/fauzan3f/uas-weatherapp",
      mainImage: login,
      screenshots: [
        { id: 1, src: login, caption: "Login Screen - Secure authentication with email and password" },
        { id: 2, src: register, caption: "Registration Page - New user signup with validation" },
        { id: 3, src: location, caption: "Location Selection - Find weather for any location worldwide" },
        { id: 4, src: free, caption: "Free Tier Dashboard - Basic weather information for casual users" },
        { id: 5, src: payment, caption: "Payment Gateway - Secure subscription management with Stripe" },
        { id: 6, src: admin, caption: "Admin Panel - User management and application analytics" },
        { id: 7, src: premium, caption: "Premium Dashboard - Enhanced forecasts and detailed weather data" }
      ]
    }
  };

  useEffect(() => {
    // Simulate API fetch
    const fetchProject = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProject = projectsData[slug];
        setProject(foundProject || null);
        if (foundProject) {
          setActiveImage(foundProject.mainImage);
        }
        setLoading(false);
      }, 500);
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="animate-spin w-12 h-12 border-4 border-purple-600 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="flex items-center text-purple-600 dark:text-purple-400 hover:text-blue-500 dark:hover:text-blue-400"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>
        
        {/* Project title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-500 text-white">
            <Tag className="w-4 h-4 mr-1" />
            {project.category}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-purple-100 dark:border-gray-700">
            <Calendar className="w-4 h-4 mr-1" />
            {project.date}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-purple-100 dark:border-gray-700">
            <User className="w-4 h-4 mr-1" />
            {project.client}
          </span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-purple-100 dark:border-gray-700 mb-6">
              <img 
                src={activeImage} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>
            
            {/* Thumbnail navigation */}
            <div className="flex space-x-3 overflow-x-auto pb-2 mb-6">
              {project.screenshots.map((screenshot) => (
                <button
                  key={screenshot.id}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                    activeImage === screenshot.src 
                      ? 'border-purple-600 dark:border-purple-400' 
                      : 'border-transparent'
                  }`}
                  onClick={() => setActiveImage(screenshot.src)}
                >
                  <img 
                    src={screenshot.src} 
                    alt={`Thumbnail ${screenshot.id}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Project description */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-purple-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
              <div className="prose dark:prose-invert prose-purple max-w-none">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="whitespace-pre-line text-gray-700 dark:text-gray-300">
                  {project.longDescription}
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-purple-100 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Details</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-gray-700 text-purple-700 dark:text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Links</h3>
                  <div className="mt-2">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Screenshots section */}
            <div className="mt-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-purple-100 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Screenshots</h2>
              <div className="space-y-4">
                {project.screenshots.map((screenshot) => (
                  <div key={screenshot.id} className="flex flex-col space-y-2">
                    <button 
                      onClick={() => setActiveImage(screenshot.src)}
                      className="text-left hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {screenshot.caption.split(' - ')[0]}
                      </h3>
                    </button>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {screenshot.caption.includes(' - ') ? screenshot.caption.split(' - ')[1] : ''}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
