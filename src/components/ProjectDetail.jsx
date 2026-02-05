import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, User, Github } from 'lucide-react';
import login from '../assets/skybeacon/1login.png';
import register from '../assets/skybeacon/2register.png';
import location from '../assets/skybeacon/3lokasi.png';
import free from '../assets/skybeacon/4free.png';
import payment from '../assets/skybeacon/5payment.png';
import admin from '../assets/skybeacon/6admin.png';
import premium from '../assets/skybeacon/7premium.png';
import smokelogin from '../assets/finalsmoke/1form.png';
import sm2 from '../assets/finalsmoke/1form2.png';
import smv from '../assets/finalsmoke/2formvape.png';
import smv2 from '../assets/finalsmoke/3formpuff.png';
import smc from '../assets/finalsmoke/3formrok.png';
import smfn from '../assets/finalsmoke/4formnic.png';
import smfc from '../assets/finalsmoke/4formrok.png';
import smtampilan from '../assets/finalsmoke/5tampilan.png';
import smmotiv from '../assets/finalsmoke/6motiv.png';
import smprogg from '../assets/finalsmoke/7progg.png';
import smbadge from '../assets/finalsmoke/8badge.png';
import smtips from '../assets/finalsmoke/9tips.png';
import smstats from '../assets/finalsmoke/10stats.png';
import smtimeline from '../assets/finalsmoke/11timeline.png';
import smsetting from '../assets/finalsmoke/12setting.png';
import fcdash from '../assets/faceid/1.jpeg';
import fcreg from '../assets/faceid/2.jpeg';
import fctrain from '../assets/faceid/3.jpeg';
import fccomplete from '../assets/faceid/4.jpeg';
import fcopen from '../assets/faceid/5.jpeg';
import fcunlock from '../assets/faceid/6.jpeg';
import fclocked from '../assets/faceid/7.jpeg';

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
      longDescription: `This Weather App is a full-stack project that demonstrates a complete user journey from registration to premium features. It includes :

• User authentication with secure login and registration
• Location-based weather services
• Free tier with basic weather information
• Premium subscription with enhanced forecasts and detailed analytics
• Payment integration for subscription management
• Admin panel for user management and analytics
• Responsive design for all devices, including mobile and desktop
      `,
      category: "Web Development",
      date: "Januari 2024",
      client: "Personal Project",
      technologies: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Blade Template", "API Integration"],
      githubUrl: "https://github.com/fauzan3f/uas-weatherapp",
      mainImage: login,
      screenshots: [
        { id: 1, src: login, caption: "1. Login Screen - Secure authentication with email and password" },
        { id: 2, src: register, caption: "2. Registration Page - New user signup with validation" },
        { id: 3, src: location, caption: "3. Location Selection - Find weather for any location worldwide" },
        { id: 4, src: free, caption: "4. Free Tier Dashboard - Basic weather information for casual users" },
        { id: 5, src: payment, caption: "5. Payment Gateway - Secure subscription management with Stripe" },
        { id: 6, src: admin, caption: "6. Admin Panel - User management and application analytics" },
        { id: 7, src: premium, caption: "7. Premium Dashboard - Enhanced forecasts and detailed weather data" }
      ]
    },
    "finalsmoke": {
      id: "finalsmoke",
      title: "FinalSmoke",
      slug: "finalsmoke",
      description: "FinalSmoke+ is a modern web application built with React, designed to help users monitor and reduce their cigarette or vape consumption. The app provides a personalized experience with daily tracking, health and financial statistics, and interactive onboarding to guide users through their quitting journey.",
      longDescription: `This project demonstrates a complete user journey and includes :

• Interactive onboarding for personalized setup
• Daily logging of cigarette/vape consumption
• Real-time health progress and money saved statistics
• Responsive design for seamless use on all devices
• Local data storage for privacy and offline access
• Intuitive navigation with mobile-friendly dropdown menu
• Customizable user settings and progress visualization
FinalSmoke+ empowers users to take control of their habits with actionable insights and a user-centric interface.`,
      category: "Web Development",
      date: "Juli 2025",
      client: "Personal Project",
      technologies: ["React", "React Router DOM", "React Scripts", "Jest & React Testing Library", "Web Vitals", "CSS"],
      githubUrl: "https://github.com/username/finalsmoke",
      mainImage: smokelogin,
      screenshots: [
        { id: 1, src: sm2, caption: "1. Insert age - User enters their age to personalize the smoking cessation plan" },
        { id: 2, src: smv, caption: "2. Select Vape or Cigar - Choose between vape or traditional cigarette smoking habits" },
        { id: 3, src: smv2, caption: "3. If choose vape, select puff size - Customize vaping preferences for accurate tracking" },
        { id: 4, src: smc, caption: "4. If choose cigar, select cigars per day - Set daily cigarette consumption baseline" },
        { id: 5, src: smfn, caption: "5. Select nicotine level - Configure nicotine strength for personalized reduction plan" },
        { id: 6, src: smfc, caption: "6. Insert cigarette sticks per day - Track daily smoking frequency for progress monitoring" },
        { id: 7, src: smtampilan, caption: "7. Dashboard, with smoke counter and progress bar - Main interface showing smoking reduction progress" },
        { id: 8, src: smmotiv, caption: "8. Benefits for stop smoking - Educational content about health benefits of quitting" },
        { id: 9, src: smprogg, caption: "9. Journey progress - Visual representation of user's smoking cessation journey" },
        { id: 10, src: smbadge, caption: "10. Badge for stop smoking - Achievement system to motivate continued progress" },
        { id: 11, src: smtips, caption: "11. Tips for stop smoking - Helpful advice and strategies for successful quitting" },
        { id: 12, src: smstats, caption: "12. Statistics for stop smoking - Detailed analytics of smoking reduction progress" },
        { id: 13, src: smtimeline, caption: "13. Timeline for stop smoking - Chronological view of user's quitting journey" },
        { id: 14, src: smsetting, caption: "14. Settings for change the daily habit and money saving - Configuration options for habits and financial tracking" },
      ]
    },
    "neurolock": {
      id: "neurolock",
      title: "NeuroLock",
      slug: "neurolock",
      description: "A smart door lock system integrated with computer vision for secure access control using face recognition.",
      longDescription: `This project implements a secure door access system using facial recognition technology. Key features include:

• Standby Mode: Initial system state monitoring door status (LOCKED).
• User Registration: Admin interface to register new users and associate identities.
• Face Dataset Collection: Automated capture of 15 face samples for training.
• Model Training: Processing collected data to train the recognition model.
• Real-time Recognition: Continuous camera monitoring for known faces.
• Access Control: Automatic door unlocking upon successful identification.
• Intruder Detection: Denies access to unregistered faces and maintains locked state.`,
      category: "Deep Learning",
      date: "August 2025",
      client: "Personal Project",
      technologies: ["Python", "OpenCV", "Face Recognition", "Tkinter"],
      githubUrl: "https://github.com/username/neurolock",
      mainImage: fcdash,
      screenshots: [
        { id: 1, src: fcdash, caption: "1. System Standby - Initial dashboard state with door locked" },
        { id: 2, src: fcreg, caption: "2. User Registration - Admin form to register new face data" },
        { id: 3, src: fctrain, caption: "3. Data Collection - Capturing 15 face images for training dataset" },
        { id: 4, src: fccomplete, caption: "4. Registration Complete - User appears in registered list" },
        { id: 5, src: fcopen, caption: "5. Access Granted - System running and door unlocked for user" },
        { id: 6, src: fcunlock, caption: "6. Camera View - Live feed showing successful identification" },
        { id: 7, src: fclocked, caption: "7. Access Denied - Security lock active for unregistered face" }
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
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-purple-100 dark:border-gray-700 mb-6 relative">
              <span className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-sm font-bold rounded px-3 py-1 z-10">
                {project.screenshots.findIndex(screenshot => screenshot.src === activeImage) + 1}
              </span>
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
              <div className="space-y-4 max-h-56 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
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
