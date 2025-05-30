import React from 'react';

interface EducationItemProps {
  institution: string;
  degree: string;
  duration: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ institution, degree, duration }) => {
  return (
    <div className="mb-10 relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-gray-800 dark:before:bg-gray-300 before:shadow-md before:-ml-1.5">
      <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-300 dark:bg-gray-700"></div>
      <h3 className="text-xl font-bold">{institution}</h3>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium text-gray-600 dark:text-gray-300">{degree}</span>
        <span className="text-gray-500 dark:text-gray-400">{duration}</span>
      </div>
    </div>
  );
};

export default EducationItem;