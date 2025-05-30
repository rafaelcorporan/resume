import React from 'react';
import SocialLinks from '../ui/SocialLinks';
import { personalData } from '../../data/resume-data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-850">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © {currentYear} {personalData.name}. All rights reserved.
            </p>
          </div>
          
          <SocialLinks links={personalData.socialLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;