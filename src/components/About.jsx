import React, { useState } from 'react';
import { Cpu, Code, Palette, BookOpen, Database, Globe, X } from 'lucide-react';
import certif1 from '../assets/udemy1.jpg';
import certif2 from '../assets/skillage.png';
import certif3 from '../assets/codespace.jpg';

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "Advanced Web Development",
      issuer: "Udemy",
      date: "2024",
      image: certif1
    },
    {
      title: "Front End Development",
      issuer: "Skillage",
      date: "2023",
      image: certif2
    },
    {
      title: "Backend Development",
      issuer: "Codespace",
      date: "2024",
      image: certif3
    }
  ];

  const skills = [
    { 
      name: "Node.js", 
      icon: <Code className="w-16 h-16" />, 
      description: "Backend development with Express.js, RESTful APIs, and database integration" 
    },
    { 
      name: "JavaScript", 
      icon: <Palette className="w-16 h-16" />, 
      description: "Modern ES6+, async programming, and frontend development" 
    },
    { 
      name: "React.js", 
      icon: <Cpu className="w-16 h-16" />, 
      description: "Building interactive UIs with components, hooks, and context API" 
    },
    { 
      name: "Web3 & Blockchain", 
      icon: <Globe className="w-16 h-16" />, 
      description: "Smart contracts, decentralized applications, and blockchain architecture" 
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section 
        id="about" 
        className="py-20 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800 relative"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about crafting seamless digital experiences through code. I specialize in building modern web applications with React, TypeScript, and Node.js, while diving deep into the decentralized world of blockchain and smart contracts. My mission: bridging cutting-edge technology with intuitive design.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
              My Skills
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-2"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-8 flex flex-col items-center text-center shadow-md"
                >
                  <div className="text-purple-600 dark:text-purple-400 mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
              My Certificates
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mt-2"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificates.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg"
                >
                  <div 
                    className="block relative overflow-hidden group cursor-pointer"
                    onClick={() => openLightbox(cert.image)}
                  >
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate" 
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default About;
