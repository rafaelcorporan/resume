import React from 'react';

interface ExperienceItemProps {
  company: string;
  position: string;
  duration: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, position, duration, description }) => {
  return (
    <div className="mb-10 relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-gray-800 dark:before:bg-gray-300 before:shadow-md before:-ml-1.5">
      <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-300 dark:bg-gray-700"></div>
      <h3 className="text-xl font-bold">{position}</h3>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium text-gray-600 dark:text-gray-300">{company}</span>
        <span className="text-gray-500 dark:text-gray-400">{duration}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default ExperienceItem;