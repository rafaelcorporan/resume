import React from 'react';
import Section from '../ui/Section';
import { personalData } from '../../data/resume-data';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {personalData.about}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Throughout my career, I've worked with startups and established companies to create digital experiences that not only look beautiful but also solve real business problems.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I believe in user-centered design principles and design thinking methodologies to create products that truly resonate with users while meeting business objectives.
          </p>
        </div>
        
        <div className="md:col-span-5 flex flex-col space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <div>
            <h3 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">Location</h3>
            <p className="text-gray-800 dark:text-gray-200">{personalData.location}</p>
          </div>
          <div>
            <h3 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">Email</h3>
            <p className="text-gray-800 dark:text-gray-200">{personalData.email}</p>
          </div>
          <div>
            <h3 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-2">Phone</h3>
            <p className="text-gray-800 dark:text-gray-200">{personalData.phone}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;