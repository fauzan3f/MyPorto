import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Data project (dalam aplikasi sebenarnya mungkin diambil dari API)
  const projectsData = [
    {
      id: "iot-fish-feeder",
      title: "IOT Fish Feeder",
      slug: "iot-fish-feeder",
      description: "Automated fish feeding system with temperature monitoring and real-time data tracking. This project combines IoT sensors, a microcontroller, and a mobile app to automate fish feeding and monitor water conditions.",
      fullDescription: "The IOT Fish Feeder is a comprehensive solution for aquarium enthusiasts and fish farm owners who want to automate and optimize their fish feeding process. The system uses temperature sensors, water quality monitors, and a programmable feeding mechanism controlled by a microcontroller. Users can monitor conditions and control feeding schedules remotely via a dedicated mobile application. The system also uses machine learning to optimize feeding schedules based on environmental conditions and fish behavior patterns.",
      category: "IoT & ML",
      image: "https://via.placeholder.com/800x400",
      technologies: ["Arduino", "ESP32", "React Native", "TensorFlow Lite", "Firebase"],
      features: [
        "Automated feeding on customizable schedules",
        "Real-time water temperature monitoring",
        "Remote control via mobile app",
        "ML-based feeding optimization",
        "Data logging and analytics"
      ],
      demoLink: "https://demo.example.com/iot-fish-feeder",
      githubLink: "https://github.com/username/iot-fish-feeder",
      date: "January 2024"
    },
    {
      id: "notetify",
      title: "Notetify",
      slug: "notetify",
      description: "Web-based note taking app with real-time sync, rich text editing, and collaborative features.",
      fullDescription: "Notetify is a modern note-taking application designed for seamless collaboration and productivity. It features a clean, intuitive interface with support for rich text editing, image embedding, and real-time synchronization across all devices. The application supports collaborative editing, allowing multiple users to work on the same notes simultaneously. With robust organization features like folders, tags, and search functionality, Notetify helps users keep their thoughts organized and accessible.",
      category: "Web App",
      image: "https://via.placeholder.com/800x400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AWS"],
      features: [
        "Real-time synchronization",
        "Rich text editor with markdown support",
        "Collaborative editing",
        "Hierarchical organization with folders and tags",
        "Full-text search"
      ],
      demoLink: "https://demo.example.com/notetify",
      githubLink: "https://github.com/username/notetify",
      date: "November 2023"
    },
    {
      id: "fitmate",
      title: "Fitmate",
      slug: "fitmate",
      description: "Mobile fitness tracking app with ML-based recommendations and personalized workout plans.",
      fullDescription: "Fitmate is a comprehensive fitness companion app that uses machine learning to provide personalized workout recommendations and track user progress. The app analyzes user data such as body metrics, fitness goals, and workout history to create tailored workout plans and nutrition advice. With real-time exercise tracking, detailed analytics, and social features, Fitmate helps users stay motivated and achieve their fitness goals efficiently.",
      category: "Mobile & ML",
      image: "https://via.placeholder.com/800x400",
      technologies: ["React Native", "TensorFlow", "Firebase", "Node.js", "Express"],
      features: [
        "Personalized workout recommendations",
        "Real-time exercise tracking",
        "Body metrics tracking and visualization",
        "Nutrition planning and tracking",
        "Community challenges and social sharing"
      ],
      demoLink: "https://demo.example.com/fitmate",
      githubLink: "https://github.com/username/fitmate",
      date: "October 2023"
    },
    {
      id: "parcel",
      title: "Parcel",
      slug: "parcel",
      description: "IoT-based package tracking and delivery system with real-time location updates.",
      fullDescription: "Parcel is an innovative package tracking and delivery system that leverages IoT technology to provide real-time location updates and secure delivery confirmation. The system includes GPS-enabled tracking devices that attach to packages, a central server for data processing, and mobile apps for both delivery personnel and recipients. With features like geofencing, tamper detection, and automated notifications, Parcel enhances the security and transparency of the delivery process.",
      category: "IoT",
      image: "https://via.placeholder.com/800x400",
      technologies: ["IoT Sensors", "GPS", "React Native", "Node.js", "MongoDB"],
      features: [
        "Real-time package location tracking",
        "Geofencing for automated notifications",
        "Tamper detection",
        "Delivery confirmation with digital signatures",
        "Route optimization for delivery personnel"
      ],
      demoLink: "https://demo.example.com/parcel",
      githubLink: "https://github.com/username/parcel",
      date: "August 2023"
    },
    {
      id: "fingoch",
      title: "FinGoch",
      slug: "fingoch",
      description: "Mobile banking app with ML-powered fraud detection and financial management tools.",
      fullDescription: "FinGoch is a secure mobile banking application that combines traditional banking features with advanced fraud detection and financial management tools. The app uses machine learning algorithms to detect unusual transaction patterns and prevent fraud in real-time. With comprehensive budgeting tools, expense tracking, and investment management features, FinGoch helps users take control of their financial health while ensuring their banking activities remain secure.",
      category: "Mobile & ML",
      image: "https://via.placeholder.com/800x400",
      technologies: ["Flutter", "TensorFlow", "Django", "PostgreSQL", "AWS"],
      features: [
        "Real-time fraud detection",
        "Secure authentication with biometrics",
        "Comprehensive expense tracking and budgeting",
        "Investment portfolio management",
        "Automated savings recommendations"
      ],
      demoLink: "https://demo.example.com/fingoch",
      githubLink: "https://github.com/username/fingoch",
      date: "June 2023"
    },
    {
      id: "ethereum-anomaly",
      title: "Ethereum Anomaly",
      slug: "ethereum-anomaly",
      description: "Blockchain anomaly detection for Ethereum network using advanced pattern recognition.",
      fullDescription: "Ethereum Anomaly is a sophisticated tool designed to detect unusual activities and potential security threats on the Ethereum blockchain. Using a combination of statistical analysis, machine learning, and graph theory, the system identifies patterns that deviate from normal blockchain behavior. The tool provides real-time alerts for potential smart contract vulnerabilities, unusual transaction patterns, and other anomalies that might indicate security issues or fraudulent activities on the Ethereum network.",
      category: "Blockchain",
      image: "https://via.placeholder.com/800x400",
      technologies: ["Python", "TensorFlow", "Web3.js", "Ethereum", "GraphQL"],
      features: [
        "Smart contract vulnerability detection",
        "Transaction pattern analysis",
        "Real-time anomaly alerts",
        "Historical blockchain data analysis",
        "Visualization of network activity"
      ],
      demoLink: "https://demo.example.com/ethereum-anomaly",
      githubLink: "https://github.com/username/ethereum-anomaly",
      date: "May 2023"
    }
  ];

  useEffect(() => {
    // Dalam aplikasi sebenarnya, ini mungkin API call
    setLoading(true);
    const foundProject = projectsData.find(p => p.slug === slug);
    setProject(foundProject);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/#projects" className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/#projects" 
          className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full">
                {project.category}
              </span>
            </div>
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            
            <div className="flex items-center flex-wrap gap-4 mb-8">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Calendar className="w-5 h-5 mr-2" />
                {project.date}
              </div>
              
              <div className="flex gap-4 ml-auto">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.fullDescription}
              </p>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-3">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center mt-12">
              <a 
                href={project.demoLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors mx-2"
              >
                Launch Demo
              </a>
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="px-8 py-3 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800 transition-colors mx-2"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
