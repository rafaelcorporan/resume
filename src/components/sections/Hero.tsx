import React from 'react';
import { Download } from 'lucide-react';
import { personalData } from '../../data/resume-data';
import SocialLinks from '../ui/SocialLinks';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="relative">
                {personalData.name}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-800 dark:bg-gray-200"></span>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
              {personalData.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              {personalData.about}
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="#" 
                className="px-6 py-3 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 rounded-md flex items-center gap-2 transition-colors hover:bg-gray-700 dark:hover:bg-gray-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <SocialLinks links={personalData.socialLinks} />
            </div>
          </div>
          
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img 
                  src={personalData.avatarUrl} 
                  alt={personalData.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -z-10 top-5 left-5 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;